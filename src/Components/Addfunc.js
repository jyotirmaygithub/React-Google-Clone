import React from "react";
import Weather from "../pictures/cloud_FILL0_wght400_GRAD0_opsz24.png";
import todo from "../pictures/things_to_do_FILL0_wght400_GRAD0_opsz24.png";


export default function Addfunc() {
  return (
    <div className="universal addfunc">
        <a target="_blank"  href="https://jyotirmaygithub.github.io/Weather-app/">
        <img src={Weather} alt="" />
        </a>
      <a target="_blank"  href="https://jyotirmaygithub.github.io/todo-/">
      <img src={todo} alt="" />
      </a>
    </div>
  );
}
