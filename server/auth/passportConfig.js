const passport = require("passport")
const bcrypt = require("bcryptjs")
const LocalStrategy = require("passport-local");
const JwtStrategy = require("passport-jwt").Strategy
const ExtJwt = require("passport-jwt").ExtractJwt
const { prisma } = require("../db/queries")

opts = {
 jwtFromRequest: ExtJwt.fromAuthHeaderAsBearerToken(),
 secretOrKey: process.env.JWT_SECRET
}


passport.use(
  new LocalStrategy(async (username, password, done) => {
    try {
        const user = await prisma.user.findFirst({
          where: { username },
        })
        if (!user) {
          return done(null, false, { message: "Incorrect Username"});
        }
        const match = await bcrypt.compare(password, user.password)
        if (!match) {
          return done(null, false, { message: "Incorrect Password"});
        }
        return done(null, user)
    } catch (err) {
      return done(err)
    }
  })
);

passport.use(new JwtStrategy(opts, async function(jwt_payload, done) {
  try {
    const user = await prisma.findFirst({
      where: { id: jwt_payload.id }
    });

    if(user) {
      return done(null, user);
    } else {
      return done(null, false);
    }
  } catch (error) {
    return done(error, false)
  }
}));



module.exports = passport


