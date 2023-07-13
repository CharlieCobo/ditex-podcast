import axios from 'axios';

export const http = axios.create({
  baseURL: 'https://itunes.apple.com/us/rss',
});
