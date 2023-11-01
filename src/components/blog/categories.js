import React from "react";
import Category from "./category";
import { slug } from "github-slugger";
import { allBlogs } from "@/.contentlayer/generated";
import GithubSlugger from "github-slugger";

const slugger = new GithubSlugger();
export async function generateStaticParams() {
  const categories = [];
  const paths = [{ slug: "all" }];
  allBlogs.map((blog) => {
    if (blog.isPublished) {
      blog.tags.map((tag) => {
        const slugified = slugger.slug(tag);
        if (!categories.includes(slugified)) {
          categories.push(slugified);
          paths.push({ slug: slugified });
        }
      });
    }
  });
  return paths;
}

const Categories = ({ categories, currentSlug }) => {
  return (
    <div
      className="px-20 mt-10 border-t-2 text-dark border-b-2 border-solid 
      border-dark py-4 flex items-start flex-wrap font-medium mx-10"
    >
      {categories.map((cat) => (
        <Category
          key={cat}
          link={`/categories/${cat}`}
          name={cat}
          active={currentSlug == slug(cat)}
        />
      ))}
    </div>
  );
};

export default Categories;
