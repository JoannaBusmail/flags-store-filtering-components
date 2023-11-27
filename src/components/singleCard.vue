<template>
    <div
        class="card mb-3 mx-auto"
        style="width: 25rem;"
    >
        <div class="card-body">
            <h5 class="card-title text-center mb-3">{{ country.name.common }}</h5>
            <img
                :src="country.flags?.[0]"
                :alt="country.name.common"
                class="card-img-top"
                style="object-fit: cover; height: 200px;"
            />

            <p class="card-text">
                <span class="badge text-bg-dark d-block my-2">Native name: {{
                    country.name.nativeName?.zho?.common || 'N/A' }}</span>
                <span
                    class="badge text-bg-info  d-block my-2 custom-badge">Population:
                    {{
                        formattedNumber || 'N/A' }}</span>
                <span class="badge text-bg-dark  d-block my-2">Capital: {{
                    country.capital?.[0] || 'N/A' }}</span>
                <span class="badge text-bg-dark  d-block my-2">Continent: {{
                    country.region || 'N/A' }}</span>
            </p>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue'


const props = defineProps({
    country: {
        type: Object,
        required: true
    }
})

const formattedNumber = computed(() =>
{
    return new Intl.NumberFormat("de-DE").format(props.country.population)
})

</script>

<style>
.custom-badge {
    padding-top: 20px;
    padding-bottom: 20px;
}
</style>
```