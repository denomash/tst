import { BrowserRouter, Route, Switch } from "react-router-dom";

import LoginPage from "../Login/LoginPage";
import Dashboard from "../Dashboard";
import PrivateRoute from "./PrivateRoute";

import { Container } from "../../styles/common";
import { UserProvider } from "../../UserContext";

const Routes = () => (
  <BrowserRouter>
    <Container>
      <UserProvider>
        <Switch>
          <Route exact path="/login" component={LoginPage} />
          <PrivateRoute>
            <Route exact path="/dashboard" component={Dashboard} />
          </PrivateRoute>
          // Not found page. This should alwaws be the last in routes
          <Route component={LoginPage} />
        </Switch>
      </UserProvider>
    </Container>
  </BrowserRouter>
);

export default Routes;
