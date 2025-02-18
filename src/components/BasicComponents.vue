<template>
  <v-container>
    <h3 class="mb-10 text-color">Data Binding</h3>
    <v-row>
      <v-col>
        <p class="text-left mb-8 mr-8 text-primary">{{ customText }}</p>
        <v-radio-group v-model="selectRadio" color="secondary" @input="Myfunction()" inline>
          <v-radio name="radio" label="Poor" value="Poor"></v-radio>
          <v-radio name="radio" label="Average" value="Average"></v-radio>
          <v-radio name="radio" label="Excellent" value="Excellent"></v-radio>
        </v-radio-group>
      </v-col>
      <v-col>
        <p class="mb-16 text-primary">Select weather range</p>
        <v-range-slider
          strict
          color="secondary"
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
    <v-row>
      <v-sparkline
        :auto-line-width="autoLineWidth"
        :fill="fill"
        :gradient="gradient"
        :gradient-direction="gradientDirection"
        :line-width="width"
        :model-value="value"
        :padding="padding"
        :smooth="radius || false"
        :stroke-linecap="lineCap"
        :type="type"
        auto-draw
      ></v-sparkline>
    </v-row>
    <v-row>
      <ul>
        <li>home</li>
        <li>aboout</li>
        <li>contact</li>
        <li>services</li>
        <li>products</li>
        <li>blogs</li>
        <li>news</li>
      </ul>
    </v-row>
  </v-container>
</template>
<style lang="scss">
  ul {
    text-align: left;
    background-color: #454545;
    min-width: 250px;
    height: 200px;
    overflow-y: auto;
    overflow-x: hidden;
    &::-webkit-scrollbar {
      width: 5px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: rgb(109, 94, 94);
      border-radius: 5px;
    }
    &::-webkit-scrollbar-track {
      background-color: transparent;
    }
    li {
      padding: 10px;
      margin-right: -5px;
      transition: all 0.5 linear;
      &:hover{
        background-color: #5a5a5a;
      }
    }
  }
</style>
<script>
  const gradients = [
    ['#222'],
    ['#42b3f4'],
    ['red', 'orange', 'yellow'],
    ['purple', 'violet'],
    ['#00c6ff', '#F0F', '#FF0'],
    ['#f72047', '#ffd200', '#1feaea'],
  ]
  export default {
    data() {
      return {
        width: 2,
        radius: 10,
        padding: 8,
        lineCap: 'round',
        gradient: gradients[4],
        value: [0, 2, 5, 9, 5, 10, 3, 5, 0, 0, 1, 8, 2, 9, 0],
        gradientDirection: 'top',
        gradients,
        fill: false,
        type: 'trend',
        autoLineWidth: false,
        
        customText: "Select Something",
        selectRadio: null,
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
        if(this.selectRadio == "Poor") {
          this.customText = "Sorry for inconvenience 😞, We'll make sure that next time you would like this more🙂"
        }
        else if (this.selectRadio == "Average") {
          this.customText = "Trying our best🎉"
        }
        else {
          this.customText = "Thank you for your rating🥳"
        }
      },
      season (val) {
        return this.icons[val]
      },

    },
  }
</script>