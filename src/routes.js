import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Main from "./components/main/main";
import CoutactUs from "./components/contact-us/contactUs";

export const APP_ROUTER = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Main />,
      },
      {
        path: "/contact-us",
        element: <CoutactUs />,
      }
    ],
  },
]);