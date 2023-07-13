interface Props {
  placeholder?: string;
}

export const Search = ({ placeholder }: Props) => {
  return (
    <div className="border rounded py-3 px-4 bg-white shadow">
      <input className="outline-none" placeholder={placeholder} />
    </div>
  );
};
