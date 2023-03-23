import { createBrowserRouter } from "react-router-dom";
import App from './App';
import Main from "./components/main/main";
import CoutactUs from "./components/contact-us/contactUs";
import CategoryPage from "./components/category-page/categoryPage";
import TermsOfUse from "./components/terms-of-use/termsOfUse";
import Login from "./components/login/login";

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
      },
      {
        path: "/category/:id",
        element: <CategoryPage/>,
      },
      {
        path: "/terms-of-use",
        element: <TermsOfUse/>
      },
    ],
  },
  {
    path: "/login",
    element: <Login/>
  }
]);