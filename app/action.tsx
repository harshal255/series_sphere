"use server";

import SeriesCard, { WebSeriesProp } from "@/components/SeriesCard";

export const fetchSeries = async (page: number) => {
  const response = await fetch(
    `https://indian-web-series-api.vercel.app/series?page=${page}&limit=8`
  );

  const data = await response.json();
  return data.map((item: WebSeriesProp, index: number) => (
    <SeriesCard key={index} series={item} index={index} />
  ));
};
