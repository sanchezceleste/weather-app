import { createRouter, createWebHistory } from 'vue-router'
import allCountries from '../views/allCountries.vue'
import addCountry from '../views/addCountry.vue'
import country from '../views/country.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'countryList',
      component: allCountries,
    },
    {
      path: '/create',
      name: 'addNewCountry',
      component: addCountry
    },
    {
      path: '/country',
      name: 'viewOneCountry',
      component: country
    },
  ],
})

export default router
