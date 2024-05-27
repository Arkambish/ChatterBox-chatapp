import React, { useEffect } from "react";
import { error } from "../utils/Toastify";

const useGetConversations = () => {
  const [loading, setLoading] = React.useState(false);
  const [conversations, setConversations] = React.useState([]);
  useEffect(() => {
    const fetchConversations = async () => {
      setLoading(true);
      try {
        const response = await fetch("/api/users");
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setConversations(data);
      } catch (err) {
        error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchConversations();
  }, []);
  return { loading, conversations };
};

export default useGetConversations;
