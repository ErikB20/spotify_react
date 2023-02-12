import { useState, useEffect } from "react";
import Spotify from "../assets/spotify.svg";

const Login = (props) => {
  const [animate, setAnimate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      setAnimate(true);
    }, 100);
  }, []);
  return (
    <div className="flex h-screen items-center justify-center">
      <div
        className={`text-center font-bold text-white md:rounded-full md:p-24 ${
          animate ? "animate pop" : "opacity-0"
        }`}
      >
        <img
          src={Spotify}
          alt="Spotify Logo"
          width="150"
          className="mx-auto rounded-full shadow-2xl"
        />
        <div className="mt-8 text-4xl">Welcome to Spotify!</div>
        <div className="mt-8 mb-4 font-['GothamLight'] text-lg">
          You aren't logged in. Please log in using your Spotify credentials.
        </div>
        <button
          className="rounded-full border border-white py-4 px-16 transition-all hover:bg-white hover:bg-opacity-10"
          onClick={props.login}
        >
          Log In
        </button>
      </div>
    </div>
  );
};

export default Login;
