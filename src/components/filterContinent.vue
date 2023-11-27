<template>
    <h5 class="text-center my-3">Filtrar por continentes:</h5>
    <div
        class="btn-toolbar justify-content-center"
        role="toolbar"
        aria-label="Toolbar with button groups"
    >
        <div
            class="btn-group"
            role="group"
            aria-label="First group"
        >
            <ButtonItem
                v-for="(buttonName, index) in buttonNames"
                :key="index"
                :btnName="buttonName"
                @handleClick="filterCountries(buttonName)"
            ></ButtonItem>
        </div>
    </div>
</template>

<script setup>
import ButtonItem from './buttonItem.vue'
import { useCountryStore } from '../stores/countries'


const useCountries = useCountryStore()
const { filterCountries } = useCountries

const buttonNames = [
    'Africa',
    'Americas',
    'Asia',
    'Europe',
    'Oceania',
    'All'
]



</script>