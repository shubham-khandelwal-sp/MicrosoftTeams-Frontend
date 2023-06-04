//styles
import "./style.css";

type ErrorProp = {
  err: Error;
};
export const ErrorState = ({ err }: ErrorProp) => {
  return <div className="error-state">{err.message}</div>;
};
