interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const CustomBox = ({
  children,
  className = "block m-1  border-2 border-gray-300 rounded w-52 h-[550px] w-[100%]",
}: IProps) => {
  return <div className={className}>{children}</div>;
};
export default CustomBox;
