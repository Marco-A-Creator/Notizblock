let notesTitles = ['Note', 'Book'];
let notes = ['Itachi Uchia', 'Sasuka Uchia'];

let trashNotesTitles = [];
let trashNotes = [];


// Gobal Notes
function renderNotes() {
    let contentRef = document.getElementById('content');
    contentRef.innerHTML = "";

    for (let indexNote = 0; indexNote < notes.length; indexNote++) {
        contentRef.innerHTML += getNoteTemplate(indexNote);
    }
}


// Trash Notes
function renderTrashNotes() {
    let trashContentRef = document.getElementById('trash_content');
    trashContentRef.innerHTML = "";

    for (let indexTrashNote = 0; indexTrashNote < trashNotes.length; indexTrashNote++) {
        trashContentRef.innerHTML += getTrashNoteTemplate(indexTrashNote);
    }
}

function getTrashNoteTemplate(indexTrashNote) {
    return `<p>+ title: ${trashNotesTitles[indexTrashNote]} -> ${trashNotes[indexTrashNote]}<button onclick="deleteTrashNote(${indexTrashNote})">X</button></p>`;
}


// Place Notes
function getNoteTemplate(indexNote) {
    return `<p>+  title: ${notesTitles[indexNote]} -> ${notes[indexNote]}<button onclick="noteToTrash(${indexNote})">X</button></p>`;
}

function addNote(note) {
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}


// Delete Notes
function noteToTrash(indexNote) {
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote[0]);
    let trashNoteTitle = notesTitles.splice(indexNote, 1);
    trashNotesTitles.push(trashNoteTitle[0]);
    renderNotes();
    renderTrashNotes();
}

// Delete Trash Notes
function deleteTrashNote(indexTrashNote) {
    trashNotes.splice(indexTrashNote, 1);
    renderNotes();
    renderTrashNotes();
}