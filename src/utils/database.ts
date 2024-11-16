import mongoose from "mongoose";

let isConnected = false;

console.log("MONGODB_URI", process.env.MONGODB_URI);

export const connectToDb = async () => {
  mongoose.set("strictQuery", true);
  if (isConnected) {
    console.log("Mongodb is connected");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI!, {
      dbName: "share_prompt",
    });
    isConnected = true;
    console.log("Connected");
  } catch (error) {
    console.log(error);
  }
};
