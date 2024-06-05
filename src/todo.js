function todo(title, description = null, dewdate, priorityInput) {
  let priority = priorityInput;
  function changePriority(newPriority) {
    priority = newPriority;
  }
  let isComplete = false;
  function markComplete() {
    isComplete = true;
  }
  return {
    changePriority,
    title,
    description,
    dewdate,
    priority,
    isComplete,
    markComplete,
  };
}
export { todo };
