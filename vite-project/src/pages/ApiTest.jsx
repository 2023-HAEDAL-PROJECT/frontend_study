import React from "react";
import { BASE_URL } from "../Constants/url";
import axois from "axios";

export default function ApiTest() {
  const urlAnswerIdL = 1;
  axois.get(`${BASE_URL}/question/1`).then((res) => console.log(res));

  fetch(`${BASE_URL}/answer/1/${urlAnswerIdL}`, {
    method: "POST",
    headers: {
      "Content-Type": "appWlication/json",
    },
    body: JSON.stringify({}), // 요청 본문 데이터를 JSON 문자열로 변환
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json(); // JSON 형식의 응답을 파싱
    })
    .then((data) => {
      console.log(data);
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });

  return <>Click</>;
}
