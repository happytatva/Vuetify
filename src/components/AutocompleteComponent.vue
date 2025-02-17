<template>
  <v-container>
    <h3>Autocomplete component</h3>
    <v-row>
      <v-col>
        <v-autocomplete
          label="Choose any language"
          :items="['Python', 'Java', 'Ruby', 'Kotlin', 'C', 'C++']"
        >
        </v-autocomplete>
      </v-col>
      <v-col>
        <v-autocomplete
          clearable
          chips
          label="Choose multiple"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          multiple>
        </v-autocomplete>
      </v-col>
    </v-row>
  </v-container>
</template>