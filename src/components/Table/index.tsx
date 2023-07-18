import { useState } from 'react';
import { changeOrder } from '../../utils';
import { SortingTypes, T, TableProps } from './interfaces';
import { ArrowDownIcon, ArrowUpIcon } from '../Icons';

const Table = ({ data, handleNavigation, title }: TableProps) => {
  const [orderBy, setOrderBy] = useState<SortingTypes>('name');
  const [orderAsc, setOrderAsc] = useState<boolean>(true);

  if (!data || data.length === 0) {
    return <></>;
  }

  const headers = changeOrder({
    incoming: Object.keys(data[0]).filter(item => !['id', 'audio', 'description'].includes(item)),
    order: ['name', 'date', 'duration'],
  });

  const handleSort = (field: SortingTypes) => {
    if (orderBy === field) {
      // Si el campo de orden actual es el mismo, cambiar la dirección del orden
      setOrderAsc(prevOrderAsc => !prevOrderAsc);
    } else {
      // Si el campo de orden es diferente, cambiar el campo y establecer orden ascendente por defecto
      setOrderBy(field);
      setOrderAsc(true);
    }
  };

  const getArrow = (field: SortingTypes) => {
    if (orderBy === field) {
      return orderAsc ? <ArrowUpIcon className="inline" size={18} /> : <ArrowDownIcon className="inline" size={18} />;
    }
    return '';
  };

  const sortedData = [...data].sort((a, b) => {
    const comparison = a[orderBy].localeCompare(b[orderBy]);
    return orderAsc ? comparison : -comparison;
  });

  return (
    <table className="w-full">
      {title && <caption>{title}</caption>}
      <thead className="border-b shadow-sm">
        <tr>
          {headers.map(header => (
            <th
              key={header}
              className="text-left capitalize cursor-pointer"
              onClick={() => handleSort(header as SortingTypes)}
            >
              {header} {getArrow(header as SortingTypes)}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {sortedData.map(track => (
          <tr key={`${track.id} - ${track.name} `} className="odd:bg-white even:bg-slate-100">
            {headers.map(header => (
              <td
                key={`${track.name} - ${header}`}
                className={`${header === 'name' ? 'cursor-pointer text-sky-600' : ''} text-justify max-w-[10rem] py-2`}
              >
                <p
                  className="whitespace-nowrap overflow-hidden text-ellipsis"
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
