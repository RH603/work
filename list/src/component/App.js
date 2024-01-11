import { Outlet } from "react-router-dom";
import Header from "./Header";
import Posting from "./Posting";
import Footer from "./Footer";
import Home from "./Home";

function App() {
  return (
    <>
      <Header />
      <Home/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
