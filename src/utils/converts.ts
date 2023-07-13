import { IPodcast } from '../interfaces';
import { Entry } from '../interfaces/responses.interface';

export const convertPodcastToApp = (podcast: Entry): IPodcast => ({
  id: podcast.id.attributes['im:id'],
  author: podcast['im:artist'].label,
  name: podcast['im:name'].label,
  avatar: podcast['im:image'][2].label,
});
