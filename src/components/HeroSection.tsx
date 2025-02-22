
import { Play, Info } from "lucide-react";
import { Link } from "react-router-dom";

interface HeroSectionProps {
  title: string;
  description: string;
  backdropImage: string;
  contentId: string;
  contentType: "movie" | "series";
}

const HeroSection = ({
  title,
  description,
  backdropImage,
  contentId,
  contentType,
}: HeroSectionProps) => {
  return (
    <div className="relative h-[80vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={backdropImage}
          alt={title}
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent" />
      </div>
      <div className="relative h-full container mx-auto px-4 flex items-center">
        <div className="max-w-2xl animate-fade-up">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {title}
          </h1>
          <p className="text-lg text-vod-text-secondary mb-8">{description}</p>
          <div className="flex items-center gap-4">
            <Link
              to={`/${contentType}/${contentId}/watch`}
              className="flex items-center gap-2 bg-vod-accent hover:bg-vod-accent/90 text-white px-6 py-3 rounded-full text-lg font-medium transition-colors"
            >
              <Play className="w-5 h-5" />
              Watch Now
            </Link>
            <Link
              to={`/${contentType}/${contentId}`}
              className="flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-6 py-3 rounded-full text-lg font-medium backdrop-blur-sm transition-colors"
            >
              <Info className="w-5 h-5" />
              More Info
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
