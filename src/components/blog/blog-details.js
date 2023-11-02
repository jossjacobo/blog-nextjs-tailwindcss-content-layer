import { format, parseISO } from "date-fns";
import { slug } from "github-slugger";
import Link from "next/link";
import React from "react";

const BlogDetails = ({ blog, slug: blogSlug }) => {
  return (
    <div className="px-10 bg-accent text-light py-2 flex items-center justify-around flex-wrap text-xl font-medium mx-10 rounded-lg">
      <time className="m-3">
        {format(parseISO(blog.publishedAt), "LLL d, yyyy")}
      </time>
      <span className="m-3">10 views</span>
      <div className="m-3">{blog.readingTime.text}</div>
      <Link href={`/categories/${slug(blog.tags[0])}`}>
        #{`${blog.tags[0]}`}
      </Link>
    </div>
  );
};

export default BlogDetails;
