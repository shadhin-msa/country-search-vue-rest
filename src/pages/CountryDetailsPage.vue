<template>
  <q-page class="">
    <div class="wrapper">
      <div class="q-pa-md row items-start q-col-gutter-md">
        <div class="col-12 q-py-lg">
          <q-btn flat dense icon="dark_mode" label="Back" no-caps />
        </div>
        <div class="col-6 q-pr-xl">
          <img
            src="https://cdn.quasar.dev/img/mountains.jpg"
            style="max-width: 100%"
          />
        </div>
        <div class="col-6 q-mt-lg q-pl-xl">
          <div class="text-h4 q-py-md" style="text-transform: capitalize">
            {{ country.name }}
          </div>
          <div class="row">
            <div class="col-6">
              <b>Population:</b> 00000 <br />
              <b>Region:</b> --- <br />
              <b>Capital:</b> -- <br />
            </div>
            <div class="col-6">
              <b>Population:</b> 00000 <br />
              <b>Region:</b> --- <br />
              <b>Capital:</b> -- <br />
            </div>

            <div class="col-12 q-mt-lg">
              <b>Border Countries: </b>
              <q-chip
                v-for="bc in country.borderCountries"
                :key="bc"
                square
                :label="bc"
              ></q-chip>
            </div>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "CountryDetailsPage",
  setup() {
    const country = ref({
      name: "bangladesh",
      capital: "dhaka",
      borderCountries: ["India", "Maynmar"],
    });

    return {
      country,
    };
  },
});
</script>
