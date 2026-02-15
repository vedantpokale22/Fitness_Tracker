import React from "react";

export default function WorkoutItem({ workout }) {
  return (
    <li>
      {workout.name} - {workout.calories} cal
    </li>
  );
}
