import Spinner from "react-bootstrap/Spinner";

export const Loader = () => {
  return (
    <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>
  );
};

/*import Spinner from "react-bootstrap/Spinner";

function Loader() {
  return <Spinner animation="border" />;
}

export default Loader;*/
