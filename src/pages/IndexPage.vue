<template>
  <q-page class="">
    <div class="wrapper">
      <div class="row controls q-my-xl justify-between">
        <div class="col-auto bg-white rounded-borders q-px-md">
          <q-input
            color="teal"
            v-model="countrySearchedValue"
            placeholder="Search for a country..."
            borderless
            style="min-width: 300px"
          >
            <template v-slot:prepend>
              <q-icon name="search" />
            </template>
          </q-input>
        </div>
        <div class="col-auto bg-white rounded-borders q-px-md">
          <q-select
            style="min-width: 200px"
            borderless
            v-model="regionFilter"
            :options="regionOptions"
            label="Filter by Region"
          />
        </div>
      </div>
      <div class="row items-start q-col-gutter-md">
        <div
          class="col-auto"
          v-for="c in countryStore.getCountriesByPage"
          :key="c.name.official"
        >
          <q-card class="my-card bg-grey-2">
            <img
              :src="c.flags.png"
              height="170"
              style="width: auto; max-width: 100%"
            />

            <q-card-section>
              <div class="text-h6">{{ c.name.official }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <b>Population:</b> {{ c.population }} <br />
              <b>Region:</b> {{ c.region }} <br />
              <b>Capital:</b>
              {{
                Array.isArray(c.capital) && c.capital.length
                  ? c.capital[0]
                  : "--"
              }}
              <br />
            </q-card-section>
          </q-card>
        </div>

        <div class="fixed-bottom-right q-ma-md">
          <q-btn-group>
            <q-btn
              @click="countryStore.goPreviousPage"
              icon="keyboard_arrow_left"
              label="Prev"
            ></q-btn>
            <q-btn
              no-caps
              :label="
                countryStore.currentPageNo + ' of ' + countryStore.totalPageNo
              "
            ></q-btn>
            <q-btn
              @click="countryStore.goNextPage"
              label="Next"
              icon-right="keyboard_arrow_right"
            ></q-btn>
          </q-btn-group>
        </div>

        <!--
        <div class="col-12 col-md-3">
          <div class="row bg-grey">hello</div>
        </div>

        <div class="col-12 col-md-3">
          <div class="row bg-grey">hello</div>
        </div>
        <div class="col-12 col-md-3">
          <div class="row bg-grey">hello</div>
        </div>
        <div class="col-12 col-md-3">
          <div class="row bg-grey">hello</div>
        </div>
        <div class="col-12 col-md-3">
          <div class="row bg-grey">hello</div>
        </div> -->
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";
import { useCountryStore } from "../stores/country";
import { onMounted } from "vue";
export default defineComponent({
  name: "IndexPage",
  setup() {
    const sampleCountryList = ref([
      {
        name: "bangladesh",
        capital: "dhaka",
      },
      {
        name: "india",
        capital: "New Delhi",
      },
      {
        name: "pakistan",
        capital: "Islamabad",
      },
      {
        name: "Maylasia",
        capital: "Male",
      },
    ]);
    const regionFilter = ref("");
    const regionOptions = ref([
      "Africa",
      "America",
      "Asia",
      "Europe",
      "Oceania",
    ]);
    const countrySearchedValue = ref("");
    const countries = ref([]);
    const currentPageNo = ref(1);
    const countryStore = useCountryStore();

    // const getCountriesByPage = () => {
    //   countries.value = countryStore.getCountriesByPage(currentPageNo);
    //   console.log(countryStore.getCountriesByPage(currentPageNo));
    //   // .then((res) => {
    //   //   this.countries = res;
    //   // })
    //   // .catch((error) => {
    //   //   this.$router.push({
    //   //     name: "ErrorDisplay",
    //   //     params: { error: error },
    //   //   });
    //   // });
    // };

    onMounted(() => {
      countryStore.getAllCountries().catch((error) => {
        this.$router.push({
          name: "ErrorDisplay",
          params: { error: error },
        });
      });
    });

    return {
      sampleCountryList,
      regionFilter,
      regionOptions,
      countrySearchedValue,
      countryStore,
      countries,
      currentPageNo,
    };
  },
});
</script>
