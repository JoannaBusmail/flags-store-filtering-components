<template>
    <input
        type="text"
        placeholder="Search Country"
        class="form-control my-3 w-50 mx-auto"
        :value="modelValue"
        @keyup="handleSearch"
    >
</template>

<script setup>
import { useCountryStore } from '../stores/countries'
const useCountries = useCountryStore()
const { getCountry } = useCountries

const props = defineProps({
    modelValue: {
        type: String,
        required: true,
    },
})


const emit = defineEmits([ 'update:modelValue' ])
const handleSearch = (event) =>
{
    emit('update:modelValue', event.target.value)
    getCountry(event.target.value)
}
</script>