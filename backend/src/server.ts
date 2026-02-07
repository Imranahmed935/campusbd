import http from "http";
import dotenv from "dotenv";
import { app } from "./app";

dotenv.config();

async function runServer() {
  try {
    let server = http.createServer(app);
    server.listen(process.env.PORT , () => {
      console.log(`CampusBd Server running on port | ${process.env.PORT }`);
    });
  } catch (error) {
    console.error("❌ Server failed to start", error);
  }
}

runServer();
