import "./App.css";
import Header from "./componements/Header/Header";
import HeroBanner from "./componements/Main/HeroBanner/HeroBanner";
import Project from "./componements/Main/Projet/Project";

function App() {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        <HeroBanner />
        <Project />
      </main>
      <footer></footer>
    </>
  );
}

export default App;
