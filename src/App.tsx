import Navbar from "components/common/navbar/navbar";
import { BrowserRouter } from "react-router-dom";
import Router from "router/router";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Router />
    </BrowserRouter>
  );
};
export default App;
