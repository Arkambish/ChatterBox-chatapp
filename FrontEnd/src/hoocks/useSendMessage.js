import { useState } from "react";
import useConversations from "../zustand/useConversation";
import { error } from "../utils/Toastify";
const useSendMessage = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversations();

  const sendMessage = async (message) => {
    setLoading(true);
    try {
      const res = await fetch(
        `/api/messages/send/${selectedConversation._id}`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ message }),
        }
      );

      const data = await res.json();

      if (data.error) {
        throw new Error(data.error);
      }
      setMessages([...messages, data]);
    } catch (err) {
      error(err.message);
    } finally {
      setLoading(false);
    }
  };
  return { loading, sendMessage };
};
export default useSendMessage;
