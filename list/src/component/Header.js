import { Link } from "react-router-dom";

function Header() {
  return (
    <>
    <header>
      <Link to="/">홈</Link>
      &nbsp;&nbsp; | &nbsp;&nbsp;
      <Link to="/Post">게시판</Link>
      <hr/>
    </header>
    </>
  );
}

export default Header;
