interface IProps {
  children?: React.ReactNode;
  className?: string;
}

const CustomHeader = ({
  children,
  className = "block  border-gray-300 p-2 rounded w-52 flex justify-center items-center bg-gray-200 w-[100%] min-w-[250px]",
}: IProps) => {
  return <h1 className={className}>{children}</h1>;
};

export default CustomHeader;
