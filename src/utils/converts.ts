import { format } from 'date-fns';
import { IPodcast, ITrack, Entry, ITrackResponse } from '../interfaces';

export const convertPodcastToApp = (podcast: Entry): IPodcast => ({
  id: podcast.id.attributes['im:id'],
  author: podcast['im:artist'].label,
  name: podcast['im:name'].label,
  avatar: podcast['im:image'][2].label,
  summary: podcast.summary.label,
});

export const convertTrackToApp = (track: ITrackResponse): ITrack => ({
  date: format(new Date(track.releaseDate), 'dd/MM/yyyy'),
  duration: converMillisToMin(Number(track.trackTimeMillis)),
  id: String(track.trackId),
  name: track.trackName.replace(/w\//g, '-'),
  audio: track.episodeUrl,
  description: track.description,
});

export const converMillisToMin = (timeMillis: number) => {
  const sec = Math.floor(timeMillis / 1000);
  const min = Math.floor(sec / 60);
  const secRemaining = sec % 60;
  const hours = Math.floor(min / 60);
  const minRemaining = min % 60;

  const formatoMinSeg = `${hours}:${minRemaining.toString().padStart(2, '0')}:${secRemaining
    .toString()
    .padStart(2, '0')}`;
  return formatoMinSeg;
};
