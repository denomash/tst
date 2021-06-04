import { useState } from "react";
import { useHistory } from "react-router-dom";

import { Error, Form, Login } from "../../styles/common";
import { useUser } from "../../UserContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const history = useHistory();
  const [, setUser] = useUser();

  const validateEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      return setError("Enter a valid Email!");
    } else {
      setError("");
    }
    console.log("Success");
    setUser({ email });
    history.push("/dashboard");
  };

  return (
    <Login>
      <h2>Enter Credentials</h2>
      <Form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
        />
        {error && <Error>{error}</Error>}
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
        />

        <button>Login</button>
      </Form>
    </Login>
  );
};

export default LoginPage;
