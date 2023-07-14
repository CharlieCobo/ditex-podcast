import { useNavigate } from 'react-router-dom';
import { IPodcast } from '../../interfaces';

interface Props extends IPodcast {
  clickeable?: boolean;
}
export const DetailCard = ({ author, avatar, name, summary, clickeable }: Props) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (!clickeable) return;
    navigate(-1);
  };
  return (
    <div className="px-4 py-8 bg-white rounded border shadow max-w-xs">
      <img
        src={avatar}
        alt={name}
        className={`${clickeable ? 'cursor-pointer' : 'cursor-default'} rounded-lg m-auto`}
        onClick={handleBack}
      />

      <hr className="my-4" />

      <div>
        <p className="font-bold leading-none mb-1">{name}</p>
        <p className="font-light text-sm">
          by{' '}
          <span
            className={`${clickeable ? 'cursor-pointer text-sky-600 font-semibold' : 'cursor-default text-black'}`}
            onClick={handleBack}
          >
            {author}
          </span>
        </p>
      </div>

      <hr className="my-4" />

      <div>
        <p className="font-bold">Description:</p>
        <p className="font-light leading-1 overflow-hidden whitespace-wrap text-ellipsis">{summary}</p>
      </div>
    </div>
  );
};
