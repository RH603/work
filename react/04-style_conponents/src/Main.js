import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./components/App"
import HelloStyled from "./components/01/HelloStyled";
import Nesting from "./components/02/Nesting";
import Practice from "./components/03/Practice";
import Practice2 from "./components/04/Practice2";

function Main() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route path="01" element={<HelloStyled/>} />
                    <Route path="02" element={<Nesting/>} />
                    <Route path="03" element={<Practice/>} />
                    <Route path="04" element={<Practice2/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default Main