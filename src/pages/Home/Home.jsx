import PageHeader from "../../components/PageHeader";
import Card from "../../components/Card";
import AlbumImage from "../../components/AlbumImage";
import ArtistImage from "../../components/ArtistImage";

export default function Home() {
  return (
    <div className="pt-5 pl-5">
      <PageHeader Title="Home" />
      <div className="mt-16">
        <Card>
          <AlbumImage
            url={
              "https://i.scdn.co/image/ab6761610000e5ebe707b87e3f65997f6c09bfff"
            }
            name={"Travis Scott"}
          />
          <div>
            <div className="font-['GothamBold'] text-white">Travis Scott</div>
            <div className="text-xs text-[#A5A5A5]">Artist</div>
          </div>
        </Card>
      </div>
    </div>
  );
}
