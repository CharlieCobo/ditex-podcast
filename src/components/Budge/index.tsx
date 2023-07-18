import { BudgeProps } from './interfaces';

const Budge = ({ label }: BudgeProps) => {
  return (
    <div className="bg-primary rounded-md flex justify-center items-center h-6 w-10 text-white">
      <span>{label}</span>
    </div>
  );
};

export default Budge;
