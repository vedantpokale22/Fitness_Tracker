import React, { useState } from "react";

export default function WorkoutForm({ addWorkout }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !calories) {
      alert("Please fill all fields");
      return;
    }

    addWorkout({
      id: Date.now(),
      name,
      calories: Number(calories),
    });

    setName("");
    setCalories("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>🏋️ Workout Name</label>
        <input
          id="name"
          type="text"
          placeholder="e.g., Running"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="calories" style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>🔥 Calories Burned</label>
        <input
          id="calories"
          type="number"
          placeholder="e.g., 300"
          value={calories}
          onChange={(e) => setCalories(e.target.value)}
          min="1"
          required
        />
      </div>
      <button type="submit">✅ Add Workout</button>
    </form>
  );
}