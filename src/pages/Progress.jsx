import React from "react";

export default function Progress() {
  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }}>
      <h1>📈 Your Progress</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Track your fitness journey and see your improvements over time.
      </p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "20px", marginTop: "2rem" }}>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>📊 Weekly Stats</h3>
          <p>View your workout frequency and calorie burn trends</p>
          <div style={{ fontSize: "2rem", margin: "20px 0" }}>📈</div>
          <p style={{ color: "#ccc" }}>Coming soon...</p>
        </div>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>🎯 Goals</h3>
          <p>Set and track your fitness goals</p>
          <div style={{ fontSize: "2rem", margin: "20px 0" }}>🎯</div>
          <p style={{ color: "#ccc" }}>Coming soon...</p>
        </div>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>🏆 Achievements</h3>
          <p>Unlock badges and celebrate milestones</p>
          <div style={{ fontSize: "2rem", margin: "20px 0" }}>🏆</div>
          <p style={{ color: "#ccc" }}>Coming soon...</p>
        </div>
      </div>
    </div>
  );
}