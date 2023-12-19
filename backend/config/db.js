import mongoose from "mongoose";

// Strict Query error
mongoose.set("strictQuery", false);

const connectDatabase = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log(`Conneted to the database successfully ✅`);
  } catch (error) {
    console.log(`Error in Mongodb\n ${error}`);
  }
};

export default connectDatabase;
