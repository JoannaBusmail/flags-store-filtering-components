<template>
    <div class="row justify-content-center">
        <div
            class="col my-3"
            v-for="country in orderCountriesPopulation"
            :key="country.name.common"
        >
            <SingleCard :country="country"></SingleCard>
        </div>
    </div>
</template>

<script setup>
import { onMounted, computed } from 'vue'
import { useCountryStore } from '../stores/countries'
import { storeToRefs } from 'pinia'
import SingleCard from './singleCard.vue'

//store
const useCountries = useCountryStore()
const { getCountries } = useCountries
const { apiCountries, orderCountriesPopulation } = storeToRefs(useCountries)

onMounted(() =>
{
    getCountries('https://restcountries.com/v3/all')
})

const mappedCountries = computed(() =>
{
    return apiCountries.value.map((country) =>
    {
        return {
            name: country.name.common,
            flag: country.flags.png,
            nativeName: country.name.nativeName,
            population: country.population,
            capital: country.capital,
            region: country.region,
        }
    })
})
</script>

