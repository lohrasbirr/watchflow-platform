
import { Play } from "lucide-react";
import { Link } from "react-router-dom";

interface ContentCardProps {
  id: string;
  title: string;
  image: string;
  type: "movie" | "series";
  year: number;
}

const ContentCard = ({ id, title, image, type, year }: ContentCardProps) => {
  return (
    <Link
      to={`/${type}/${id}`}
      className="group relative overflow-hidden rounded-lg transition-transform duration-300 hover:scale-105"
    >
      <div className="aspect-[2/3] w-full overflow-hidden">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
          loading="lazy"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-0 left-0 right-0 p-4">
          <h3 className="text-white font-semibold text-lg">{title}</h3>
          <div className="flex items-center gap-2 mt-2">
            <span className="text-vod-text-secondary text-sm">{year}</span>
            <span className="text-vod-text-secondary text-sm capitalize">
              {type}
            </span>
          </div>
          <button className="mt-3 flex items-center gap-2 bg-vod-accent text-white px-4 py-2 rounded-full text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <Play className="w-4 h-4" />
            Watch Now
          </button>
        </div>
      </div>
    </Link>
  );
};

export default ContentCard;
