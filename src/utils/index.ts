export * from './converts';
export * from './http';

interface IIsExpired {
  lastFetchTime: number;
  currentTime: number;
}

// One Day in miliseconds = 24 * 60 * 60 * 1000
export const validateExpiredDate = ({ currentTime, lastFetchTime }: IIsExpired) =>
  lastFetchTime === 0 || currentTime - lastFetchTime > 24 * 60 * 60 * 1000;

interface IChangeOrder {
  incoming: string[];
  order: string[];
}

export const changeOrder = ({ incoming, order }: IChangeOrder): string[] => {
  const sortedIncoming = [...incoming].sort((current, next) => order.indexOf(current) - order.indexOf(next));
  return sortedIncoming;
};
