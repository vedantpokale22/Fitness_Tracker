import React from "react";
import WorkoutItem from "./WorkoutItem";

export default function WorkoutList({ workouts }) {
  if (workouts.length === 0) {
    return <p>No workouts added yet.</p>;
  }

  return (
    <ul>
      {workouts.map((workout) => (
        <WorkoutItem key={workout.id} workout={workout} />
      ))}
    </ul>
  );
}
