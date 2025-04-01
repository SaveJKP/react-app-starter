import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout";
import Home from "./components/rendering/Home";
import ErrorHandling from "./components/rendering/ErrorHandling";
import LoadingHandling from "./components/rendering/LoadingHandling";
import UserProfile from "./components/rendering/๊UserProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // เส้นทางหลักที่ตรงกับ '/'
    children: [
      { path: "/", element: <Home /> }, // หน้า Home ที่อยู่ใน '/'
      { path: "error-handling", element: <ErrorHandling /> },
      { path: "user/:userId", element: <UserProfile /> },
      { path: "loading-handling", element: <LoadingHandling /> },
    ],
  },
]);

export default router; // export router หลังจากประกาศ
