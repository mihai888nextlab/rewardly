"use client";

import logo from "@/app/assets/logo.png";
import { ChangeEvent, useState } from "react";
import findPhoneNumber from "./api/findPhoneNumber";

export default function Home() {
  const [displayText, setDisplayText] = useState("Phone number required");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleChange = async (e: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(e.target.value);

    let tempPhoneNumber = e.target.value;
    if (tempPhoneNumber.length === 0) {
      setDisplayText("Phone number required");
      return;
    }

    if (tempPhoneNumber.length !== 10) {
      setDisplayText("Phone number must be 10 digits");
      return;
    }

    let foundNumber = await findPhoneNumber(tempPhoneNumber);

    if (foundNumber) {
      setDisplayText("Phone number found");
    } else {
      setDisplayText("Phone number not found");
    }
  };

  return (
    <div>
      <header className="bg-header fixed top-0 left-0 right-0 px-10">
        <img src={logo.src} alt="" className="h-28" />
      </header>
      <main className="min-h-screen w-screen bg-page_color flex items-center justify-center flex-col">
        <h1 className="text-4xl font-bold text-center text-gray-900">
          Welcome to Rewardly!
        </h1>
        <form action="">
          <input
            type="text"
            placeholder="0123456789"
            className="w-72 h-12 border-[1.5px] rounded-lg border-secondary px-3"
            onChange={handleChange}
            value={phoneNumber}
          />
          <p className="mt-3 text-header">{displayText}</p>
        </form>
      </main>
    </div>
  );
}
