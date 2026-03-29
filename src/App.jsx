import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Workouts from "./pages/Workouts";
import Shop from "./pages/Shop";
import Progress from "./pages/Progress";
import Profile from "./pages/Profile";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const saved = localStorage.getItem('workouts');
    if (saved) {
      setWorkouts(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('workouts', JSON.stringify(workouts));
  }, [workouts]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const deleteWorkout = (id) => {
    setWorkouts(workouts.filter((w) => w.id !== id));
  };

  return (
    <Router>
      <div style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
        <Navbar />
        <div className="container" style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home addWorkout={addWorkout} />} />
            <Route path="/shop" element={<Shop />} />
            <Route
              path="/workouts"
              element={
                <Workouts
                  workouts={workouts}
                  addWorkout={addWorkout}
                  deleteWorkout={deleteWorkout}
                />
              }
            />
            <Route path="/progress" element={<Progress />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}