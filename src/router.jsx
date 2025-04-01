import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/Home";
import ErrorHandling from "./components/ErrorHandling";
import LoadingHandling from "./components/LoadingHandling";
import UserProfile from "./components/๊UserProfile";
import Contact from "./components/Contact";
import Product from "./components/Product";
import About from "./components/About";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "product", element:<Product />},
      { path: "error-handling", element: <ErrorHandling /> },
      { path: "user/:userId", element: <UserProfile /> },
      { path: "loading-handling", element: <LoadingHandling /> },
    ],
  },
]);

export default router; // export router หลังจากประกาศ
