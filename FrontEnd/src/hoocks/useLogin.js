import { useState } from "react";
import { useAuthContext } from "../context/AuthContext";
import { error } from "../utils/Toastify";
const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const login = async (username, password) => {
    try {
      const success = handleInputErrors({ username, password });
      if (!success) return;
      setLoading(true);
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.setItem("authUser", JSON.stringify(data));
      setAuthUser(data);
    } catch (err) {
      error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, login };
};

export default useLogin;
function handleInputErrors({ username, password }) {
  if (!username || !password) {
    error("Please fill all fields");
    return false;
  }

  return true;
}
