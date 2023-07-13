import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export const Main = ({ children }: Props) => {
  return <main className="p-4 bg-background flex flex-1 flex-col min-h-full">{children}</main>;
};
