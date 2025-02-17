<template>
  <v-container>
    <h3>Datepicker Component</h3>
    <v-row>
      <v-col>
        <v-date-picker width="100%"></v-date-picker>
      </v-col>
      <v-col>
        <v-date-picker 
          width="100%" 
          color="secondary" 
          show-adjacent-months  
          max="2025-03-25" 
          min="2024-12-25">
        </v-date-picker>
      </v-col>  
    </v-row>
  </v-container>
</template>