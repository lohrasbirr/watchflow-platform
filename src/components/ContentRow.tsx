
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, useState } from "react";
import ContentCard from "./ContentCard";

interface Content {
  id: string;
  title: string;
  image: string;
  type: "movie" | "series";
  year: number;
}

interface ContentRowProps {
  title: string;
  items: Content[];
}

const ContentRow = ({ title, items }: ContentRowProps) => {
  const rowRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const scroll = (direction: "left" | "right") => {
    if (rowRef.current) {
      const { scrollLeft, clientWidth } = rowRef.current;
      const scrollTo =
        direction === "left"
          ? scrollLeft - clientWidth
          : scrollLeft + clientWidth;
      
      rowRef.current.scrollTo({
        left: scrollTo,
        behavior: "smooth",
      });

      // Update scroll buttons visibility
      setTimeout(() => {
        if (rowRef.current) {
          setCanScrollLeft(rowRef.current.scrollLeft > 0);
          setCanScrollRight(
            rowRef.current.scrollLeft <
              rowRef.current.scrollWidth - rowRef.current.clientWidth
          );
        }
      }, 300);
    }
  };

  return (
    <div className="relative">
      <h2 className="text-white text-2xl font-semibold mb-4 px-4">{title}</h2>
      <div className="group relative">
        <div
          ref={rowRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide px-4 pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {items.map((item) => (
            <div key={item.id} className="flex-none w-[200px]">
              <ContentCard {...item} />
            </div>
          ))}
        </div>
        {canScrollLeft && (
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronLeft className="w-6 h-6 text-white" />
          </button>
        )}
        {canScrollRight && (
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-black/50 p-2 rounded-full transform translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <ChevronRight className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
};

export default ContentRow;
