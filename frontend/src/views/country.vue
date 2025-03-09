<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { useCountryStore } from '../stores/countryStore';

const route = useRoute();
const countryId = route.params.id as string;

const countryStore = useCountryStore();


const { fetchCountryById, country, loading, error } = countryStore;

onMounted(() => {
  fetchCountryById(countryId);
});
</script>

<template>
  <main>
    <h1>Country Details</h1>
    <p v-if="loading">Loading...</p>
    <p v-if="error">{{ error }}</p>
    
    <div v-if="country">
      <h2>{{ country.name }}</h2>
      <p><strong>ID:</strong> {{ country.id }}</p>
      <p><strong>Opinion:</strong> {{ country.opinion }}</p>
    </div>
  </main>
</template>
