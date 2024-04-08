import axios from "axios";
const apiUrl = "http://www.omdbapi.com/?apikey=42c8ba0c&t=";

export const fetchFromAPI = async (str) =>{
   const response = await axios.get(apiUrl + str);

   console.log(response);
   return response.data;
};