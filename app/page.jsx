import Image from "next/image";
import { Inter } from "@next/font/google";
import NavBar from "@/components/NavBar";
import MainBody from "@/components/MainBody";
import NewArticles from "@/components/NewArticles";
import MostViewed from "@/components/MostViewed";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

export default function Home() {
  return (
    <main
      className={`max-w-sm xl:max-w-6xl xl:grid xl:grid-cols-3 xl:gap-6 ${inter.className}`}
    >
      <div className="xl:col-span-3 xl:row-start-1">
        <NavBar />
      </div>
      <div className="xl:col-span-2 xl:row-start-2">
        <MainBody />
      </div>
      <div className="">
        <NewArticles />
      </div>
      <div className="xl:col-span-3">
        <MostViewed />
      </div>
    </main>
  );
}
