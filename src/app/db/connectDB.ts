"use server";

import mongoose from "mongoose";

export default async function connectDB() {
  const url = "mongodb://localhost:27017/mongoDB-test";

  try {
    mongoose.connect(url);
  } catch (error) {
    console.error("Error: ", error);
    process.exit(1);
  }

  const dbConnection = mongoose.connection;
  dbConnection.once("open", (_) => {
    console.log("Database connected to: ", url);
  });

  dbConnection.on("error", (error) => {
    console.error("Error: ", error);
  });

  return;
}
