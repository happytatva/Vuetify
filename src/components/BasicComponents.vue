<template>
  <v-container>
    <h3>Data Binding</h3>
    <v-row class="align-center">
      <v-col>
        <h5 style="text-align: left;">Rate me</h5>
        <v-radio-group v-model="selectRadio" color="secondary" @input="Myfunction()">
          <v-radio name="radio" label="Poor" value="Poor 😒"></v-radio>
          <v-radio name="radio" label="Average" value="Average 🙂"></v-radio>
          <v-radio name="radio" label="Excellent" value="Excellent 🥳"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col>
        <p class="mb-12">Select your range</p>
        <v-range-slider
          color="primary"
          :model-value="[1, 2]"
          :step="1"
          :ticks="seasons"
          max="3"
          min="0"
          show-ticks="always"
          thumb-label="always"
          tick-size="4"
        >
          <template v-slot:thumb-label="{ modelValue }">
            <v-icon :icon="season(modelValue)" theme="dark"></v-icon>
          </template>
        </v-range-slider>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
  export default {
    data() {
      return {
        selectRadio: "Select Something",
        seasons: {
          0: 'Winter',
          1: 'Spring',
          2: 'Summer',
          3: 'Fall',
        },
        icons: [
          'mdi-snowflake',
          'mdi-leaf',
          'mdi-fire',
          'mdi-water',
        ],
      }
    },
    methods: {
      Myfunction(){
        alert("Your Rating: " + this.selectRadio);
      },
      season (val) {
        return this.icons[val]
      },

    },
  }
</script>