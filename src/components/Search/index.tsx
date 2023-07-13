import { ChangeEventHandler } from 'react';

interface Props {
  value: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
  placeholder?: string;
}

export const Search = ({ onChange, value, placeholder }: Props) => {
  return (
    <div className="border rounded py-3 px-4 bg-white shadow">
      <input className="outline-none" onChange={onChange} value={value} placeholder={placeholder} />
    </div>
  );
};
