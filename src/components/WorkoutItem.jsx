import React from "react";

export default function WorkoutItem({ workout, deleteWorkout }) {
  return (
    <li className="card">
      <span>
        {workout.name} - {workout.calories} cal
      </span>
      <button onClick={() => deleteWorkout(workout.id)}>❌</button>
    </li>
  );
}