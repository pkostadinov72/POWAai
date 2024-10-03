import { PuffLoader } from "react-spinners";
import PropTypes from "prop-types";

const Loader = ({ size }) => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <PuffLoader color="#1CCEE0" size={size || 35} />
    </div>
  );
};

Loader.propTypes = {
  size: PropTypes.number
};

export default Loader;
