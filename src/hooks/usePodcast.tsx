import { useState, useEffect } from 'react';
import { IPodcast } from '../interfaces';
import { http } from '../utils';
import { IPodcastResponse } from '../interfaces/responses.interface';
import { convertPodcastToApp } from '../utils/converts';

export const usePodcast = () => {
  const [data, setData] = useState<IPodcast[]>([]);
  const [lastFetchTime, setLastFetchTime] = useState<number>(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const currentTime = new Date().getTime();
        const oneDayInMillis = 24 * 60 * 60 * 1000;
        const isExpired = lastFetchTime === null || currentTime - lastFetchTime > oneDayInMillis;

        if (isExpired) {
          const { data } = await http.get<IPodcastResponse>('/toppodcasts/limit=100/genre=1310/json');
          const podcasts = data.feed.entry.map(podcast => convertPodcastToApp(podcast));
          setData(podcasts);
          setLastFetchTime(currentTime);
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, [lastFetchTime]);

  return {
    data,
  };
};
