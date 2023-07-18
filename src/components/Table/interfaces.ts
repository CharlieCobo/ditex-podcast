import { ITrack, PropsHandleNavigate } from '../../interfaces';

export interface TableProps {
  data: ITrack[];
  handleNavigation: (args: PropsHandleNavigate) => void;
  title?: string;
}

export type T = keyof ITrack;
