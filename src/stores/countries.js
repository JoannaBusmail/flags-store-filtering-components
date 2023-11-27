import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import axios from 'axios'


//STATES AND GETTERS --> STORE TO REF

export const useCountryStore = defineStore('country', () => {
  //states
  const apiCountries = ref([])
  const filterCountry = ref([])
  const loading = ref(false)

 //actions
  const getCountries = async (url) => {
    loading.value = true
    try{
      const response = await axios.get(url)
      apiCountries.value = response.data
    } catch (error) {
      console.log(error)
    } finally {
      loading.value = false
    }
    console.log(apiCountries.value)
  }

  const filterCountries = async (region) =>{
    const filter =  apiCountries.value.filter(country => country.region === region)
    filterCountry.value = filter
    return filterCountry.value
  }

  const getCountry = async (inputText) => {
    const filter = apiCountries.value.filter(country => {
      const countryName = country.name.common || '';
      return countryName.toString().toLowerCase().includes(inputText.toLowerCase());
    });
  
    filterCountry.value = filter;

    return filterCountry.value;
  }

//getter  
  const orderCountriesPopulation = computed(()=>{
    const countriesToSort = filterCountry.value.length > 0 ? filterCountry.value : apiCountries.value
    return countriesToSort.sort((a, b) => {
      return b.population - a.population
    })
  })

  
  return { apiCountries, filterCountry, getCountries, orderCountriesPopulation, loading, filterCountries, getCountry }
})
