import React from "react";

const dataArticles = [
  {
    id: "1",
    title: "Hydrogen VS Electric Cars",
    content: "Will hydrogen-fueled cars ever catch up to EVs?",
  },
  {
    id: "2",
    title: "The Downsides of AI Artistry",
    content:
      "What are the possible adverse effects of on-demand AI image generation?",
  },
  {
    id: "3",
    title: "Is VC Funding Drying Up?",
    content:
      "Private funding by VC firms is down 50% YOY. We take a look at what that means.",
  },
];

function NewArticles() {
  return (
    <div className="bg-verydarkblue h-full grid place-content-between m-4 p-4 mb-16 xl:m-0  ">
      <h1 className="text-softorange font-bold text-3xl pt-4">New</h1>
      {dataArticles.map((item) => (
        <div
          key={item.id}
          className="text-offwhite border-b last:border-0 pb-7 xl:hover:text-softorange xl:hover:cursor-pointer"
        >
          <h2 className=" font-bold text-xl py-2">{item.title}</h2>
          <p className="text-[15px] text-grayishblue">{item.content}</p>
        </div>
      ))}
    </div>
  );
}

export default NewArticles;
