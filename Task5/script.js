document.addEventListener('DOMContentLoaded', function() {
    const todoForm = document.getElementById('todoForm');
    const todoInput = document.getElementById('todoInput');
    const todoList = document.getElementById('todoList');

    todoForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        const newTaskText = todoInput.value.trim();
        if (newTaskText !== '') {
            const listItem = document.createElement('li');

            const taskSpan = document.createElement('span');
            taskSpan.textContent = newTaskText;
            taskSpan.addEventListener('click', function() {
                taskSpan.parentElement.classList.toggle('completed');
            });

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', function() {
                todoList.removeChild(listItem);
            });

            listItem.appendChild(taskSpan);
            listItem.appendChild(deleteButton);

            todoList.appendChild(listItem);
            todoInput.value = '';
        }
    });
});
