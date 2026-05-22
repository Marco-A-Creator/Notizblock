function renderNotes() {

      const activeContainer = document.getElementById("activeNotes");
      const archivedContainer = document.getElementById("archivedNotes");
      const deletedContainer = document.getElementById("deletedNotes");

      activeContainer.innerHTML = "";
      archivedContainer.innerHTML = "";
      deletedContainer.innerHTML = "";

      if(notes.length === 0){
        activeContainer.innerHTML = "<p class='empty'>Keine aktiven Notizen</p>";
      }

      if(archived.length === 0){
        archivedContainer.innerHTML = "<p class='empty'>Keine archivierten Notizen</p>";
      }

      if(deleted.length === 0){
        deletedContainer.innerHTML = "<p class='empty'>Keine gelöschten Notizen</p>";
      }

      notes.forEach((note,index)=>{
        activeContainer.innerHTML += `
          <div class="note">
            <p>${note}</p>

            <div class="note-buttons">
              <button class="archive-btn" onclick="archiveNote(${index})">
                Archivieren
              </button>

              <button class="delete-btn" onclick="deleteNote(${index}, 'active')">
                Löschen
              </button>
            </div>
          </div>
        `;
      });

      archived.forEach((note,index)=>{
        archivedContainer.innerHTML += `
          <div class="note">
            <p>${note}</p>

            <div class="note-buttons">
              <button class="delete-btn" onclick="deleteNote(${index}, 'archived')">
                Löschen
              </button>
            </div>
          </div>
        `;
      });

      deleted.forEach((note,index)=>{
        deletedContainer.innerHTML += `
          <div class="note">
            <p>${note}</p>

            <div class="note-buttons">
              <button class="restore-btn" onclick="restoreNote(${index})">
                Wiederherstellen
              </button>

              <button class="permanent-btn" onclick="permanentlyDelete(${index})">
                Endgültig löschen
              </button>
            </div>
          </div>
        `;
      });

    }