import { Link } from 'react-router-dom';
import Loading from '../components/Loading';
import { NavbarProps } from './interfaces';

export const Navbar = ({ loading }: NavbarProps) => {
  return (
    <header className="flex justify-between items-center px-4 py-3 border-b border-gray-300 shadow">
      <Link to="/">
        <h1 className="text-primary font-bold">Podcaster</h1>
      </Link>

      <Loading isLoading={loading} />
    </header>
  );
};
