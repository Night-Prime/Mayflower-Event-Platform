import React from "react";
import { adminMakeRequest } from "../helper/makeRequest";

const AdminPage = () => {
  const handleClick = async () => {
    try {
      window.location.href = "http://localhost:5000/api/v1/auth/google";
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  return (
    <section className="bg-[#212121] h-screen w-screen text-white">
      <main className="h-full w-full flex flex-col items-center justify-center p-4 gap-6">
        <h1 className="text-4xl">Mayflower Admin Page</h1>
        <button
          className="rounded-lg bg-white p-2 cursor-pointer"
          onClick={handleClick}
        >
          <span className="text-red-700">Login with Google</span>
        </button>
      </main>
    </section>
  );
};

export default AdminPage;
