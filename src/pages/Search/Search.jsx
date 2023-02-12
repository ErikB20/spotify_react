import { useState, useRef, useContext, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { TokenContext } from "../../App";
import Axios from "axios";
import Dropdown from "../../components/Dropdown";
import Card from "../../components/Card";
import AlbumImage from "../../components/AlbumImage";
import ArtistImage from "../../components/ArtistImage";
import TrackList from "../../components/TrackList";

const searchTypes = [
  { id: 1, name: "album" },
  { id: 2, name: "artist" },
  { id: 3, name: "track" },
];

export default function Search() {
  const token = useContext(TokenContext);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchType, setSearchType] = useState(searchTypes[0]);
  const [results, setResults] = useState([]);

  useEffect(() => {
    if (searchQuery == "") return;
    getResults();
  }, [searchType]);

  const getResults = async (e) => {
    scroll(0, 0);
    if (e) e.preventDefault();
    const { data } = await Axios.get("https://api.spotify.com/v1/search", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        q: searchQuery,
        type: searchType.name,
      },
    });
    setResults(data);
  };
  const renderResults = () => {
    if (results.artists) {
      return (
        <div className="mb-16 flex flex-wrap justify-center gap-[1rem] pt-[100px]">
          {results.artists.items.map((item) => (
            <Card key={item.id}>
              <ArtistImage url={item.images[0]?.url} name={item.name} />
              <div>
                <div className="font-['GothamBold'] text-white">
                  {item.name}
                </div>
                <div className="text-xs text-[#A5A5A5]">Artist</div>
              </div>
            </Card>
          ))}
        </div>
      );
    } else if (results.albums) {
      return (
        <div className="mb-16 flex flex-wrap justify-center gap-[1rem] pt-[100px]">
          {results.albums.items.map((item) => (
            <Card key={item.id}>
              <AlbumImage url={item.images[0]?.url} name={item.name} />
              <div>
                <div className="w-full truncate font-['GothamBold'] text-white">
                  {item.name}
                </div>
                <div className="h-[30px] text-xs text-[#A5A5A5]">
                  {item.release_date} &#9679; {item.artists[0].name}
                </div>
              </div>
            </Card>
          ))}
        </div>
      );
    } else if (results.tracks) {
      return <TrackList tracks={results.tracks.items} />;
    }
  };
  return (
    <>
      <form
        onSubmit={getResults}
        className="fixed top-0 z-[1] flex w-[calc(100%-180px)] justify-center bg-neutral-900 py-5"
      >
        <Dropdown
          options={searchTypes}
          value={searchType}
          setValue={setSearchType}
        />
        <input
          className="w-10/12 bg-white/80 py-2 pl-2 placeholder:text-inherit placeholder:opacity-50 focus:outline-none md:w-8/12"
          type="text"
          placeholder="What do you want to listen to?"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <button
          className="w-[45px] bg-green-600 text-white transition-all hover:scale-105 md:rounded-r-full"
          type="submit"
        >
          <FontAwesomeIcon icon={["fas", "search"]} className="text-white" />
        </button>
      </form>
      {renderResults()}
    </>
  );
}
