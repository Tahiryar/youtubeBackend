import dotenv from "dotenv";
import express from "express";
import connectDB from "./db/db.js";  // Correct import
dotenv.config({ path: './.env' }); // Ensure .env path is correct

const app = express();
const PORT = process.env.PORT || 8000; // Use environment variable for PORT

// Use the connectDB function to establish database connection
connectDB(); 

app.get("/", (req, res) => {
    res.send("App is running!");
});

app.listen(PORT, () => {
    console.log(`App is listening on port: ${PORT}`);
});

app.on("error", (error) => {
    console.log("Error: Unable to connect to the server", error);
});
