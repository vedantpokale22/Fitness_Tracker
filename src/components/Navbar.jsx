import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2>FitTrack 💪</h2>
      <div>
        <Link to="/">Home</Link>
        <Link to="/workouts">Workouts</Link>
        <Link to="/progress">Progress</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/profile">Profile</Link>
        <Link to="/about">About</Link>
      </div>
    </nav>
  );
}