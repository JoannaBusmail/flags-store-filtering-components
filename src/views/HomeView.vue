<template>
    <div class="container">
        <h1 class="text-center">Countries</h1>
        <Continent></Continent>
        <SearcherInput v-model="countrySearch"></SearcherInput>
        <CardList></CardList>

    </div>
</template>

<script setup>
import { ref } from 'vue'
import CardList from '../components/cardList.vue'
import Continent from '../components/filterContinent.vue'
import SearcherInput from '../components/searcherInput.vue'



const countrySearch = ref('')

</script>
