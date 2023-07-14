import { createBrowserRouter } from 'react-router-dom';

import { Root } from './Root';
import Home from '../pages';
import PodcastDetail from '../pages/Podcast';
import Episode from '../pages/Podcast/Episode';
import NotFound from '../pages/Error';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/podcast/:podcastId',
        element: <PodcastDetail />,
        children: [
          {
            path: '*/episode/:episodeId',
            element: <Episode />,
          },
        ],
      },
      {
        path: '/podcast/:podcastId/episode/:episodeId',
        element: <Episode />,
      },
    ],
  },
]);
