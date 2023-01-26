import Image from "next/image";
import React from "react";

function MainBody() {
  return (
    <section className="m-4 xl:grid xl:grid-cols-2 xl:m-0 xl:gap-x-6">
      <Image
        src="/image-web-3-mobile.jpg"
        alt="web 3 building blocks"
        width={0}
        height={0}
        unoptimized={true}
        className="w-full h-auto mr-4 xl:hidden"
      />
      <Image
        src="/image-web-3-desktop.jpg"
        alt="web 3 building blocks"
        width={0}
        height={0}
        unoptimized={true}
        className="hidden w-full h-auto mr-4 xl:block xl:col-span-2"
      />

      <h1 className="text-3xl font-extrabold py-6 pr-16 xl:py-0 xl:pr-0 xl:pt-6 xl:text-6xl xl:self-center">
        The Bright Future of Web 3.0?
      </h1>
      <div className="xl:grid h-full xl:pt-7">
        <p className="text-darkgrayishblue text-[15px] mb-4 ">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <button className="bg-softred text-white px-4 py-3 w-1/2 font-bold tracking-[0.2em] text-sm mb-10 xl:mb-0 xl:px-2 xl:py-1 xl:hover:bg-verydarkblue xl:duration-300">
          READ MORE
        </button>
      </div>
    </section>
  );
}

export default MainBody;
