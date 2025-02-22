
import { Search, User, Menu } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-vod-background/95 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="text-2xl font-bold text-white hover:text-vod-accent transition-colors"
            >
              VOD+
            </Link>
            <div className="hidden md:flex items-center gap-6">
              <Link
                to="/movies"
                className="text-vod-text-secondary hover:text-white transition-colors"
              >
                Movies
              </Link>
              <Link
                to="/series"
                className="text-vod-text-secondary hover:text-white transition-colors"
              >
                Series
              </Link>
              <Link
                to="/new"
                className="text-vod-text-secondary hover:text-white transition-colors"
              >
                New
              </Link>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-vod-text-secondary hover:text-white transition-colors">
              <Search className="w-5 h-5" />
            </button>
            <button className="text-vod-text-secondary hover:text-white transition-colors">
              <User className="w-5 h-5" />
            </button>
            <button className="md:hidden text-vod-text-secondary hover:text-white transition-colors">
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
