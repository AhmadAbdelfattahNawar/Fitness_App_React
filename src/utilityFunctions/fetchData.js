// utility functions
// connection with RAPID API

export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "fdf5daa79dmshf2354fe3aa85b2dp1f17a9jsncef9cd97bf50",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

// export default fetchData
