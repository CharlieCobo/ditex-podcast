import { SearchProps } from './interfaces';

const Search = ({ onChange, value, placeholder, renderIcon }: SearchProps) => {
  return (
    <div className="flex border rounded py-3 px-4 bg-white shadow">
      <input className="outline-none" onChange={onChange} value={value} placeholder={placeholder} />
      {renderIcon?.()}
    </div>
  );
};

export default Search;
