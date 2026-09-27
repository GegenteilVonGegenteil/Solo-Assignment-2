import {computed, unref} from 'vue'
import { useLocalStorage } from './useLocalStorage.js'

export function useNotes() {
    const notes = useLocalStorage('quicknotes', [])

    function addNote(note) {
        const newNote = {
            id: Date.now(),
            title: note.title,
            content: note.content,
            tags: note.tags
        }

        notes.value.push(newNote);
    }

    function deleteNote(id) {
        const index = notes.value.findIndex(note => note.id === id);

        if (index !== -1) {
            notes.value.splice(index, 1);
        }
    }

    function filteredNotes(term)    {
        return computed(() => {
            if (!term.value) return notes.value

            return notes.value.filter(note =>
                note.title.includes(term.value) ||
                note.content.includes(term.value) ||
                note.tags.some(tag => tag.includes(term.value))
            )
        })
    }

    return { notes, addNote, deleteNote, filteredNotes }
}
