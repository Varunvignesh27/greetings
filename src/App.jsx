import React, { useState } from "react";
import "./App.css";
import First from "./component/First";

export default function App() {
  const [name, setName] = useState("");

  // Function to get greeting based on time
  const getGreeting = () => {
    const hour = new Date().getHours();

    if (hour < 12) return "Good Morning!,Be Active";
    if (hour < 17) return "Good Afternoon!,Little bit try harder";
    if (hour < 20) return "Good Evening!,Take a Nap and Restart a Day";
    return "Good Night,Time to Rest";
  };

  return (
    <div className="container">
      <First/>
      <h1 className="title">Greeting App</h1>

      <input 
        type="text"
        placeholder="Enter your name..."
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="input-box"
      />

      <h2 className="greeting">
        {name ? `${getGreeting()}, ${name}!` : "Please enter your name"}
      </h2>
    </div>
  );
}
