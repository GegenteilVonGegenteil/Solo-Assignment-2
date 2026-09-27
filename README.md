# Hausübung 2 (Quicknotes)
## Project Setup
Navigieren Sie in den Projektordner

### Dependencies installieren

```sh
npm install
```

### Projekt Starten
Entweder für Development:
#### Compile and Hot-Reload for Development

```sh
npm run dev
```
Oder zum Bauen:
#### Type-Check, Compile and Minify for Production

```sh
npm run build
```

## Struktur Erklärung
Die Separierung der Logik in Composables erfüllt einen ähnlichen Zweck wie die von mehreren Komponenten.
Es ist einfacher den Code zu finden, der für eine gewisse Funktionalität zuständig ist und Funktionen/States können an 
verschiedenen Stellen wiederverwendet werden, anstatt sie wiederholt zu deklarieren. Dies wäre vor allem bei größeren oder 
komplexeren Applikationen von Vorteil, in der verschiedene Seiten zugang zu den gleichen Funktionen brauchen.

## Reflektionsfragen

### 1. Warum darf NoteCard die Notiz-Prop nicht selbst verändern, und wie löst ihr das stattdessen?
Der State von den Notizen wird von einer Parent-Komponente gehandhabt. Um den Datenfluss einzuhalten kann NoteCard nicht
darauf zugreifen, sondern muss es "rauf" melden, hier durch ein emit. Würde man stattdessen versuchen es in NoteCard direkt
zu verändern, würde es beim nächsten render überschreiben werden.

### 2. Was passiert, wenn zwei Komponenten dasselbe useNotes() aufrufen — teilen sie sich die Notizen oder nicht? Begründet kurz.
Sie teilen sich die gleichen Notizen da sie das gleiche referenzieren. In diesem Fall kommt zudem das notes aus dem LocalStorage
kommt und dementsprechend dasselbe geladen wird. 

### 3. Wozu dient das Note-Interface, wenn der Code auch ohne liefe?
Es macht es einfacher auf die Attribute zu greifen und zu garantieren, das Notes über Komponenten gleich aufgebaut sind.

