import { PuffLoader } from "react-spinners";

const Loader = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%"
      }}
    >
      <PuffLoader color="#1CCEE0" />
    </div>
  );
};

export default Loader;
