const passport = require("passport")
const LocalStrategy = require("passport-local");
const { prisma } = require("../db/queries")

passport.use(
    new LocalStrategy(async (username, password, done) => {
        try {
            const user = await prisma.user.findFirst({
                where: { username },
            })
            
            if (!user) {
                return done(null, false);
            }
            if (user.password !== password) {
                return done(null, false);
            }
            return done(null, user)
        } catch (err) {
            return done(err)
        }
    })
);

passport.serializeUser((user, done) => {
    done(null, user.id)
});

passport.deserializeUser( async(id, done) => {
    try {
        const user = prisma.user.findFirst({
            where: { id },
        });
        
        done(null, user)
    } catch(err) {
        return done(err)
    }
});


module.exports = passport


