/** @odoo-module **/

import {Component,useState} from "@odoo/owl"
import {TodoItem} from "@todo_list/todoitem/todoitem"


export class TodoList extends Component{
    static template = 'todolist.TodoList'

    static components = {TodoItem}

    setup(){
    this.todos = useState(
    [
    { id: 1, description: "buy milk", isCompleted: true },
    { id: 2, description: "buy coffee", isCompleted: false },
    { id: 3, description: "buy sugar", isCompleted: false },
    ]
    );

    }


}