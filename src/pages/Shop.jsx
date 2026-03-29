import React from 'react'

export default function Shop() {
  return (
    <div style={{ textAlign: "center", padding: "2rem 0" }}>
      <h1>🛒 Fitness Shop</h1>
      <p style={{ fontSize: "1.2rem", marginBottom: "2rem" }}>Coming soon! Premium fitness gear and supplements.</p>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: "20px", marginTop: "2rem" }}>
        <div style={{ background: "rgba(255, 255, 255, 0.1)", padding: "20px", borderRadius: "10px" }}>
          <h3>🏃 Running Shoes</h3>
          <p>High-performance shoes for your runs.</p>
        </div>
        <div style={{ background: "rgba(255, 255, 255, 0.1)", padding: "20px", borderRadius: "10px" }}>
          <h3>💪 Protein Powder</h3>
          <p>Fuel your muscles with premium protein.</p>
        </div>
        <div style={{ background: "rgba(255, 255, 255, 0.1)", padding: "20px", borderRadius: "10px" }}>
          <h3>🧘 Yoga Mat</h3>
          <p>Comfortable mat for your yoga sessions.</p>
        </div>
      </div>
    </div>
  );
}