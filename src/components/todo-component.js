export class TodoComponent {
    todo = '';

    todos = [
        { completed: false, text: 'Harjoittele Aureliaa' },
        { completed: false, text: "Mene kauppaan" },
        { completed: true, text: 'Selvitä harjoitteluun liittyvät asiat' }
    ];

    editList() {
        var editbtn = document.getElementsByClassName("todo-compose");
        editbtn[0].style.display = "block";

        /*var checkbtn = document.getElementsByClassName("check");
        checkbtn[0].style.display = "block";

        var delbtn = document.getElementsByClassName("del");
        delbtn[0].style.display = "block";*/
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