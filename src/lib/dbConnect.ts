import mongoose from "mongoose";

let isConnected = false; // Track connection status globally

export default async function dbConnect() {
  if (isConnected) {
    // Use cached connection
    console.log("✅ Using existing MongoDB connection");
    return;
  }

  const uri = process.env.MONGODB_URI;
  if (!uri) {
    throw new Error("❌ MONGODB_URI not found in environment variables");
  }

  try {
    // Connect once and cache the connection
    const db = await mongoose.connect(uri, {
      dbName: "mysterymessage", // Replace with your actual DB name
      bufferCommands: false,
    });

    isConnected = db.connections[0].readyState === 1;
    console.log("✅ MongoDB connected successfully");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    throw new Error("MongoDB connection failed");
  }
}
