//libs
import ClipLoader from "react-spinners/ClipLoader";

//styles
import "./style.css";

type SpinnerProps = {
  color: string;
  size: number;
};

export const Spinner = ({ color, size }: SpinnerProps) => {
  return (
    <div className="spinner">
      <ClipLoader color={color} size={size} />
    </div>
  );
};
