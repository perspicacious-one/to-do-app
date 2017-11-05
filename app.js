function onReady() {
  //const newToDoText = document.getElementById('newToDoText');
  let id = 0;
  const toDos = [];
  const addToDoForm = document.getElementById('addToDoForm');


  function createNewToDo() {
    const newToDoText = document.getElementById('newToDoText');
    if (!newToDoText.value) { return; }
    toDos.push({
      title: newToDoText.value,
      complete: false,
      id: getNewId()
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
      const button = document.createElement('button');
      const buttonText = document.createTextNode('Delete');
      newLi.setAttribute('id', "l" + toDo.id);

      checkbox.type = "checkbox";
      button.type = "button";
      newLi.textContent = toDo.title;

      toDoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(button);
      button.appendChild(buttonText);
      newLi.addEventListener('click', () => {
        event.preventDefault();
        toDos.splice(toDos.indexOf(toDo), 1);
        renderTheUI();
      });
    });
  }
  addToDoForm.addEventListener('submit', () => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI();

  function getNewId() {
    let isUnique = false;
    for (id = 0; id < toDos.length; id++){
      for (var i = 0; i < toDos.length; i++) {
        if (toDos[i].id == id) {
          isUnique = false;
          break;
        }
        else {
          isUnique = true;
        }
      }
      if (isUnique == true) {
        return id;
      }
    }
  }

}




window.onload = function() {
  onReady();
}
