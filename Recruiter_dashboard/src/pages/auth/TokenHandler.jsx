// src/pages/auth/TokenHandler.jsx
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TokenHandler = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const token = searchParams.get("token");
    const role = searchParams.get("role");

    if (token && role) {
      // ✅ Save token and role
      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", role);

      // ✅ Redirect based on role
      if (role === "Recruiter") {
        navigate("/dashboard", { replace: true });
      } else if (role === "Admin") {
        navigate("/admin-dashboard", { replace: true });
      } else {
        navigate("/", { replace: true });
      }
    } else {
      // If no token/role, go to login
      navigate("/login", { replace: true });
    }
  }, [navigate, searchParams]);

  return null; // Nothing to render
};

export default TokenHandler;
