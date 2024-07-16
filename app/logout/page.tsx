"use client";
import api from "@/utils/api";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await api.post("/logout");
      localStorage.removeItem("token");
      router.push("/login");
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return <button onClick={handleLogout}>Logout</button>;
}
