import React from "react";

export default function About() {
  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }}>
      <div style={{ 
        background: "rgba(255, 255, 255, 0.1)", 
        padding: "40px", 
        borderRadius: "20px", 
        marginBottom: "30px",
        backdropFilter: "blur(10px)",
        boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        maxWidth: "600px",
        margin: "0 auto 30px"
      }}>
        <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>📱 About FitTrack</h1>
        <p style={{ fontSize: "1.2rem", marginBottom: "2rem", opacity: 0.9 }}>
          Your personal fitness companion for tracking workouts and achieving your health goals.
        </p>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>🎯 Mission</h3>
          <p>Help you stay motivated and track your fitness journey with ease</p>
        </div>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>⚡ Features</h3>
          <p>Workout tracking, progress monitoring, and personalized insights</p>
        </div>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>🚀 Technology</h3>
          <p>Built with React, modern CSS, and local data persistence</p>
        </div>
      </div>
    </div>
  );
}