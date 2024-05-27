import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.routes.js";
import userRoutes from "./routes/user.routes.js";
import { app, server } from "./socket/socket.js";
import connectToMongoDB from "./db/connectToMongoDB.js";

const __dirname = path.resolve();
dotenv.config();

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
app.use(express.static(path.join(__dirname, "/FrontEnd/dist")));
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/FrontEnd/dist/index.html"));
});

server.listen(PORT, () => {
  connectToMongoDB();
  console.log(`Server Running on port ${PORT}`);
});
