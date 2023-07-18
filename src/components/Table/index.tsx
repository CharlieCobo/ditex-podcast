import { changeOrder } from '../../utils';
import { T, TableProps } from './interfaces';

const Table = ({ data, handleNavigation, title }: TableProps) => {
  if (!data || data.length === 0) {
    return <></>;
  }

  const headers = changeOrder({
    incoming: Object.keys(data[0]).filter(item => !['id', 'audio', 'description'].includes(item)),
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
                } text-justify max-w-[10rem] whitespace-nowrap overflow-hidden text-ellipsis py-2`}
              >
                <p
                  onClick={() => {
                    if (header !== 'name') return;

                    handleNavigation({
                      episodeId: track.id,
                      episode: track,
                    });
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

export default Table;
