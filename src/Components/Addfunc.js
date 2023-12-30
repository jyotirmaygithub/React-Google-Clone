import React from "react";
import Weather from "../pictures/cloud.svg"
import todo from "../pictures/todo.svg";

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
