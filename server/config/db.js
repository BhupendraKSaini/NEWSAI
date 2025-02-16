import mongoose from "mongoose";

const dbConnect = async () => {
  try {
    mongoose.connect("mongodb://localhost:27017/news");
    console.log("MONGODB CONNECTED ");
  } catch (error) {}
};

export default dbConnect;
