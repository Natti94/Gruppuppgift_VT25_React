import NavBar from "./components/Navbar";
import BidForm from "./components/BidForm";
import Profile from "./pages/Profile";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { AppProvider } from "./context/AppContext";

function App() {
  return (
   
    <BrowserRouter>
      <AppProvider>
      <NavBar />
      <BidForm />
        <Profile />
      </AppProvider>
    </BrowserRouter>
  );
}

export default App;
