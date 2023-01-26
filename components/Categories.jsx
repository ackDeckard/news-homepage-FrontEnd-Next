import Link from "next/link";
import React from "react";

const category = [
  {
    id: "1",
    name: "Home",
  },
  {
    id: "2",
    name: "New",
  },
  {
    id: "3",
    name: "Popular",
  },
  {
    id: "4",
    name: "Tending",
  },
  {
    id: "5",
    name: "Categories",
  },
];

function Categories() {
  return (
    <ul className="text-xl grid gap-4 p-4 mt-28 xl:grid-flow-col xl:mt-0 xl:p-0">
      {category.map((item) => (
        <Link
          href="#"
          key={item.id}
          className="xl:hover:text-softorange xl:duration-300"
        >
          <li>{item.name}</li>
        </Link>
      ))}
    </ul>
  );
}

export default Categories;
