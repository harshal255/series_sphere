import Image from "next/image";
import { Motion } from "./Motion";

export interface WebSeriesProp {
  id: number;
  name: string;
  rating: number;
  description: string;
  category: string[];
  platform: string;
  casting: {
    actors: any[]; // You may replace 'any[]' with a more specific actor interface if needed
    director: any[]; // You may replace 'any[]' with a more specific director interface if needed
  };
  poster: string;
  thumbnail: string;
  episodeCount: number;
  seasons: number;
  releaseDate: string;
}

interface Prop {
  series: WebSeriesProp;
  index: number;
}

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};
function AnimeCard({ series, index }: Prop) {
  return (
    <Motion
      variants={variants}
      initial="hidden"
      animate="visible"
      transition={{ delay: index * 0.5, ease: "easeInOut", duration: 0.5 }}
      className="max-w-sm rounded relative w-full"
    >
      <div className="relative w-full h-[40vh]">
        <Image
          src={series.thumbnail}
          alt={series.name}
          fill
          className="rounded-xl"
          layout="fill"
        />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {series.name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">
              {series.rating}
            </p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {series.episodeCount || series.episodeCount}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">
              {series.seasons}
            </p>
          </div>
        </div>
      </div>
    </Motion>
  );
}

export default AnimeCard;
