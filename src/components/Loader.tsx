import { FidgetSpinner } from "react-loader-spinner";
import spinner from "../assets/fidget-spinner.png";
interface LoaderProps {
  loading: boolean;
}
export function Loader(props: LoaderProps) {
  return (
    <div className="floating-loader">
      {!props.loading && (
        <img src={spinner} height={63} className="floating-loader" />
      )}
      <FidgetSpinner visible={props.loading} />
    </div>
  );
}
