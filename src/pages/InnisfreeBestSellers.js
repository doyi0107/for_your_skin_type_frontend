// 공통 컴포넌트 임포트 
import Header from "../components/Header";
import Footer from "../components/Footer";

import { Link } from "react-router-dom";

import "../styles/src/InnisfreeBestSellers.scss";

function InnisfreeBestSellers() {
  return (
    <>
      <Header />
      <div className="test">이니스프리 베스트셀러 들어올 페이지!!</div>
      <Footer />
    </>
  ) 
}


export default InnisfreeBestSellers;