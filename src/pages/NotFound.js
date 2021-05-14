import { Link } from "react-router-dom";
const NotFound = () => {
  return (
    <div>
      <h2>Page not found</h2>
      <Link to="/"> Back to HomePage </Link>
    </div>
  );
};

export default NotFound;
