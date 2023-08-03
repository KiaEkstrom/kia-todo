export class TodoComponent {
    todo = '';

    todos = [
        { completed: false, text: 'Harjoittele Aureliaa' },
        { completed: false, text: 'Selvitä harjoitteluun liittyvät asiat' },
        { completed: true, text: "Go to store" }
    ];

    editList() {
        return this.todo.todo-compose
    }


    newTodo(event) {
        if (event.which === 13) {
            this.todos.unshift({ completed: false, text: this.todo });
            this.todo = '';
        }

        return true;
    }

    deleteTodo = (index) => {
        this.todos.splice(index, 1);
    }
}