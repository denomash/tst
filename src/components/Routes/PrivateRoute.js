import { useHistory } from "react-router-dom";

import { useUser } from "../../UserContext";

const PrivateRoute = ({ children }) => {
  const [user] = useUser();
  const history = useHistory();

  if (user.email) return <>{children}</>;

  history.push("/login");

  return <div />;
};

export default PrivateRoute;
