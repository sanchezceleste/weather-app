import { defineStore } from 'pinia';
import apiClient from '../api';
import { type Country } from '../types'


export const useCountryStore = defineStore('country', {
    state: () => ({
      countries: [] as Country[],
      country: null as Country | null,
      loading: false,
      error: null as string | null,
    }),
    actions: {
      async fetchCountries() {
        this.loading = true;
        try {
          const response = await apiClient.get('/country');
          this.countries = response.data.countries;
          this.error = null;
        } catch (error: any) {
          this.error = error.message || 'Failed to fetch countries';
        } finally {
          this.loading = false;
        }
      },
      async fetchCountryById(id: string) {
        this.loading = true;
        try {
          const response = await apiClient.get(`/country/${id}`);
          this.country = response.data.data;
          this.error = null;
        } catch (error: any) {
          this.error = error.message || 'Failed to fetch country';
        } finally {
          this.loading = false;
        }
      },
      async createCountry(countryData: Omit<Country, 'id'>) {
        this.loading = true;
        try {
          const response = await apiClient.post('/country', countryData);
          this.countries.push(response.data);
          this.error = null;
        } catch (error: any) {
          this.error = error.message || 'Failed to create country';
        } finally {
          this.loading = false;
        }
      },
      async updateCountry(id: string, countryData: Partial<Country>) {
        this.loading = true;
        try {
          const response = await apiClient.put(`/country/${id}`, countryData);
          this.country = response.data.data;
          this.error = null;
        } catch (error: any) {
          this.error = error.message || 'Failed to update country';
        } finally {
          this.loading = false;
        }
      },
      async deleteCountry(id: string) {
        this.loading = true;
        try {
          await apiClient.delete(`/country/${id}`);
          this.countries = this.countries.filter((country: Country) => country.id !== id);
          this.error = null;
        } catch (error: any) {
          this.error = error.message || 'Failed to delete country';
        } finally {
          this.loading = false;
        }
      },
    }
  });
