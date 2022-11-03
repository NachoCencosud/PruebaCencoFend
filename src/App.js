import React from "react";
import "./App.css";
import MainArea from "./components/MainArea/MainArea";
import SideBar from "./components/SideBar/SideBar";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="div-app-container">
        <SideBar />
        <MainArea />
      </div>
    </BrowserRouter>
  );
}

export default App;
