import AuctionList from "./components/list/AuctionList"
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <AppProvider>
        <AuctionList />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
