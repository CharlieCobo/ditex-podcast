import { MainProps } from './interfaces';

export const Main = ({ children }: MainProps) => {
  return <main className="p-4 bg-background flex flex-1 min-h-full">{children}</main>;
};
