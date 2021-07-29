import React from "react";
import bg from "../../Assets/Frame.svg";
import "./home.css";
import { Link } from "react-router-dom";

export default function HomePage() {
  return(
  <div style={{ backgroundImage: `url(${bg})` }} className="Homepage">
    <h1>Hello everyone</h1>
    <Link to="/main/">
      <button>control</button>
    </Link>
  </div>
  );
}
