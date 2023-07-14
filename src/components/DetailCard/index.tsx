import { IPodcast } from '../../interfaces';

export const DetailCard = ({ author, avatar, name, summary }: IPodcast) => {
  return (
    <div className="px-4 py-8 bg-white rounded border shadow max-w-xs">
      <img src={avatar} alt={name} className="rounded-lg m-auto" />

      <hr className="my-4" />

      <div>
        <p className="font-bold leading-none mb-1">{name}</p>
        <p className="font-light text-sm">by {author}</p>
      </div>

      <hr className="my-4" />

      <div>
        <p className="font-bold">Description:</p>
        <p className="font-light leading-1">{summary}</p>
      </div>
    </div>
  );
};
