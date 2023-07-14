import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <header className="flex px-4 py-3 border-b border-gray-300 shadow">
      <Link to="/">
        <h1 className="text-primary font-bold">Podcaster</h1>
      </Link>
    </header>
  );
};
