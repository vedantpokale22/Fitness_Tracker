import React, { useState } from "react";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
 import styles from "./styles/FitnessTracker.module.css"


export default function App() {
  const [workouts, setWorkouts] = useState([]);
  const calorieGoal = 1000;

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  const totalCalories = workouts.reduce(
    (sum, workout) => sum + workout.calories,
    0
  );

  return (
    <div className={styles.container}>
      <h1>🏋️ Fitness Tracker</h1>

      <WorkoutForm addWorkout={addWorkout} />

      <WorkoutList workouts={workouts} />

      <h3>Total Calories: {totalCalories}</h3>

      {totalCalories >= calorieGoal && (
        <p className={styles.goal}>🎉 Goal Achieved!</p>
      )}
    </div>
  );
}
