import React from "react";
import MessageWindow from "../../components/MessagesWindow/MessageWindow";
import SideBar from "../../components/SideBar/SideBar";

const Home = () => {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] p-6 rounded-lg shadow-md overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
      <SideBar />
      <MessageWindow />
    </div>
  );
};

export default Home;
