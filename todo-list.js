document.addEventListener('DOMContentLoaded', () => {
    const addTaskForm = document.querySelector('.add-task-form');
    const taskInput = document.querySelector('.task-input');
    const taskList = document.querySelector('.task-list');
  
    let tasks = [];
  
    function addTask(task) {
      const taskItem = document.createElement('li');
      taskItem.classList.add('task-item');
      taskItem.innerHTML = `<span>${task}</span>
                            <button class="delete-btn">Delete</button>`;
      taskList.appendChild(taskItem);
      tasks.push(taskItem);
    }
  
    function deleteTask(taskItem) {
      taskItem.remove();
      tasks = tasks.filter(item => item !== taskItem);
    }
  
    addTaskForm.addEventListener('submit', e => {
      e.preventDefault();
      const newTask = taskInput.value.trim();
      if (newTask !== '') {
        addTask(newTask);
        taskInput.value = '';
      }
    });
  
    taskList.addEventListener('click', e => {
      if (e.target.classList.contains('delete-btn')) {
        const taskItem = e.target.closest('.task-item');
        deleteTask(taskItem);
      }
    });
  });