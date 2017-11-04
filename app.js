function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();

    let title = newToDoText.value;
    let newLi = document.createElement('li');
    let checkbox = document.createElement('input');
    checkbox.type = "checkbox";

    //create list item
    newLi.appendChild(checkbox);
    newLi.textContent = title;
    toDoList.appendChild(newLi);
    addRemoveButton(newLi, toDoList)
    //clear text field
    newToDoText.value = '';
  });
}
function addRemoveButton (row, toDoList) {
  let delButton = document.createElement('button');
  let buttonText = document.createTextNode('Delete');
  delButton.type = "button";
  delButton.appendChild(buttonText);
  row.appendChild(delButton);

  row.addEventListener('click', () => {
    event.preventDefault();
    alert(row);
    toDoList.removeChild(row);
  });
}

window.onload = function() {
  onReady();
}
