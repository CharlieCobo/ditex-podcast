import { ITrack } from '../interfaces';

export interface UseEpisodeProps {
  id: string;
}

export interface UseEpisodeState {
  lastFetchTime: number;
  count: number;
  data: ITrack[];
}
