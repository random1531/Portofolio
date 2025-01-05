import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./componements/Header/Header";
import { useState, useEffect } from "react";
import Footer from "./componements/Footer/Footer";

function App() {

  
  return (
    <>
      <header>
        <Header/>
      </header>
      <main>
       <Outlet />
      </main>
      <footer><Footer/></footer>
    </>
  );
}

export default App;
