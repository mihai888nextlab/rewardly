"use server";

import connectDB from "../db/connectDB";
import userModel from "../db/models";

connectDB();

export default async function findPhoneNumber(phoneNumber: string) {
  let user = await userModel.findOne({ phone_number: phoneNumber });
  console.log(userModel);
  return user;
}
