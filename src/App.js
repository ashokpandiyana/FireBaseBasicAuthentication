import "./App.css";
import { Container } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import Reset from "./Components/Reset";
import UpdateProfile from "./Components/UpdateProfile";
import Home from "./Components/Home";
import AuthProvider from "./Contexts/AuthContext";
import PrivateRoute from "./Components/PrivateRoutes";
function App() {
  return (
    <Container
      className="d-flex align-items-center justify-content-center"
      style={{ minHeight: "100vh" }}
    >
      <div className="w-100" style={{ maxWidth: "400px" }}>
        <Router>
          <AuthProvider>
            <Switch>
              <PrivateRoute path="/" exact component={Home} />
              <PrivateRoute path="/update-profile" component={UpdateProfile} />
              <Route path="/signup" exact component={SignUp} />
              <Route path="/signin" exact component={SignIn} />
              <Route path="/reset" exact component={Reset} />
            </Switch>
          </AuthProvider>
        </Router>
      </div>
    </Container>
  );
}

export default App;
