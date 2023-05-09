import mongoose from "mongoose";
const url = "mongodb://127.0.0.1:27017/flipKartClone";

//creating connection using mongoose.connect method
const connectDb = async () => {
  try {
    await mongoose.connect(url);
    console.log("database connected successfully");
  } catch (error) {
    console.log("Error while connectiong databse", error.message);
  }
};
export default connectDb;
