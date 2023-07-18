import { useState, useEffect } from 'react';
import axios from 'axios';

import { convertTrackToApp, validateExpiredDate } from '../utils';
import { UseEpisodeProps, UseEpisodeState } from './interfaces';
import { ITrackResponse } from '../interfaces';

export const useEpisodes = ({ id }: UseEpisodeProps) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<UseEpisodeState>({
    lastFetchTime: 0,
    count: 0,
    data: [],
  });

  useEffect(() => {
    const getEpisodesById = async () => {
      setLoading(true);
      const cacheData = localStorage.getItem(id);
      let cacheFormatted: UseEpisodeState = {
        count: 0,
        data: [],
        lastFetchTime: 0,
      };

      if (cacheData !== null) {
        cacheFormatted = JSON.parse(cacheData) as UseEpisodeState;
      }
      try {
        const currentTime = new Date().getTime();
        const isExpired = validateExpiredDate({ lastFetchTime: cacheFormatted.lastFetchTime, currentTime });

        if (!isExpired && cacheFormatted.data) {
          setData(cacheFormatted);
          setLoading(false);
          return;
        }

        const { data } = await axios.get<{ contents: string }>(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            `https://itunes.apple.com/lookup?id=${id}&media=podcast&entity=podcastEpisode&limit=20`
          )}`
        );
        const typingData = JSON.parse(data.contents) as {
          resultCount: number;
          results: ITrackResponse[];
        };

        const formatData = {
          lastFetchTime: currentTime,
          count: typingData.resultCount - 1,
          data: typingData.results.map(track => convertTrackToApp(track)).slice(1),
        };

        setData(formatData);
        localStorage.setItem(`${id}`, JSON.stringify(formatData));
        setLoading(false);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
        setLoading(false);
      }
    };

    getEpisodesById();
  }, [id, setLoading]);

  return {
    ...data,
    loading,
  };
};
