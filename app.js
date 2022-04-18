const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
// const filterOption = document.querySelector('.filter-todo');

//EVENTS
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
// filterOption.addEventListener('click', filterTodo);



//FUNCTIONS
function addTodo(event){
    event.preventDefault();
    //ToDo DIV
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //ADD TODO TO LOCALSTORAGE
    saveLocalTodos(todoInput.value);
    //Check MARK BUTTON
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //Check delete BUTTON
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
    deleteButton.classList.add("delete-btn");
    todoDiv.appendChild(deleteButton);
    //APPEND TO LIST
    todoList.appendChild(todoDiv);
    //CLEAR TODO INPUT VALUE
    todoInput.value = '';
}

function deleteCheck(e){
    const item = e.target;
    //DELETE TODO
    if(item.classList[0] === 'delete-btn'){
        const todo = item.parentElement;
        //ANIMATION
        todo.classList.add('fall');
        todo.addEventListener('transitionEnd', function(){
            todo.remove();
        })
    }

    //CHECK MARK
    if(item.classList[0]==='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function saveLocalTodos(todo){
    let todos;
    if (localStorage.getItem('todos')===null) {
        todos = [];
    }else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos', JSON.stringify(todos));
}


// function filterTodo(e){
//     const todos = todoList.childNodes;
//     todos.forEach(function(todo){
//         if(e.target.value === 'all'){
//             todo.style.display = 'flex'
//         }
//         if(e.target.value === 'completed'){
//             if(todo.classList.contains('completed')){
//                 todo.style.display = 'flex'
//             }else{
//                 todo.style.display = 'none';
//             }
//         }
//     });
// }