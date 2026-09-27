<script setup lang="ts">
import BaseCard from "@/components/BaseCard.vue";
import TagList from "@/components/TagList.vue";
import Button from "@/components/Button.vue";
const props = defineProps(["note"]);
defineEmits(["delete"]);
</script>

<template>
  <BaseCard>
    <template #header>
      {{props.note.title}}
      <Button class="delete" aria-label="delete Note" @click="$emit('delete', note.id)">x</Button>
    </template>
    {{props.note.content}}
    <TagList :tags="props.note.tags" editable="false"/>
  </BaseCard>
</template>

<style scoped>

</style>