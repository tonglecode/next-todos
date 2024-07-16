"use client";

import Header from "@/components/header";
import Todo from "@/components/todo";
import api from "@/utils/api";
import { useEffect, useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await api.get("/protected");
        setUserData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Failed to fetch user data:", error);
        // 에러 처리 (401 에러는 인터셉터에서 처리됨)
      }
    };

    fetchUserData();
  }, []);

  return (
    <div>
      <Header />
      <Todo />
    </div>
  );
}
