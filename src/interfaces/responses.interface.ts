// ==== Podcast Response Types ====
export interface IPodcastResponse {
  feed: Feed;
}

export interface Feed {
  entry: Entry[];
}

export interface Icon {
  label: string;
}

export interface Entry {
  id: ID;
  'im:artist': IMArtist;
  'im:image': IMImage[];
  'im:name': Icon;
  summary: Icon;
}

export interface ID {
  attributes: IDAttributes;
}

export interface IDAttributes {
  'im:id': string;
}

export interface IMArtist {
  label: string;
}

export interface IMArtistAttributes {
  href: string;
}

export interface IMImage {
  label: string;
}

// ==== Track Interface ====
export interface ITrackResponse {
  trackId: string;
  trackName: string;
  releaseDate: string;
  trackTimeMillis: string;
  description: string;
  episodeUrl: string;
}
