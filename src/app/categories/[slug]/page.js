import { allBlogs } from "@/.contentlayer/generated";
import BlogLayoutThree from "@/src/components/blog/blog-layout-three";
import Categories from "@/src/components/blog/categories";
import GitHubSlugger, { slug } from "github-slugger";

const slugger = new GitHubSlugger();
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];

  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags?.map((tag) => {
        let slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });
  return paths;
}

export async function generateMetadata({ params }) {
  return {
    title: `${params.slug.replaceAll("-", " ")} Blogs`,
    description: `Learn more about ${
      params.slug === "all" ? "web development" : params.slug
    } through our collection of expert blogs and tutorials`,
  };
}

const CategoryPage = ({ params }) => {
  const allCategories = ["all"];
  // Filter blogs based on the slug param
  // Construct the allCategories array as you loop through the array
  const blogs = allBlogs.filter((blog) => {
    return blog.tags.some((tag) => {
      const slugify = slug(tag);
      if (!allCategories.includes(slugify)) {
        allCategories.push(slugify);
      }
      if (params.slug === "all") {
        return true;
      }
      return slugify === params.slug;
    });
  });
  return (
    <section className="mt-12 flex flex-col text-dark">
      <div className="px-32 flex flex-col">
        <h1 className="mt-6 font-semibold text-5xl">#{params.slug}</h1>
        <span className="mt-2 inline-block">
          Discover more categories and expand your knowledge!
        </span>
      </div>
      <Categories categories={allCategories} currentSlug={params.slug} />
      <div className="grid grid-cols-3 grid-rows-2 gap-16 mt-24 px-32">
        {blogs.map((blog) => (
          <article key={blog.slug} className="col-span-1 row-span-1 relative">
            <BlogLayoutThree blog={blog} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default CategoryPage;
