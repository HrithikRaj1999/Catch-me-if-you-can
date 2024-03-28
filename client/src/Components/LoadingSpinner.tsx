import Spinner from "./Spinner";

const LoadingSpinner = () => {
  return (
    <div
      className="bg-white"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1000,
      }}
    >
      <Spinner />
    </div>
  );
};

export default LoadingSpinner;
