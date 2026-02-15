import React, { useState } from "react";

export default function WorkoutForm({ addWorkout }) {
  const [name, setName] = useState("");
  const [calories, setCalories] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !calories) return;

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
      <input
        type="text"
        placeholder="Workout Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Calories Burned"
        value={calories}
        onChange={(e) => setCalories(e.target.value)}
      />

      <button type="submit">Add Workout</button>
    </form>
  );
}
