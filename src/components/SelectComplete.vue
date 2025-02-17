<template>
  <v-container>
    <h3>Select component</h3>
    <v-row>
      <v-col>
        <v-select
          color="primary"
          label="Select any game"
          :items="['Cricket', 'Hockey', 'Football', 'Tennis', 'Basketball', 'Badminton']"
        ></v-select>
      </v-col>
      <v-col>
        <v-select
          clearable
          chips
          label="Select multiple"
          :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
          multiple
          color="primary"
        ></v-select>
      </v-col>
    </v-row>
  </v-container>
</template>