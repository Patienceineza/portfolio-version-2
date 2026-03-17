import { createBrowserRouter } from "react-router";
import Portfolio from "./pages/Portfolio";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Portfolio,
  },
]);
