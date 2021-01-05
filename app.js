const ENTER_KEY_CODE = 13;

class Todo {
    constructor(todoInputId , todoListId) {
        this.todoInput = document.getElementById(todoInputId);
        this.todoList = document.getElementById(todoListId);
        this.todos = [];

        if (this.todoList.innerText === '') {
            const emptyListNotice = document.createElement("div");
            emptyListNotice.innerText = "There are no items in the list";

            this.todoList.append(emptyListNotice);
        }

        this.todoInput.addEventListener("keyup" , (event) => {
            if (event.keyCode === ENTER_KEY_CODE) {
                this.addTodo();
            }
        });
    }

    renderTodoList(todo) {
        const div = document.createElement("div");
        const span = document.createElement("span");

        div.classList.add("task-item");
        span.classList.add("action");

        div.innerText = todo;
        span.innerText = "Delete";
        div.append(span);

        return div;
    }

    render() {
        this.todoList.innerText = '';
        for (const todo of this.todos) {
            this.todoList.append(this.renderTodoList(todo));
        }
    }

    addTodo() {
        const todo = this.todoInput.value;
        this.todoInput.value = '';
        this.todos.push(todo);
        this.render();
    }
}

new Todo('todo-input' , 'todo-list');