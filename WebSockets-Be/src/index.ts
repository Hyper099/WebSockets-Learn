import { WebSocketServer } from "ws";

const PORT = 8080;
const wss = new WebSocketServer({ port: PORT }, () => {
   console.log("WebSocket serrver running on : ", PORT);
});

wss.on("connection", (socket) => {
   console.log("User Connected.");

   socket.on("message", (e) => {
      if (e.toString() === "ping") {
         socket.send("pong");
      }
   })
});