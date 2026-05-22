let notes = [];
    let archived = [];
    let deleted = [];

    function saveData() {
      localStorage.setItem("notes", JSON.stringify(notes));
      localStorage.setItem("archived", JSON.stringify(archived));
      localStorage.setItem("deleted", JSON.stringify(deleted));
    }

    function loadData() {
      notes = JSON.parse(localStorage.getItem("notes")) || [];
      archived = JSON.parse(localStorage.getItem("archived")) || [];
      deleted = JSON.parse(localStorage.getItem("deleted")) || [];

      renderNotes();
    }

    function addNote() {
      const text = document.getElementById("noteText").value.trim();

      if(text === "") {
        alert("Bitte eine Notiz eingeben!");
        return;
      }

      notes.push(text);
      document.getElementById("noteText").value = "";

      saveData();
      renderNotes();
    }

    function archiveNote(index) {
      archived.push(notes[index]);
      notes.splice(index, 1);

      saveData();
      renderNotes();
    }

    function deleteNote(index, source) {

      if(source === "active"){
        deleted.push(notes[index]);
        notes.splice(index,1);
      }

      if(source === "archived"){
        deleted.push(archived[index]);
        archived.splice(index,1);
      }

      saveData();
      renderNotes();
    }

    function restoreNote(index) {
      notes.push(deleted[index]);
      deleted.splice(index,1);

      saveData();
      renderNotes();
    }

    function permanentlyDelete(index) {
      deleted.splice(index,1);

      saveData();
      renderNotes();
    }




/**
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

//Local Storage
function init() {
    if (localStorage.getItem('notes') && localStorage.getItem('notesTitles') && localStorage.getItem('trashNotes') && localStorage.getItem('trashNotesTitles')) {
        notes = JSON.parse(localStorage.getItem('notes'));
    }
}

function saveNotes() {
    localStorage.setItem('notes', JSON.stringify(notes));
    localStorage.setItem('notesTitles', JSON.stringify(notesTitles));
    localStorage.setItem('trashNotes', JSON.stringify(trashNotes));
    localStorage.setItem('trashNotesTitles', JSON.stringify(trashNotesTitles));
}
*/