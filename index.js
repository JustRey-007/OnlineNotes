let reloadWeb = document.getElementById('img_on_not');

reloadWeb.addEventListener('click', function() {
    location.reload(true);
});

let textarea = document.getElementById('note-input');
let buttonSave = document.getElementById('save__button');
let notesList = document.getElementById('notes-list');

function saveNote() {
    let noteText = textarea.value;

    let listItem = document.createElement('li');
    
    let link = document.createElement('a');
    link.href = "#";
    link.textContent = "Заметка";

    listItem.textContent = noteText;
    
    listItem.appendChild(link);

    notesList.appendChild(listItem);

    textarea.value = '';
}

buttonSave.addEventListener('click', saveNote);
