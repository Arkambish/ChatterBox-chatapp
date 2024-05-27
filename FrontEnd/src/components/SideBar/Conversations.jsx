import React from "react";
import Conversation from "./Conversation";
import useGetConversations from "../../hoocks/useGetConversations";

const Conversations = () => {
  const { loading, conversations } = useGetConversations();
  return (
    <div className="py-2 flex flex-col overflow-auto">
      {conversations.map((conversation, index) => (
        <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIndx={index === conversation.length - 1}
        />
      ))}
      {loading ? (
        <span className="loading loading-spinner max-auto"></span>
      ) : null}
    </div>
  );
};

export default Conversations;
