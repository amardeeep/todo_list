function todo(title, description = null, dewdate, priorityInput) {
  //function to toggle betWeen isComplete is true and false
  let isComplete = false;
  function markComplete() {
    if (!isComplete) {
      isComplete = true;
    } else if (isComplete) {
      isComplete = false;
    }
  }

  let todoObject = {
    title,
    description,
    dewdate,
    priorityInput,
    isComplete,
  };

  //function to edit details of a todo
  function editToDo(todoObject) {
    function changeTitle(todoObject, change) {
      todoObject.title = change;
    }
    function changeDesciption(todoObject, change) {
      todoObject.description = change;
    }
    function changeDewDate(todoObject, change) {
      todoObject.dewdate = change;
    }
    function changePriority(todoObject, change) {
      todoObject.priority = change;
    }
    return {
      todoObject,
      changeDesciption,
      changeTitle,
      changePriority,
      changeDewDate,
    };
  }
  return {
    todoObject,
    editToDo,
    markComplete,
  };
}
export { todo };
