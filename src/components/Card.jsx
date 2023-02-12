import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Card = ({ children }) => {
  return (
    <div className="card relative flex h-[280px] w-[200px] cursor-pointer flex-col justify-between rounded-md bg-neutral-800/50 p-4 transition-all duration-200 ease-in-out hover:bg-neutral-800">
      <div className="play-btn absolute left-[125px] top-[125px] h-[50px] w-[50px] rounded-full bg-green-500 opacity-0 transition-all hover:scale-105">
        <FontAwesomeIcon
          icon={["fas", "play"]}
          className="relative top-[13px] left-[18px] h-auto w-[17px] text-black"
        />
      </div>
      {children}
    </div>
  );
};

export default Card;
