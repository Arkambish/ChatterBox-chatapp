import { useEffect, useState } from "react";
import useConversations from "../zustand/useConversation";
import { error } from "../utils/Toastify";

const useGetMessages = () => {
  const [loading, setLoading] = useState(false);
  const { messages, setMessages, selectedConversation } = useConversations();
  useEffect(() => {
    const getMessages = async () => {
      setLoading(true);
      try {
        const res = await fetch(`/api/messages/${selectedConversation._id}`);
        const data = await res.json();
        console.log(data);
        if (data.error) throw new Error(data.error);
        setMessages(data);
        console.log("messages front", messages);
      } catch (err) {
        error(err.message);
      } finally {
        setLoading(false);
      }
    };
    if (selectedConversation?._id) getMessages();
  }, [selectedConversation._id, setMessages]);

  return { loading, messages };
};

export default useGetMessages;
