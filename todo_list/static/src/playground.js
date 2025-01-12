/** @odoo-module **/

import {Component} from "@odoo/owl";
import {TodoList} from "@todo_list/todolist/todolist"

export class Playground extends Component {
    static template = "todo_list.playground";
    static components = {TodoList};

}
