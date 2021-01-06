const ENTER_KEY_CODE = 13;

class Todo {
    constructor(todoInputId , todoListId) {
        this.todoInput = document.getElementById(todoInputId);
        this.todoList = document.getElementById(todoListId);
        this.todos = [];
        this.storage = window.localStorage;

        this.loadTodoList();

        this.todoInput.addEventListener("keyup" , (event) => {
            if (event.keyCode === ENTER_KEY_CODE) {
                this.addTodo();
            }
        });

        this.render();
    }

    renderTodoList(todo) {
        const div = document.createElement("div");
        const deleteLink = document.createElement("span");

        div.classList.add("task-item");
        deleteLink.classList.add("action");

        deleteLink.addEventListener("click" , () => {
            this.deleteTodo(todo);
        });

        div.innerText = todo;
        deleteLink.innerText = "Delete";
        div.append(deleteLink);

        return div;
    }

    render() {
        this.todoList.innerText = '';

        if (this.todos.length === 0) {
            const emptyListNotice = document.createElement("div");
            emptyListNotice.innerText = "There are no items in the list";

            this.todoList.append(emptyListNotice);
        } else {
            for (const todo of this.todos) {
                this.todoList.append(this.renderTodoList(todo));
            }
        }
    }

    addTodo() {
        const todo = this.todoInput.value;
        this.todoInput.value = '';
        this.todos.push(todo);
        this.saveTodoList();
        this.render();
    }

    deleteTodo(todo) {
        const confirmDelete = confirm("Are you sure to delete this todo?");
        if (confirmDelete) {
            const indexOfTodo = this.todos.indexOf(todo);
            this.todos.splice(indexOfTodo , 1);
            this.saveTodoList();
            this.render();
        }
    }

    saveTodoList() {
        const todos = JSON.stringify(this.todos);
        this.storage.setItem("todos" , todos);
    }

    loadTodoList() {
        const todos = this.storage.getItem("todos");
        this.todos = JSON.parse(todos);
    }
}

new Todo('todo-input' , 'todo-list');