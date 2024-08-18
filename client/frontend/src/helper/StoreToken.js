import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const StoreTokenForm = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");

    if (token) {
      console.log("Token received: ", token);
      localStorage.setItem("accessToken", token);

      // Navigate after storing the token
      navigate("/admin/dashboard");
    } else {
      console.log("No token found, navigating to /admin");
      navigate("/admin");
    }
  }, [navigate]);

  // Render a loading message while the redirect is processed
  return <div>Loading, please wait...</div>;
};

export default StoreTokenForm;
