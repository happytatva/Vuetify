import { createRouter, createWebHistory } from "vue-router";
import PageNotfound from "../pages/pageNotfound.vue";
import SnackbarComponent from "@/components/SnackbarComponent.vue";
import DatepickerComponent from "@/components/DatepickerComponent.vue";
import SelectComplete from "@/components/SelectComplete.vue";
import AutocompleteComponent from "@/components/AutocompleteComponent.vue";
import Index from "@/pages/index.vue";

const routes = [
  {
    path: "/",
    name: "main-page",
    component: Index,
  },
  {
    path: "/snackbar",
    name: "Snackbar",
    component: SnackbarComponent,
  },
  {
    path: "/select",
    name: "Select",
    component: SelectComplete,
  },
  {
    path: "/autocomplete",
    name: "Autocomplete",
    component: AutocompleteComponent,
  },
  {
    path: "/datepicker",
    name: "DatePicker",
    component: DatepickerComponent,
  },
  {
    path: "/:pathMatch(.*)*",
    name: "pageNotFound",
    component: PageNotfound,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
