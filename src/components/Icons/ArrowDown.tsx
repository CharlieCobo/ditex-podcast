import { IconProps } from './interfaces';

const ArrowDownIcon = ({ color = '#007EF3', size = 24, className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className={`icon icon-tabler icon-tabler-arrow-narrow-down ${className ?? ''}`}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      strokeWidth="1.5"
      stroke={color}
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M12 5l0 14" />
      <path d="M16 15l-4 4" />
      <path d="M8 15l4 4" />
    </svg>
  );
};

export default ArrowDownIcon;
