<script setup lang="ts">
const props = defineProps( ['class', 'ariaLabel']);
defineEmits(["onTrigger"]);
</script>

<template>
  <button :class="props.class" @click="$emit('onTrigger')" type="button" :aria-label="props.ariaLabel">
   <slot/>
  </button>
</template>

<style scoped>
button {
  padding: 0.2em 0.55em;
  text-decoration: none;
  border: solid 2px var(--main-text-color);
}

.primary {
  background-color: #fdb910;
  color: var(--main-text-color)
}

.primary:hover {
  background-color: #f6c03a;
}

.secondary {
  background-color: #ff8f11;
}

.secondary:hover {
  background-color: #f3a75a;
}

.tertiary {
  background-color: transparent;
  color: var(--main-background-color);
  border: none;
  padding: 0;
}

.tertiary:hover {
  color: #c8c5c2;
}

.delete {
  background-color: #da3b3b;
}

.delete:hover {
  background-color: #a1312e;
}
</style>