import React from "react";
import "./App.css";
import SortableComponent from "./Jigsaw";

export default function Home() {
  return (
    <div className="Home-wrapper" id="home">
      <div className="motto">
        <h1>Making great things possible</h1>
      </div>
      <SortableComponent />
    </div>
  );
}
