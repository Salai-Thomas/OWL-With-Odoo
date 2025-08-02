import {Component} from "@odoo/owl";
import { registry} from '@web/core/registry';

class Playground extends Component{
    static template = "OWLPlayground"

}

registry.category("actions").add("view_playground", Playground);
