/** @odoo-module **/

import { Component, useState } from "@odoo/owl";
import {Todolist} from "./todolist/todolist";

export class Playground extends Component {
    static template = "awesome_owl.playground";


    static components = {TodoList};

}
