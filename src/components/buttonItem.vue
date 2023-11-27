<template>
    <button
        type="button"
        class="btn btn-outline-secondary"
        @click="handleClick"
    >{{ btnName }}</button>
</template>

<script setup>

const props = defineProps({
    btnName: String
})

const emit = defineEmits([ 'handleClick' ])

const handleClick = () =>
{
    emit('handleClick', props.btnName)
}
</script>