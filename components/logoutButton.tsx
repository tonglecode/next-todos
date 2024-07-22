"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import Button from "./button";

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    const token = localStorage.getItem("token");
    try {
      await axios.post(
        "http://localhost:8000/logout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      localStorage.removeItem("token");
      window.location.reload();
    } catch (error) {
      console.error("Error logging out", error);
    }
  };

  return (
    <div onClick={handleLogout}>
      <Button title="Log out" />
    </div>
  );
}
