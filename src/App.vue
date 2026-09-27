<script setup lang="ts">
  import SearchBar from "@/components/SearchBar.vue";
  import NotesList from "@/components/NotesList.vue";
  import { useNotes } from "@/composables/useNotes"
  import NoteForm from "@/components/NoteForm.vue";
  import {ref} from "vue";

  const { notes, addNote, deleteNote, filteredNotes } = useNotes();

  const query = ref("");

  const results = filteredNotes(query);
</script>

<template>
  <header>
    <p id="logo"> QUICKNOTES </p>
  </header>

  <SearchBar v-model="query"/>

  <NoteForm @add="addNote" />

  <NotesList :notes="results" @delete="deleteNote"/>
</template>

<style scoped>
  #logo {
    background: #e9ef41;
    padding: 0.5rem;
    width: fit-content;
  }
</style>
