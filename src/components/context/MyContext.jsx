import React, { createContext, useState } from "react";

// สร้าง context สำหรับแชร์ข้อมูล
const MyContext = createContext();

export function MyProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (userData) => {
    setUser(userData);
  };

  return (
    // ใช้ MyContext.Provider เพื่อห่อหุ้มคอมโพเนนต์ที่ต้องการแชร์ข้อมูล
    <MyContext.Provider value={{ user, login }}>
      {children}
    </MyContext.Provider>
  );
}

