import { createRouter, createWebHistory } from 'vue-router'
import allCountries from '@/views/AllCountries.vue'
import addCountry from '@/views/AddCountry.vue'
import country from '@/views/Country.vue'

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
      path: '/country/:id',
      name: 'viewOneCountry',
      component: country
    },
  ],
})

export default router
