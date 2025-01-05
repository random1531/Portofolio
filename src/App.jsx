import { Outlet } from "react-router-dom";
import "./App.css";
import Header from "./componements/Header/Header";
import Contact from "./componements/Main/Contact/Contact";
import HeroBanner from "./componements/Main/HeroBanner/HeroBanner";
import Project from "./componements/Main/Projet/Project";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
       <Outlet />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
