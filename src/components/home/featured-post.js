import { sortBlogs } from "@/src/utils";
import React from "react";
import BlogLayoutOne from "../blog/blog-layout-one";
import BlogLayoutTwo from "../blog/blog-layout-two";

const FeaturedPost = ({ blogs }) => {
  const sortedBlogs = sortBlogs(blogs);

  return (
    <section className="w-full mt-16 sm:mt-24 md:mt-32 px-5 sm:px-10 md:px-24 sxl:px-32 flex flex-col items-center justify-center">
      <h2 className="w-full inline-block font-bold capitalize text-2xl medium:text-4xl">
        Featured Posts
      </h2>
      <div className="grid grid-cols-2 grid-rows-2 gap-6 mt-10 sm:mt-16">
        <article
          key="featured-1"
          className="col-span-2 sxl:col-span-1 row-span-2 relative"
        >
          <BlogLayoutOne blog={sortedBlogs[1]} />
        </article>
        <article
          key="featured-2"
          className="col-span-2 md:col-span-1 row-span-1 relative"
        >
          <BlogLayoutTwo blog={sortedBlogs[2]} />
        </article>
        <article
          key="featured-3"
          className="col-span-2 md:col-span-1 row-span-1 relative"
        >
          <BlogLayoutTwo blog={sortedBlogs[3]} />
        </article>
      </div>
    </section>
  );
};

export default FeaturedPost;
