import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import Home from '../pages';
import PodcastDetail from '../pages/Podcast';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/podcast/:podcastId',
        element: <PodcastDetail />,
      },
    ],
  },
]);
