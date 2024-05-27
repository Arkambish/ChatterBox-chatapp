import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
//!import cors from "cors"; // Import CORS middleware

import connectToMongoDB from "./db/connectToMongoDB.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 8000;
// app.get("/", (req, res) => {
//   res.send("Hello world");
// });
// Enable CORS
// app.use(cors());

app.use(express.json()); //~ to parse the incomming requests with JSON payloads (from req.body)
app.use(cookieParser());
app.use("/api/auth", authRoutes);
app.use("/api/messages", messageRoutes);
app.use("/api/users", userRoutes);
// app.use(
//   cors({
//     origin: "http://localhost:5173", // Allow only this origin
//     credentials: true, // If you need to support cookies with CORS
//   })
// );

app.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
