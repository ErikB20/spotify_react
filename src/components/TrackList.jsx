import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import ExplicitIcon from "./ExplicitIcon";

const TrackList = ({ tracks }) => {
  return (
    <div className="mb-16 pt-[100px]">
      <TrackHeader />
      {tracks.map((track, index) => (
        <TrackElement key={track.id} data={track} index={index} />
      ))}
    </div>
  );
};

const TrackHeader = () => {
  return (
    <div className="sticky top-[80px] mx-auto flex w-[95%] min-w-[750px] border-b-[1px] border-[#2A2A2A] bg-neutral-900 py-4 text-xs text-[#A5A5A5]">
      <div className="w-[5%] flex-none text-center">#</div>
      <div className="w-[50%] flex-initial">TITLE</div>
      <div className="w-[30%] flex-initial">ALBUM</div>
      <div className="mr-8 w-[15%] flex-initial text-end">
        <FontAwesomeIcon icon={["fas", "clock"]} />
      </div>
    </div>
  );
};
const TrackElement = ({ data, index }) => {
  const msToMinutesAndSeconds = (ms) => {
    var minutes = Math.floor(ms / 60000);
    var seconds = ((ms % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
  };
  return (
    <div className="mx-auto flex w-[95%] min-w-[750px] items-center py-4 font-['GothamLight'] text-[#A5A5A5] hover:rounded-sm hover:bg-white/10">
      <div className="w-[5%] flex-none text-center">{index + 1}</div>
      <div className="w-[50%] flex-initial">
        <TrackElementTitle
          AlbumCover={data.album.images[0].url}
          Title={data.name}
          IsExplicit={data.explicit}
          Artists={data.artists}
        />
      </div>
      <div className="w-[30%] flex-initial truncate text-sm">
        {data.album.name}
      </div>
      <div className="mr-8 w-[15%] flex-initial text-end text-sm">
        {msToMinutesAndSeconds(data.duration_ms)}
      </div>
    </div>
  );
};
const TrackElementTitle = ({ AlbumCover, Title, IsExplicit, Artists }) => {
  return (
    <div className="flex w-[265px] gap-3">
      <img
        src={AlbumCover}
        alt={Title}
        className="h-[40px] w-[40px] rounded-sm"
      />
      <div className="w-[100%]">
        <div className="truncate font-['GothamMedium'] text-white">{Title}</div>
        <div className="flex items-center gap-2 text-xs">
          {IsExplicit && <ExplicitIcon />}
          <div className="truncate">
            {Artists.map((artist, index) => (
              <span key={artist.id}>
                <a
                  href={artist.external_urls.spotify}
                  className="hover:underline"
                >
                  {artist.name}
                </a>
                {index + 1 < Artists.length && <span>, </span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrackList;
