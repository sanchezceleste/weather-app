<template>
  <div>
    <h1 style="color:black">All Countries</h1>
    <div v-if="loading">Loading...</div>
    <div v-if="error">{{ error }}</div>
    <ul v-if="countries.length">
      <li v-for="country in countries" :key="country.id" style="margin-top: 20px; color: white;">
        <router-link :to="`/country/${country.id}`">{{ country.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCountryStore } from '../stores/countryStore';

const countryStore = useCountryStore();

const { fetchCountries, countries, loading, error } = countryStore;

onMounted(() => {
  fetchCountries();
});
</script>