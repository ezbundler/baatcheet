import express from "express";
import authRoutes from "./routes/auth.routes.js";
import messageRoutes from "./routes/message.route.js";
import dotenv from "dotenv";
dotenv.config();
const app = express();

app.use("/api/auth",authRoutes);
app.use("/api/messages",messageRoutes);

app.listen(5001,()=>{
    console.log("Server is runnning on port 5000");
})



