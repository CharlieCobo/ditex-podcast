import { Link } from 'react-router-dom';
import { IPodcast } from '../../interfaces';

export const GridCard = ({ id, author, avatar, name }: IPodcast) => {
  return (
    <div className="cursor-pointer min-h-[180px] relative flex flex-col justify-end">
      <Link to={`podcast/${id}`}>
        <div className="bg-white border shadow px-3 pt-11 pb-4 h-24">
          <img src={avatar} alt={name} className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 h-32 w-32" />
          <p className="whitespace-nowrap overflow-hidden text-ellipsis text-center font-medium">{name}</p>
          <p className="whitespace-nowrap overflow-hidden text-ellipsis text-center font-light text-sm">
            Autor: {author}
          </p>
        </div>
      </Link>
    </div>
  );
};
