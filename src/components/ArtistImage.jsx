import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const ArtistImage = ({ url, name }) => {
  return url ? (
    <img
      src={url}
      alt={name}
      className="h-[168px] w-full rounded-full shadow-2xl"
    />
  ) : (
    <div className="flex h-[168px] w-[168px] items-center justify-center rounded-full bg-white/10 shadow-2xl">
      <FontAwesomeIcon
        icon={["fas", "music"]}
        className="h-[50px] text-white"
      />
    </div>
  );
};

export default ArtistImage;
