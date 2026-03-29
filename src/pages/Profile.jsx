import React from "react";

export default function Profile() {
  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }}>
      <h1>👤 Your Profile</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>
        Manage your account settings and personal information.
      </p>
      <div style={{ 
        background: "rgba(255, 255, 255, 0.1)", 
        padding: "40px", 
        borderRadius: "20px", 
        marginBottom: "30px",
        backdropFilter: "blur(10px)",
        maxWidth: "600px",
        margin: "0 auto 30px auto"
      }}>
        <div style={{ fontSize: "4rem", marginBottom: "20px" }}>👤</div>
        <h2>John Doe</h2>
        <p style={{ color: "#ccc" }}>Fitness Enthusiast</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: "15px", marginTop: "30px" }}>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>25</div>
            <div>Total Workouts</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>1,250</div>
            <div>Total Calories</div>
          </div>
          <div style={{ textAlign: "center" }}>
            <div style={{ fontSize: "1.5rem", fontWeight: "bold" }}>3</div>
            <div>Months Active</div>
          </div>
        </div>
      </div>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px" }}>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>⚙️ Settings</h3>
          <p>Customize your app preferences</p>
          <p style={{ color: "#ccc", marginTop: "15px" }}>Coming soon...</p>
        </div>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>📱 Connect Apps</h3>
          <p>Sync with fitness trackers and apps</p>
          <p style={{ color: "#ccc", marginTop: "15px" }}>Coming soon...</p>
        </div>
        <div style={{ 
          background: "rgba(255, 255, 255, 0.1)", 
          padding: "25px", 
          borderRadius: "15px",
          backdropFilter: "blur(10px)",
          textAlign: "center"
        }}>
          <h3>🔔 Notifications</h3>
          <p>Manage workout reminders</p>
          <p style={{ color: "#ccc", marginTop: "15px" }}>Coming soon...</p>
        </div>
      </div>
    </div>
  );
}