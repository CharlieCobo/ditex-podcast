import { useState, useEffect } from 'react';
import { IPodcast } from '../interfaces';
import { http, validateExpiredDate } from '../utils';
import { IPodcastResponse } from '../interfaces/responses.interface';
import { convertPodcastToApp } from '../utils/converts';

export const usePodcasts = () => {
  const [data, setData] = useState<IPodcast[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const getAllPodcast = async () => {
    setIsLoading(true);
    const lastFetchTime = Number(localStorage.getItem('lastFetchTime') ?? 0);
    const storedData = localStorage.getItem('podcasts');

    try {
      const currentTime = new Date().getTime();
      const isExpired = validateExpiredDate({ lastFetchTime, currentTime });

      if (!isExpired && storedData) {
        setData(JSON.parse(storedData) as IPodcast[]);
        setIsLoading(false);
        return;
      }

      if (isExpired || !storedData) {
        const { data } = await http.get<IPodcastResponse>('/us/rss/toppodcasts/limit=100/genre=1310/json');
        const podcasts = data.feed.entry.map(podcast => convertPodcastToApp(podcast));
        localStorage.setItem('lastFetchTime', JSON.stringify(currentTime));
        localStorage.setItem('podcasts', JSON.stringify(podcasts));
        setData(podcasts);
        return;
      }
      setIsLoading(false);
    } catch (error) {
      console.error('Error al obtener los datos:', error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAllPodcast();
  }, []);

  return {
    data,
    isLoading,
  };
};