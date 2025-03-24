import { WebSocketServer } from "ws";
import { prisma } from "@repo/db/client";

const server = new WebSocketServer({
  port: 3001
})

server.on("connection", async (socket) => {
  const res = await prisma.user.create({
    data: {
      email: "test@test.com",
      password: "test",
    },
  });
  console.log(res);
  
  socket.send("hi there you are connected to server");
});
