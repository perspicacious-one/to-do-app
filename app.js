function onReady() {
  //const newToDoText = document.getElementById('newToDoText');

  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI();
  }

  function renderTheUI() {
    const toDoList = document.getElementById('toDoList');

    toDoList.textContent = '';

    toDos.forEach(function(toDo) {
      const newLi = document.createElement('li');
      const checkbox = document.createElement('input');
      checkbox.type = "checkbox";

      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
    });
  }

  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    createNewToDo();
  //   let title = newToDoText.value;
  //   let newLi = document.createElement('li');
  //   let checkbox = document.createElement('input');
  //   checkbox.type = "checkbox";
  //
  //   //create list item
  //   newLi.appendChild(checkbox);
  //   newLi.textContent = title;
  //   toDoList.appendChild(newLi);
  //   addRemoveButton(newLi, toDoList)
  //   //clear text field
  //   newToDoText.value = '';
  });
  renderTheUI();
}


// function addRemoveButton (row, toDoList) {
//   let delButton = document.createElement('button');
//   let buttonText = document.createTextNode('Delete');
//   delButton.type = "button";
//   delButton.appendChild(buttonText);
//   row.appendChild(delButton);
//
//   row.addEventListener('click', () => {
//     event.preventDefault();
//     alert(row);
//     toDoList.removeChild(row);
//   });
// }

window.onload = function() {
  onReady();
}
