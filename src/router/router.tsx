import History from "pages/history";
import Home from "pages/home";
import { Route, Switch } from "react-router-dom";
import { paths } from "./paths";

const Router: React.FC = () => {
  return (
    <div className="container">
      <Switch>
        <Route path={paths.home} component={Home} exact />
        <Route path={paths.history} component={History} />
      </Switch>
    </div>
  );
};

export default Router;
