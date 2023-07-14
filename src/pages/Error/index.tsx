import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="flex justify-center items-center min-h-screen flex-col">
      <h1 className="text-4xl mb-5">Sorry this page not exist. :(</h1>
      <Link to="/" className="text-sky-600">
        Go to Home
      </Link>
    </div>
  );
};

export default NotFound;
