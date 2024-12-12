import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignupForm";
import { useState } from "react";

const Landing = () => {
  const [toggleLogin, setToggleLogin] = useState(false);
  const [toggleSignUp, setToggleSignUp] = useState(false);

  const handleToggleLogin = () => {
    setToggleLogin(!toggleLogin);
  };

  const handleToggleSignUp = () => {
    setToggleSignUp(!toggleSignUp);
  };

  return (
    <>
      <div className="bg-radixindigo-200 h-screen">
        <Navbar>
          <p className="hover:bg-radixgray-300 rounded-lg px-1 py-0.5 cursor-pointer">
            Home
          </p>
          <p
            className=" hover:bg-radixgray-300 rounded-lg px-1 py-0.5 cursor-pointer"
            onClick={handleToggleLogin}
          >
            Log in
          </p>
          <p
            className=" hover:bg-radixgray-300 rounded-lg px-1 py-0.5 cursor-pointer"
            onClick={handleToggleSignUp}
          >
            Sign up
          </p>
          {toggleLogin ? <LoginForm /> : null}
          {toggleSignUp ? <SignupForm /> : null}
        </Navbar>

        <Hero />
      </div>
    </>
  );
};

export default Landing;
