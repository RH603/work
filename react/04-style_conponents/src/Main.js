import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HelloStyled from "./components/01/HelloStyled";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="helloStyled" element={<HelloStyled />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
