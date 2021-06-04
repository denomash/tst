import { Login } from "../styles/common";
import { useUser } from "../UserContext";

const Dashboard = () => {
  const [user, setUser] = useUser();

  return (
    <Login>
      <h2>Hurray!!!</h2>
      <div>Logged in as:</div>
      <p>
        <strong>{user.email}</strong>
      </p>
    </Login>
  );
};

export default Dashboard;
