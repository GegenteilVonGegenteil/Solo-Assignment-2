<script setup lang="ts">
  import {ref} from "vue";
  import Button from "@/components/Button.vue";
  import type {Note} from "@/types/note.ts";
  import TagList from "@/components/TagList.vue";

  const emit = defineEmits(["add"]);

  const newNote = ref<Note>({id: 0, title: "", content: "", tags: []});
  const newTag = ref("");

  function addNote() {
    if (newNote.value.title !== "" && newNote.value.title !== "") {
      emit("add", newNote .value);
      newNote.value.title = "";
      newNote.value.content = "";
      newNote.value.tags = [];
      newTag.value = "";
    }
  }

  function addTag() {
    if (newTag.value.trim() !== "") {
      newNote.value.tags.push(newTag.value);
      newTag.value = "";
    }
  }
</script>

<template>
  <section>
    <form @submit.prevent="addNote">
      <h2>Add Note</h2>
      <label for="titel">Titel</label>
      <input
          id="titel"
          v-model="newNote.title"
          placeholder="Enter Title"
          type="text"
          aria-label="Title Input"
      />
      <label for="content">Main Text</label>
      <textarea
          id="content"
          v-model="newNote.content"
          placeholder="Enter Content"
          type="text"
          aria-label="Content Input"
      />
      <label for="tags">Add Tag</label>
      <div id="tagInput">
        <input
            id="tags"
            v-model="newTag"
            placeholder="Enter Tag"
            type="text"
            aria-label="Content Input"
        />
        <Button @click="addTag" type="button" class="secondary" aria-label="add Tag">+</Button>
      </div>
      <TagList :tags="newNote.tags" editable="true"/>
      <Button text="Add Note" @click="addNote" class="primary" aria-label="add Note">Add Note</Button>
    </form>
  </section>
</template>

<style scoped>
  section {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  h2 {
    margin: 0;
    font-size: 1.2em;
  }

  form {
    width: 50vw;
    padding: 2em;
    margin-top: 1em;
    border: solid 2px var(--main-text-color);
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75em;
  }

  #titel {
    border: solid 2px var(--main-text-color);
  }

  #tagInput {
    display: flex;
    flex-wrap: wrap;
    gap: 1em;
  }

  #tags {
    border: solid 2px var(--main-text-color);
  }

  #content {
    height: 4em;
    width: 100%;
    border: solid 2px var(--main-text-color);
  }
</style>