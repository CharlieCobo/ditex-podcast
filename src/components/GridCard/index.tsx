import { useNavigate } from 'react-router-dom';

import { IPodcast } from '../../interfaces';

const GridCard = (podcast: IPodcast) => {
  const { id, author, avatar, name } = podcast;

  const navigate = useNavigate();

  const handleClick = () =>
    navigate(`podcast/${id}`, {
      state: podcast,
    });

  return (
    <div className="cursor-pointer min-h-[180px] relative flex flex-col justify-end" onClick={handleClick}>
      <div className="bg-white border shadow px-3 pt-11 pb-4 h-24">
        <img src={avatar} alt={name} className="absolute rounded-full top-0 left-1/2 -translate-x-1/2 h-32 w-32" />
        <p className="whitespace-nowrap overflow-hidden text-ellipsis text-center font-medium">{name}</p>
        <p className="whitespace-nowrap overflow-hidden text-ellipsis text-center font-light text-sm">
          Autor: {author}
        </p>
      </div>
    </div>
  );
};

export default GridCard;
