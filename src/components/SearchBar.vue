<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
  <input
      :value="modelValue"
      @input="$emit('update:modelValue', $event.target.value)"
      placeholder="Suchen ..."
  >
</template>

<style scoped>
  input {
    border: solid 2px var(--main-text-color);
  }
</style>