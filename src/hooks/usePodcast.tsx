import { useState, useEffect } from 'react';
import { IPodcast } from '../interfaces';
import { http } from '../utils';
import { IPodcastResponse } from '../interfaces/responses.interface';
import { convertPodcastToApp } from '../utils/converts';

export const usePodcast = () => {
  const [data, setData] = useState<IPodcast[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const lastFetchTime = Number(localStorage.getItem('lastFetchTime') ?? 0);
      const storedData = localStorage.getItem('podcasts');

      try {
        const currentTime = new Date().getTime();
        const oneDayInMillis = 24 * 60 * 60 * 1000;
        const isExpired = lastFetchTime === 0 || currentTime - lastFetchTime > oneDayInMillis;

        if (!isExpired && storedData) {
          setData(JSON.parse(storedData) as IPodcast[]);
          return;
        }

        if (isExpired || !storedData) {
          const { data } = await http.get<IPodcastResponse>('/toppodcasts/limit=100/genre=1310/json');
          const podcasts = data.feed.entry.map(podcast => convertPodcastToApp(podcast));
          localStorage.setItem('lastFetchTime', JSON.stringify(currentTime));
          localStorage.setItem('podcasts', JSON.stringify(podcasts));
          setData(podcasts);
          return;
        }
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    };

    fetchData();
  }, []);

  return {
    data,
  };
};
