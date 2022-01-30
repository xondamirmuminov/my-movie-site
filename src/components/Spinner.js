import RingLoader from "react-spinners/RingLoader";
import StyledSpinner from "../styles/spinner";

export default function Spinner({ loading }) {
  if (!loading) {
    return null;
  } else {
    return (
      <StyledSpinner>
        <RingLoader color={"var(--red)"} size={180} />
      </StyledSpinner>
    );
  }
}
