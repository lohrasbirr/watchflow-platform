
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ContentRow from "@/components/ContentRow";

// Temporary mock data
const featuredContent = {
  title: "The Last of Us",
  description:
    "Twenty years after modern civilization has been destroyed, Joel, a hardened survivor, is hired to smuggle Ellie, a 14-year-old girl, out of an oppressive quarantine zone.",
  backdropImage: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
  contentId: "1",
  contentType: "series" as const,
};

const mockContent = Array.from({ length: 10 }, (_, i) => ({
  id: String(i + 1),
  title: `Content Title ${i + 1}`,
  image: "https://images.unsplash.com/photo-1626814026160-2237a95fc5a0",
  type: i % 2 === 0 ? "movie" : "series",
  year: 2021 + Math.floor(i / 3),
}));

const Index = () => {
  return (
    <div className="min-h-screen bg-vod-background">
      <Navigation />
      <main className="pb-8">
        <HeroSection {...featuredContent} />
        <div className="space-y-8 mt-8">
          <ContentRow title="Trending Now" items={mockContent} />
          <ContentRow title="New Releases" items={mockContent} />
          <ContentRow title="Popular Series" items={mockContent} />
        </div>
      </main>
    </div>
  );
};

export default Index;
