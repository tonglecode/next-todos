"use client";

import Header from "@/components/header";
import Todo from "@/components/todo";
import api from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const [userData, setUserData] = useState(null);
  const router = useRouter();
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:8000/protected", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserData(response.data);
        console.log(response.data);
        if (!response.data.id) {
          router.push("/login");
        }
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
      {/* <Todo /> */}
    </div>
  );
}
