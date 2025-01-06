import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error from "./page/Error.jsx";
import Projet from "./page/Projet.jsx";
import Landing from "./page/Landing.jsx";
import Apropos from "./page/Apropos.jsx";

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
      { path: "apropos", element: <Apropos />, key: "apropos" },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
