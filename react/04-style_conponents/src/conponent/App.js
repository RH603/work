import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <h1>Hello, Styled Components!!</h1>
      <ul>
        <Link to="helloStyled">
          <li>1. Styled Components Basic</li>
        </Link>
      </ul>
      <Outlet />
    </>
  );
}

export default App;
