import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./page/Error.jsx";
import Projet from "./page/Projet.jsx";
import Landing from "./page/Landing.jsx";
import Apropos from "./page/Apropos.jsx";
import Experience from "./componements/Main/About/Experience/Experience.jsx";
import Formation from "./componements/Main/About/Formation/Formation.jsx";
import Skill from "./componements/Main/About/Skill/Skill.jsx";
import Description from "./componements/Main/About/Description/Description.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Landing />,
      },
      {
        path: "projet/:id",
        element: <Projet />,
        errorElement: <Error />,
        key: "projet",
      },
      {
        path: "apropos",
        element: <Apropos />,
        key: "apropos",
        children: [
          { path: "experience", element: <Experience />, key: "experience" },
          { path: "formation", element: <Formation />, key: "formation" },
          { path: "skill", element: <Skill />, key: "skill" },
          { path: "description", element: <Description />, key: "description" },
        ],
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
