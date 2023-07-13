import { Outlet } from 'react-router-dom';
import { Main, Navbar } from '../layout';

export const Root = () => {
  return (
    <>
      <Navbar />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};
