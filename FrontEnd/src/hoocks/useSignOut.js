import { useState } from "react";
import { error } from "../utils/Toastify";
import { useAuthContext } from "../context/AuthContext";
const useSignOut = () => {
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useAuthContext();
  const signOut = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/auth/logout", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }
      localStorage.removeItem("authUser");
      setAuthUser(null);
    } catch (err) {
      error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, signOut };
};

export default useSignOut;
