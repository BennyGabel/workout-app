import React, { useState } from "react";
import Workout from "./Workout";
import WorkoutDay from "./WorkoutDay";
import Button from "./Button";
import { v4 as uuidv4 } from "uuid";
export default function WorkoutTypeCard({ workoutDay }) {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    console.log(workout)
    const newWorkouts = [...workouts, workout];
    newWorkouts.filter((workout) =>
      !workout.id ? (workout.id = uuidv4()) : workout.id
    );
    setWorkouts(newWorkouts);
  };
  const handleRemoveWorkout = (id) => {
    // Will return all workouts that do not belong to the id selected
    setWorkouts(workouts.filter((workouts) => workouts.id !== id));
  };
  return (
    <>
      <WorkoutDay text={workoutDay} />
      <Button
        text={"Add workouts"}
        classes={"purple rounded-pill w-50"}
        onClick={addWorkout}
      />
      {workouts.map((workout) => (
        <Workout
          key={workout.id}
          workout={workout}
          onClick={handleRemoveWorkout}
        />
      ))}
    </>
  );
}