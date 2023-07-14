interface Props {
  label: string | number;
}

export const Budge = ({ label }: Props) => {
  return (
    <div className="bg-primary rounded-md flex justify-center items-center h-6 w-10 text-white">
      <span>{label}</span>
    </div>
  );
};
