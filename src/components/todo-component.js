export class TodoComponent {
    todo = '';

    todos = [
        { completed: false, text: 'Harjoittele Aureliaa' },
        { completed: false, text: 'Selvitä harjoitteluun liittyvät asiat' }
    ];

    newTodo(event) {
        if (event.which === 13) {
            this.todos.unshift({ completed: false, text: this.todo });
            this.todo = '';
        }

        return true;
    }

    deleteTodo(index) {
        this.todos.splice(index, 1);
    }
}