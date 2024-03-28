import { useLocation } from "react-router-dom";

const Results = () => {
  const location = useLocation();
  const data = location.state;
  return <div>{data}</div>;
};

export default Results;
