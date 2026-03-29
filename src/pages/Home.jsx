import React, { useState } from "react";
import WorkoutForm from "../components/WorkoutForm";

export default function Home({ addWorkout }) {
  const [showForm, setShowForm] = useState(false);

  const handleAddWorkout = () => {
    setShowForm(true);
  };

  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }}>
      <div style={{ 
        background: "rgba(255, 255, 255, 0.1)", 
        padding: "40px", 
        borderRadius: "20px", 
        marginBottom: "30px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
      }}>
        <h1 style={{ fontSize: "3rem", marginBottom: "1rem" }}>💪 Fitness Tracker</h1>
        <p style={{ fontSize: "1.3rem", marginBottom: "2rem", opacity: 0.9 }}>
          Track your workouts easily and stay fit! Monitor your progress and achieve your goals.
        </p>
        {!showForm && (
          <button 
            onClick={handleAddWorkout} 
            style={{ 
              padding: "15px 40px", 
              fontSize: "18px", 
              marginBottom: "2rem",
              border: "none",
              borderRadius: "50px",
              cursor: "pointer",
              fontWeight: "bold"
            }}
          >
            ➕ Add Your First Workout
          </button>
        )}
        {showForm && (
          <div style={{ 
            background: "rgba(255, 255, 255, 0.1)", 
            padding: "25px", 
            borderRadius: "15px",
            backdropFilter: "blur(10px)",
            display: "inline-block"
          }}>
            <WorkoutForm addWorkout={addWorkout} />
          </div>
        )}
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "2rem" }}>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>📊 Track Progress</h3>
          <p>Monitor your workout history and calorie burn</p>
        </div>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>🎯 Set Goals</h3>
          <p>Achieve your fitness targets with detailed tracking</p>
        </div>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>🏆 Stay Motivated</h3>
          <p>Get insights and celebrate your achievements</p>
        </div>
      </div>
    </div>
  );
}