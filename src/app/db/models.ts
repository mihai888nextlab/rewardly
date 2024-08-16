import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  pin: {
    type: String,
    required: true,
  },
});

const userModel =
  mongoose.models.rewardly_users ||
  mongoose.model("rewardly_users", userSchema);

export default userModel;
