import { useEffect, useRef } from "react";
import useGetMessages from "../../hoocks/useGetMessages";
import MessageSkeleton from "../skelotons/MessageSkeloton";
import Message from "./Message";

const Messages = () => {
  const { loading, messages } = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);
  }, [messages]);
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading &&
        messages.length > 0 &&
        messages.map((message) => (
          <div ref={lastMessageRef} key={message._id}>
            <Message key={message._id} message={message} />
          </div>
        ))}
      {loading && [...Array(3)].map((_, idx) => <MessageSkeleton key={idx} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center text-gray-800 font-bold mt-4">
          Send a message to start the conversation
        </p>
      )}
    </div>
  );
};

export default Messages;
