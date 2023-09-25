import React from "react";
import Nav from "../components/Nav";
import Section from "../components/Section";
import { Article } from "../components/Article";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";
import "../styles/Main.css";

export default function LSH() {
  return (
    <div className="wrapper page-center" style={{ flexDirection: "column" }}>
      <Header />

      <div className="container page-center" style={{ flexDirection: "row" }}>
        <Aside />
        <Section>
          <Article />
        </Section>
      </div>
      <Footer />
    </div>
  );
}
