<script setup lang="ts">
import Button from "@/components/Button.vue";

defineProps(["tag", "editable", "key"]);
defineEmits(["delete"]);
</script>

<template>
  <div>
    <p>{{tag}}</p>
    <Button v-if='editable === "true"' class="tertiary" aria-label="delete Tag" @click="$emit('delete', key)">
      x
    </Button>
  </div>
</template>

<style scoped>
  div {
    background: var(--main-text-color);
    color: var(--main-background-color);
    padding: 0 0.5rem;
    font-size: 0.65rem;
    border-radius: 2rem;
  }

</style>