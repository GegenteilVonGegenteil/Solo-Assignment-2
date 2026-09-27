<script setup lang="ts">
import TagChip from "@/components/TagChip.vue";
const props = defineProps(["tags", "editable"]);

function deleteTag(id: number): void {
  props.tags.splice(id, 1);
}
</script>

<template>
  <div>
    <TagChip
        v-for="(tag, i) in tags"
        :tag="tag"
        :key="i"
        :editable="editable"
        @delete="deleteTag(i)"
    />
  </div>

</template>

<style scoped>
  div {
    display: flex;
    flex-wrap: wrap;
    gap:0.75rem;
  }
</style>