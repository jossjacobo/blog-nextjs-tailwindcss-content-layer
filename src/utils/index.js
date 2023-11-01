import { compareDesc, parseISO } from "date-fns";

/**
 * Filter out falsy values
 */
export const cx = (...className) => className.filter(Boolean).join(" ");

export const sortBlogs = (blogs) => {
  return blogs
    .slice()
    .sort((a, b) =>
      compareDesc(parseISO(a.publishedAt), parseISO(b.publishedAt))
    );
};
