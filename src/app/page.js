import { allBlogs } from "@contentlayer";
import HomeCoverSection from "../components/home/home-cover-section";
import FeaturedPost from "../components/home/featured-post";
import RecentPosts from "../components/home/recent-posts";

console.log(allBlogs);

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <HomeCoverSection blogs={allBlogs} />
      <FeaturedPost blogs={allBlogs} />
      <RecentPosts blogs={allBlogs} />
    </main>
  );
}
