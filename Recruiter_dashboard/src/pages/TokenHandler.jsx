import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const TokenHandler = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const token = searchParams.get("token");
    const role = searchParams.get("role");

    if (token && role) {
      localStorage.setItem("authToken", token);
      localStorage.setItem("userRole", role);

      // ✅ Always go to dashboard
      navigate("/dashboard", { replace: true });
    } else {
      // If no token, you might redirect to an error or dashboard
      navigate("/dashboard", { replace: true });
    }
  }, [navigate, searchParams]);

  return null;
};

export default TokenHandler;
