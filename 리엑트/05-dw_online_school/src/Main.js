import App from "./components/App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CoursListPage from "./pages/CouresListPage";
import QustionListPage from "./pages/QustionListPage";
import CoursePage from './pages/CoursePage';

function Main() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App/>}>
          <Route index element={<HomePage/>}/>
          <Route path="courses">
            <Route index element={<CoursListPage/>} />
            <Route path = ":courseSlug" element={<CoursePage/>} />
          </Route>
          <Route path="questions">
            <Route index element={<QustionListPage/>} />
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}


export default Main