import { IS_SERVER } from "@/config/constants";
import { seedDb } from "./seedDb";
import { server } from "./server";

export const initializemsw = () => {
  console.log("initializemsw");
  if (IS_SERVER) {
    server.listen();
    seedDb();
  }
};
