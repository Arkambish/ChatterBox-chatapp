import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMessage = async (req, res) => {
  try {
    console.log("Testing...");
    console.log("Testing...");
    console.log("Testing...");
    const { message } = req.body;
    const { id: receiverId } = req.params;
    console.log(receiverId);
    const senderId = req.user._id;
    console.log(senderId);
    let conversation = await Conversation.findOne({
      participants: { $all: [receiverId, senderId] },
    });
    if (!conversation) {
      conversation = await Conversation.create({
        participants: [senderId, receiverId],
      });
    }
    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });
    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }
    // await conversation.save();
    // await newMessage.save();
    //~~ this will save all parallel
    await Promise.all([conversation.save(), newMessage.save()]);
    res.status(201).json(newMessage);
  } catch (error) {
    console.log("Sending....Pending");
    console.log("Error in sending messages", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
export const getMessage = async (req, res) => {
  console.log("hiiilo");
  try {
    const { id: userToChatId } = req.params;
    const senderId = req.user._id;
    console.log(userToChatId, senderId);

    const conversation = await Conversation.findOne({
      participants: { $all: [senderId, userToChatId] },
    }).populate("messages");
    console.log("convo", conversation);
    if (!conversation) {
      return res.status(200).json([]);
    }
    const messages = conversation.messages;
    console.log("messages", messages);
    res.status(200).json(messages);
  } catch (error) {
    console.log("Error in get messages", error.message);
    res.status(500).json({ error: "Internal server error" });
  }
};
