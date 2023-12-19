import mongoose from "mongoose";

const schema = new mongoose.Schema({
  name: {
    type: String
  },
  slug: {
    type: String,
    lowercase: true,
  },
});

export default mongoose.model("Category", schema);
