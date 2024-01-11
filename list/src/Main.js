import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./component/App";
import Footer from "./component/Footer";
import Header from "./component/Header";
import Posting from "./component/Posting";

function Main() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App/>} />
          <Route path="/Post" element={<Posting/>}/>
      
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Main;
