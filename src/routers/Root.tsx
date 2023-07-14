import { Outlet } from 'react-router-dom';
import { Main, Navbar } from '../layout';
import { PodcastCtx } from '../context/podcastCtx';
import { useState } from 'react';

export const Root = () => {
  const [loading, setLoading] = useState<boolean>(false);

  return (
    <PodcastCtx.Provider value={{ loading, setLoading }}>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </PodcastCtx.Provider>
  );
};
