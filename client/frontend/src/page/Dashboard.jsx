import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    let token = params.get("token");

    if (token) {
      // If a token is found in the URL, store it in localStorage
      localStorage.setItem("accessToken", token);

      // Clear the URL parameters after storing the token
      window.history.replaceState({}, document.title, "/dashboard");
    } else {
      // If no token in URL, attempt to retrieve it from localStorage
      token = localStorage.getItem("accessToken");

      if (!token) {
        // If still no token, navigate to the /admin page
        console.log("No token found, navigating to /admin");
        navigate("/admin", { replace: true });
      }
    }
  }, [navigate]);

  return <div>Dashboard</div>;
};

export default Dashboard;
