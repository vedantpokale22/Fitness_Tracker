import React from "react";
import WorkoutForm from "../components/WorkoutForm";
import WorkoutItem from "../components/WorkoutItem";

export default function Workouts({ workouts, addWorkout, deleteWorkout }) {
  const totalCalories = workouts.reduce(
    (sum, w) => sum + w.calories,
    0
  );

  return (
    <div style={{ padding: "2rem 0" }}>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>🏋️ Your Workouts</h2>
      
      <div style={{ 
        background: "rgba(255, 255, 255, 0.1)", 
        padding: "25px", 
        borderRadius: "15px", 
        marginBottom: "30px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)"
      }}>
        <h3 style={{ marginTop: 0, color: "#ff9800" }}>📊 Summary</h3>
        <div style={{ display: "flex", justifyContent: "space-around", flexWrap: "wrap", gap: "20px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#4CAF50" }}>{workouts.length}</div>
            <div>Total Workouts</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "2rem", fontWeight: "bold", color: "#FF5722" }}>{totalCalories}</div>
            <div>Calories Burned 🔥</div>
          </div>
        </div>
      </div>

      <div style={{ 
        background: "rgba(255, 255, 255, 0.1)", 
        padding: "25px", 
        borderRadius: "15px", 
        marginBottom: "30px",
        backdropFilter: "blur(10px)"
      }}>
        <h3 style={{ marginTop: 0 }}>➕ Add New Workout</h3>
        <WorkoutForm addWorkout={addWorkout} />
      </div>

      <div style={{ 
        background: "rgba(255, 255, 255, 0.1)", 
        padding: "25px", 
        borderRadius: "15px",
        backdropFilter: "blur(10px)"
      }}>
        <h3 style={{ marginTop: 0 }}>📝 Workout History</h3>
        {workouts.length === 0 ? (
          <p style={{ textAlign: "center", fontStyle: "italic", color: "#ccc" }}>
            No workouts added yet. Start by adding one above! 💪
          </p>
        ) : (
          <ul style={{ padding: 0 }}>
            {workouts.map((w) => (
              <WorkoutItem
                key={w.id}
                workout={w}
                deleteWorkout={deleteWorkout}
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}