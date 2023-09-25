import React from "react";
import Nav from "../components/Nav";
import Section from "../components/Section";
import Article from "../components/Article";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Aside from "../components/Aside";

export default function LSH() {
  return (
    <>
      <Header />
      <Nav />
      <Aside />
      <Section>
        <Article />
      </Section>
      <Footer />
    </>
  );
}
