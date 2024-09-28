import React from "react";

const AdminLogin = () => {
  const handleClick = async () => {
    try {
      window.location.href =
        "https://may-garden.onrender.com/api/v1/auth/google";
    } catch (error) {
      console.error("Error: ", error);
    }
  };
  return (
    <main className="min-h-screen w-full px-8 py-7 bg-[#212121] text-white flex flex-col items-start justify-between gap-14">
      <div className="w-full">
        <p className=" text-[32px] font-Playfair text-center font-bold">
          Mayflower
        </p>
      </div>
      <div className=" w-full flex justify-between gap-8 max-h-screen items-center">
        <div className="w-[60%] flex flex-col items-start justify-start">
          <img
            loading="lazy"
            src="https://ik.imagekit.io/tsfcuw1ce/Images/admin.png?updatedAt=1725131441143"
            alt="admin"
            className="object-contain w-full h-full"
          />
        </div>
        <div className="w-[40%]">
          <h2 className="text-[32px] font-bold font-Montserrat text-center text-white mb-8">
            Admin Login
          </h2>
          <div className="flex items-center justify-center my-4">
            <span className="border-t border-[#AEAEAE] w-full"></span>
            <span className="border-t border-[#AEAEAE] w-full"></span>
          </div>
          <button
            className="w-full bg-transparent text-goldLight text-lg font-Montserrat font-semibold py-2 px-4 rounded border border-goldLight hover:bg-gradient-to-r from-goldLight to-goldDark hover:text-white hover:border-black"
            onClick={handleClick}
          >
            Login with Google
          </button>
        </div>
      </div>
    </main>
  );
};

export default AdminLogin;
