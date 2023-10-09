import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import Error from "../src/pages/Error";
import LSH from "../src/pages/LSH";
import Main from "../src/pages/SHome";
import SQuestion from "../src/pages/SQuestion";
import SQuestion2 from "./pages/SQuestion2";
import TagForm from "./pages/TagForm";

export default function App() {
  return (
    <>
      {/* <h1>랜딩 페이지</h1>
      <span>
        랜딩 페이지로 도착합니다. 가장 먼저 보여지는 이곳은 App입니다.
      </span> */}
      <Routes>
        <Route path="/" Component={Main} />
        <Route path="/*" Component={Error} />
        <Route path="/LSH" Component={LSH} />
        <Route path="/question" Component={SQuestion2} />
        <Route path="/TagForm" Component={TagForm} />
      </Routes>
    </>
  );
}
