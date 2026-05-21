let notes = ['Itachi Uchia', 'Sasuka Uchia'];

let  trashNotes = [];


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

function getTrashNoteTemplate(indexTrashNote){
    return `<p>+ ${trashNotes[indexTrashNote]}<button onclick="deleteNote(${indexTrashNote})">X</button></p>`;
}


// Place Notes
function getNoteTemplate(indexNote){
    return `<p>+ ${notes[indexNote]}<button onclick="deleteNote(${indexNote})">X</button></p>`;
}

function addNote(note){
    let noteInputRef = document.getElementById('note_input');
    let noteInput = noteInputRef.value;

    notes.push(noteInput);

    renderNotes();

    noteInputRef.value = "";
}


// Delete Notes
function deleteNote(indexNote){
    let trashNote = notes.splice(indexNote, 1);
    trashNotes.push(trashNote);
    renderNotes();
    renderTrashNotes();
}
