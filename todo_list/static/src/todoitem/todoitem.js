/** @odoo-module **/
import {Component,useState} from "@odoo/owl"


export class TodoItem extends Component{
    static template = "todolist.TodoItem"

    static props = ['todo','handleToggle','OnDelete']

    ToggleComplete(){
        this.props.handleToggle(this.props.todo)
    }

    DeleteItem(){
        this.props.OnDelete(this.props.todo.id)
    }

}