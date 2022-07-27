import { defineStore } from "pinia";
import countryService from "../services/countryService";

export const useCountryStore = defineStore("country", {
  state: () => ({
    countries: [],
    countriesArray: [],
    selectedCountryID: "",
    currentPageNo: 1,
    itemsInOnePage: 12,
    // region: "",
    // regions: [''],
  }),

  getters: {
    getCountriesByPage() {
      const indexFrom = (this.currentPageNo - 1) * this.itemsInOnePage;
      const indexTo = indexFrom + this.itemsInOnePage;
      return this.countries.slice(indexFrom, indexTo);
    },

    totalPageNo() {
      return (
        Math.floor(this.countries.length / this.itemsInOnePage) +
        (this.countries.length % this.itemsInOnePage ? 1 : 0)
      );
    },
  },

  actions: {
    getAllCountries() {
      return countryService
        .getAllCountries()
        .then((response) => {
          this.countries = response.data;
        })
        .catch((error) => {
          throw error;
        });
    },

    goNextPage() {
      console.log("go next page called");
      if (this.totalPageNo > this.currentPageNo) {
        this.currentPageNo++;
      } else {
        this.currentPageNo = this.totalPageNo;
      }
    },
    goPreviousPage() {
      console.log("go previous page called");
      if (this.currentPageNo > 1) {
        this.currentPageNo--;
      } else {
        this.currentPageNo = 1;
      }
    },
  },
});
