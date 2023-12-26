import React from "react";
import Weather from "../pictures/cloud_FILL0_wght400_GRAD0_opsz24.png";
import todo from "../pictures/things_to_do_FILL0_wght400_GRAD0_opsz24.png";

export default function Addfunc() {
  return (
    <div className="flex fixed right-8 top-5 space-x-3 ">
      <a target="_blank" rel="noopener noreferrer" href="https://jyotirmaygithub.github.io/Weather-app/">
        <img src={Weather} alt="" />
      </a>
      <a target="_blank" rel="noopener noreferrer" href="https://jyotirmaygithub.github.io/todo-/">
        <img src={todo} alt="" />
      </a>
    </div>
  );
}
