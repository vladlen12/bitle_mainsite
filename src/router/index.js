import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import About from "../pages/About";
import Blockchain from "../pages/Blockchain";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Projects from "../pages/Projects";
import Roadmap from "../pages/Roadmap";

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about-us" component={About} />
        <Route exact path="/blockchain" component={Blockchain} />
        <Route exact path="/projects" component={Projects} />
        <Route exact path="/roadmap" component={Roadmap} />
        <Route exact path="/contact-us" component={Contact} />
        <Route path="/404" component={NotFoundPage} />
        <Redirect from="*" to="/404" />
      </Switch>
    </Router>
  );
};

export default AppRouter;
