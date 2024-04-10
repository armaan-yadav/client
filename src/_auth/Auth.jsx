import React, { useEffect, useState } from "react";
import Form from "../components/xothers/Form";
import { FaGithub } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import logo from "/assets/logo.svg";
import { signInWithGithub, signInWithGoogle } from "../utils/helper";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Auth = () => {
  const [showLogin, setShowLogin] = useState(false);
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  useEffect(() => {
    user && navigate("/");
  }, [user]);

  return (
    <div className="h-screen w-screen text-white flex items-center justify-center flex-col gap-2 relative">
      <Link to={"/"}>
        <img
          src={logo}
          alt="logo"
          className="absolute top-3 left-3 opacity-50 md:h-10 h-12"
        />
      </Link>
      <div className="md:w-[330px] w-[300px]  flex flex-col gap-3 justify-center">
        <Form showLogin={showLogin} />

        <p className="text-sm text-center">
          {!showLogin ? (
            <>
              {" "}
              Already have an account ?{" "}
              <span
                className="text-emerald-400 cursor-pointer"
                onClick={() => setShowLogin(true)}
              >
                Log in{" "}
              </span>
            </>
          ) : (
            <>
              {" "}
              Don't have an account ?{" "}
              <span
                className="text-emerald-400 cursor-pointer"
                onClick={() => setShowLogin(false)}
              >
                Sign up{" "}
              </span>
            </>
          )}
        </p>
        <div
          className="w-full flex items-center gap-3 justify-center border-[1px] py-2 rounded-md my-2 border-gray-400 text-gray-400 hover:text-gray-200 duration-150 cursor-pointer"
          onClick={async () => {
            signInWithGoogle();
          }}
        >
          <FaGoogle className="text-2xl " />
          Sign In with google
        </div>
        <div
          className="w-full flex items-center gap-3 justify-center border-[1px] py-2 rounded-md border-gray-400 text-gray-400 hover:text-gray-200 duration-150 cursor-pointer"
          onClick={() => {
            signInWithGithub();
          }}
        >
          <FaGithub className="text-2xl" />
          Sign In with github
        </div>
      </div>
    </div>
  );
};

export default Auth;
