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
        <div class="col-auto" v-for="c in sampleCountryList" :key="c.name">
          <q-card class="my-card">
            <img src="https://cdn.quasar.dev/img/mountains.jpg" />

            <q-card-section>
              <div class="text-h6">{{ c.name }}</div>
            </q-card-section>

            <q-card-section class="q-pt-none">
              <b>Population:</b> 00000 <br />
              <b>Region:</b> --- <br />
              <b>Capital:</b> -- <br />
            </q-card-section>
          </q-card>
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

    return {
      sampleCountryList,
      regionFilter,
      regionOptions,
      countrySearchedValue,
    };
  },
});
</script>
