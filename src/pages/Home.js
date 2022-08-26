import React, { useState } from "react";
import { Box } from "@mui/material";
import HeroBanner from "../components/HeroBanner";
import SearchExercises from "../components/SearchExercises";
import Exercises from "../components/Exercises";

function Home() {
  const [bodyPart, setBodyPart] = useState("all"); // نقلتها ف الهوم عشان أنا هحتاج أنقلها لأكتر من كومبوننت
  const [exercises, setExercises] = useState([]);
  console.log(bodyPart);

  return (
    <Box>
      <HeroBanner />

      <SearchExercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />

      <Exercises
        setExercises={setExercises}
        bodyPart={bodyPart}
        exercises={exercises}
      />
    </Box>
  );
}

export default Home;
