import React from "react";
import "../styles/Section.css";
import { Article } from "./Article";

export default function Section() {
  const pizza = "피자";
  const bossam = "bossam";
  return (
    <section className="Section-wrapper">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
        odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi.
      </p>
      <Article name="나는" food="치킨 또는 양념치킨" />
      <Article name="너는" food={pizza} />
      <Article name="우리는" food={bossam} />
    </section>
  );
}
