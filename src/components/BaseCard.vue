<script setup lang="ts">

</script>

<template>
  <div class="card">
    <div v-if="$slots.header" class="card-header">
      <slot name="header" />
    </div>
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<style scoped>
  .card {
    background: var(--regular-note-color);
    width: 50vw;
    padding: 2em;
    margin: 1em;
    border: solid 2px var(--main-text-color);
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  .card-header {
    font-weight: bold;
    font-size: 1.2em;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    align-items: center;
    margin-bottom: 1em;
  }

  .card-body {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>