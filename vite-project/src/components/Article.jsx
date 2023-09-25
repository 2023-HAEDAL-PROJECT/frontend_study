import React from "react";
import "../styles/Article.css";

// export default function Article(props) {
//   return (
//     <>
//       <article className="article-item">{props.item}</article>
//     </>
//   );
// }

export const Article = ({ name, food }) => {
  return (
    <>
      <article className="article-item">
        <span>
          {name} {food}가 땡긴다.
        </span>
      </article>
    </>
  );
};
