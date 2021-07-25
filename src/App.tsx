import Navbar from "components/common/navbar/navbar";
import ConversionHistoryContextProvider from "contexts/ConversionHistoryContext";
import { BrowserRouter } from "react-router-dom";
import Router from "router/router";

const App = () => {
  return (
    <ConversionHistoryContextProvider>
      <BrowserRouter>
        <Navbar />
        <Router />
      </BrowserRouter>
    </ConversionHistoryContextProvider>
  );
};
export default App;
