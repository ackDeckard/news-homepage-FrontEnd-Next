import Image from "next/image";
import React from "react";

const viewed = [
  {
    id: "01",
    title: "Reviving Retro PCs",
    content: "What happens when old PCs are given modern upgrades?",
    imgUrl: "/image-retro-pcs.jpg",
    altDesc: "very old pcs",
  },
  {
    id: "02",
    title: "Top 10 Laptops of 2022",
    content: "Our best picks for various needs and budgets.",
    imgUrl: "/image-top-laptops.jpg",
    altDesc: "laptop keyboard with red lights",
  },
  {
    id: "03",
    title: "The Growth of Gaming",
    content: "How the pandemic has sparked fresh opportunities.",
    imgUrl: "/image-gaming-growth.jpg",
    altDesc: "joystick falling in a hand",
  },
];

function MostViewed() {
  return (
    <div className="m-4 xl:m-0 xl:grid xl:grid-flow-col xl:w-fit xl:gap-x-6">
      {viewed.map((item) => (
        <div
          key={item.id}
          className="grid grid-cols-3 justify-evenly gap-4 pb-6"
        >
          <Image
            src={item.imgUrl}
            alt={item.altDesc}
            width={0}
            height={0}
            unoptimized={true}
            className="w-24 h-32"
          />
          <div className="col-span-2 ">
            <h1 className="text-3xl text-grayishblue font-bold">{item.id}</h1>
            <h2 className="text-lg font-bold py-2 xl:hover:text-softred xl:hover:cursor-pointer">
              {item.title}
            </h2>
            <p className="text-sm text-darkgrayishblue">{item.content}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default MostViewed;
