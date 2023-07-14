import { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { ITrack, ITrackResponse } from '../interfaces';
import { convertTrackToApp, validateExpiredDate } from '../utils';
import { PodcastCtx } from '../context/podcastCtx';

interface Props {
  id: string;
}

interface IState {
  lastFetchTime: number;
  count: number;
  data: ITrack[];
}

export const useEpisodes = ({ id }: Props) => {
  const { setLoading } = useContext(PodcastCtx);
  const [data, setData] = useState<IState>({
    lastFetchTime: 0,
    count: 0,
    data: [],
  });

  useEffect(() => {
    const getEpisodesById = async (id: string) => {
      setLoading(true);
      const cacheData = localStorage.getItem(id);
      let cacheFormatted: IState = {
        count: 0,
        data: [],
        lastFetchTime: 0,
      };

      if (cacheData !== null) {
        cacheFormatted = JSON.parse(cacheData) as IState;
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

    getEpisodesById(id);
  }, [id, setLoading]);

  return {
    ...data,
  };
};
