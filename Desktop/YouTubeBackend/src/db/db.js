import mongoose from "mongoose";

// Directly using the database name
const connectDB = async () => {
  try {
    // MongoDB connection string with hardcoded database name
    const connectInstance = await mongoose.connect('mongodb://localhost:27017/youtubeBackend');  // Example with local MongoDB
    
    // Log success message
    console.log(`\nMongoose connected! DB host: ${connectInstance.connection.host}`);
  } catch (error) {
    // Log error message
    console.log("Mongoose connection error:", error);
    process.exit(1);
  }
};

export default connectDB;
