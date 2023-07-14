import { useNavigate } from 'react-router-dom';
import { ITrack } from '../../interfaces';
import { changeOrder } from '../../utils';

interface Props {
  data: ITrack[];
  handleNavigation: (episodeId: string) => void;
  title?: string;
}

type T = keyof ITrack;

export const Table = ({ data, handleNavigation, title }: Props) => {
  if (!data || data.length === 0) {
    return <p>There aren't episodes.</p>;
  }

  const headers = changeOrder({
    incoming: Object.keys(data[0]).filter(item => item !== 'id'),
    order: ['name', 'date', 'duration'],
  });

  return (
    <table className="w-full">
      {title && <caption>{title}</caption>}
      <thead className="border-b shadow-sm">
        <tr>
          {headers.map(header => (
            <th key={header} className="text-left capitalize">
              {header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map(track => (
          <tr key={`${track.id} - ${track.name} `} className="odd:bg-white even:bg-slate-100">
            {headers.map(header => (
              <td
                key={`${track.name} - ${header}`}
                className={`${
                  header === 'name' ? 'cursor-pointer text-sky-600' : ''
                } text-left max-w-[10rem] whitespace-nowrap overflow-hidden text-ellipsis`}
              >
                <p
                  onClick={() => {
                    if (header !== 'name') return;

                    handleNavigation(track.id);
                  }}
                >
                  {track[header as T]}
                </p>
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};
