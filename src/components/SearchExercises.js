import React, { useState, useEffect } from "react";
import { Box, Button, Stack, TextField, Typography } from "@mui/material";
import { exerciseOptions, fetchData } from "../utilityFunctions/fetchData";
import HorizontalScroolbar from "./HorizontalScroolbar";

function SearchExercises({ setExercises, bodyPart, setBodyPart }) {
  // the actual categories part // to fetch categories once the page is loaded for only one time [empty array]
  // the section under the search immediately
  useState(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises/bodyPartList",
        exerciseOptions
      );
      setBodyParts(["all", ...bodyPartsData]);
    };
    fetchExercisesData(); // call the fn you created
  }, []);
  const [search, setSearch] = useState("");
  // const [exercises, setExercises] = useState([]); // move it to our Home page
  const [bodyParts, setBodyParts] = useState([]);

  // handle click search button

  const handleSearch = async () => {
    if (search) {
      // if somebody writes sth in / if search exists
      const exerciseData = await fetchData(
        "https://exercisedb.p.rapidapi.com/exercises",
        exerciseOptions
      );
      const searchedExercises = exerciseData.filter(
        //returns a new array
        (exercise) =>
          exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      );
      setSearch("");
      setExercises(searchedExercises);
    }
  };
  return (
    <Stack alignItems="center" mt="37px" justifyContent="centre" p="20px">
      <Typography
        fontWeight={700}
        sx={{
          fontSize: { lg: "44px", xs: "30px" },
        }}
        mb="50px"
        textAlign="center"
      >
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px">
        <TextField
          sx={{
            input: { fontWeight: "700", border: "none", borderRadius: "4px" },
            width: { lg: "800px", xs: "350px" },
            backgroundColor: "#fff",
            borderRadius: "40px",
          }}
          height="76px"
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
          type="text"
        />
        <Button
          className="search-btn"
          //   variant="contained"
          sx={{
            bgcolor: "#ff2625",
            color: "#fff",
            textTransform: "none",
            width: { lg: "175px", xs: "80px" },
            fontSize: { lg: "20px", xs: "14px" },
            height: "56px",
            position: "absolute",
            right: "0",
          }}
          onClick={handleSearch}
        >
          Search
        </Button>
      </Box>
      <Box sx={{ position: "relative", width: "100%", p: "20px" }}></Box>

      <HorizontalScroolbar
        data={bodyParts}
        bodyPart={bodyPart}
        setBodtPart={setBodyPart}
      />
      {
        // this is the component wich displays the body Part cards displayed under the search input
        // I will pass the bodyParts (fetched from the API) to it.
      }
    </Stack>
  );
}

export default SearchExercises;
