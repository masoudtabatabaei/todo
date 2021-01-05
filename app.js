class Todo {

    constructor(todoInputId , todoListId) {
        this.todoInput = document.getElementById(todoListId);
        this.todoList = document.getElementById(todoListId);
        this.todos = ["Test Test Test"];

        this.render();
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
        for (const todo of this.todos) {
            this.todoList.append(this.renderTodoList(todo));
        }
    }
}

new Todo('todo-input' , 'todo-list');