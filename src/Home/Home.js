import React from "react";
import "../App.css";
import SortableComponent from "../Jigsaw/Jigsaw";

export default function Home() {
  return (
    <div className="Home-wrapper" id="home">
      <div className="motto">
        <h1 className="text-pop-up-up">Making great things possible</h1>
      </div>
      <SortableComponent />
    </div>
  );
}
