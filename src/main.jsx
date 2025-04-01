import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router"; // ✅ นำเข้า router ที่สร้างไว้
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />  {/* ✅ ใช้ RouterProvider แทน <App /> */}
  </StrictMode>
);

