import { Route, Routes } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import PostList from "./PostList";

function Posting() {
  return (
    <>
      <Header />
      <PostList/>
      <Footer />
    </>
  );
}

export default Posting;
