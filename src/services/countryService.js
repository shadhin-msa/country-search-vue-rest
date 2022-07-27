// countryService.js
// provides functions to call country api [search by country name, country details]
import axios from "axios";

const apiClientCountry = axios.create({
  baseURL: "https://restcountries.com/v3.1",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-type": "application/json",
  },
});
export default {
  getAllCountries() {
    return apiClientCountry.get("/all").catch((err) => {
      console.log(err);
      throw error;
    });
  },
  // searchCountryByName (searchedText, regionToFilter) {
  //   return {}
  // },
  // getCountryDetails () {
  //   return {}
  // }
};
