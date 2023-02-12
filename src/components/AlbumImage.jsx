import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const AlbumImage = ({ url, name }) => {
  return url ? (
    <img src={url} alt={name} className="h-auto w-full rounded-md shadow-2xl" />
  ) : (
    <div className="flex h-[168px] w-[168px] items-center justify-center rounded-md bg-white/10 shadow-2xl">
      <FontAwesomeIcon icon={["fas", "user"]} className="h-[50px] text-white" />
    </div>
  );
};

export default AlbumImage;
