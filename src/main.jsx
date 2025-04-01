import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./router"; 
import "./index.css";
import { MessageProvider } from "./context/MessageProvider"; 
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MessageProvider> 
    <RouterProvider router={router} />  
    </MessageProvider>
  </StrictMode>
);

