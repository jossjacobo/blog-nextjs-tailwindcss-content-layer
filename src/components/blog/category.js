import { cx } from "@/src/utils";
import Link from "next/link";
import React from "react";

const Category = ({ link = "#", name, active, ...props }) => {
  return (
    <Link
      href={link}
      className={cx(
        "inline-block py-2 px-10 rounded-full m-2",
        "border-2 border-solid border-dark",
        "hover:scale-105 transition-all ease duration-200",
        props.className,
        active ? "bg-dark text-light" : "bg-light text-dark"
      )}
    >
      #{name}
    </Link>
  );
};

export default Category;
