import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import ErrorHandling from "./pages/ErrorHandling";
import LoadingHandling from "./pages/LoadingHandling";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import About from "./pages/About";
import UserProfile from "./pages/UserProfile";
import ProductDetail from "./pages/ProductDetail"; 
import PokemonSearch from "./components/PokemonSearchAxios";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contact", element: <Contact /> },
      { path: "products", element:<Products />},
      { path: "products/:productId", element: <ProductDetail /> },
      { path: "error-handling", element: <ErrorHandling /> },
      { path: "user/:userId", element: <UserProfile /> },
      { path: "loading-handling", element: <LoadingHandling /> },
      { path: "pokemon-search", element: <PokemonSearch /> },
    ],
  },
]);

export default router; // export router หลังจากประกาศ
