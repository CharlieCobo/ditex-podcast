import { ChangeEventHandler, ReactNode } from 'react';

export interface SearchProps {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
  renderIcon?: () => ReactNode;
}
