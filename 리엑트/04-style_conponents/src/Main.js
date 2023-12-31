import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App";
import HelloStyled from "./components/01/HelloStyled";
import Nesting from "./components/02/Nesting";
import Practice from "./components/03/Practice";
import Practice2 from "./components/04/practice2";
import DynamickStyling from "./components/05/DynamicStyling";
import Practice3 from "./components/06/Practice3";
import Inheritance from "./components/07/Inheritance";
import Reuse from "./components/08/Reuse";
import Practice4 from "./components/09/Practice4";
import Kakao from "./components/10/kakao";

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route path="01" element={<HelloStyled />} />
          <Route path="02" element={<Nesting />} />
          <Route path="03" element={<Practice />} />
          <Route path="04" element={<Practice2 />} />
          <Route path="05" element={<DynamickStyling />} />
          <Route path="06" element={<Practice3 />} />
          <Route path="07" element={<Inheritance />} />
          <Route path="08" element={<Reuse />} />
          <Route path="09" element={<Practice4 />} />
          <Route path="10" element={<Kakao />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Main;
