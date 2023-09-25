import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSeedling } from "@fortawesome/free-solid-svg-icons";

export default function Nav() {
  const navigate = useNavigate();

  return (
    <>
      <div className="Nav-contanier">
        <FontAwesomeIcon icon={faSeedling} />
        DingX2 의 일상
        <li style={{ flexGrow: "1" }} />
        <li style={{ flexGrow: "1" }} />
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/LSH">LSH</Link>
        </li>
        <li>
          <Link to="/KKH">KKH</Link>
        </li>
        <li>
          <Link to="/KKH">LSM</Link>
        </li>
        <li>
          <Link to="/KKH">SNH</Link>
        </li>
        <li>
          <Link to="/KKH">KWS</Link>
        </li>
      </div>
    </>
  );
}
