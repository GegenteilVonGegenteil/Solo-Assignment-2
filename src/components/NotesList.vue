<script setup lang="ts">
  import NoteCard from "@/components/NoteCard.vue";

  const props = defineProps(["notes"]);
  const emits = defineEmits(["delete"]);
</script>

<template>
  <section>
    <NoteCard
        v-for="(note) in props.notes"
        :key="note.id"
        :note="note"
        @delete="$emit('delete', note.id)"
    />
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
</style>