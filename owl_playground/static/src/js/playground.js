import {Component,xml} from "@odoo/owl";
import { registry} from '@web/core/registry';

class Playground extends Component{
    static template = xml`<h1 class="mx-3">Hi Playground</h1>`

}

registry.category("actions").add("view_playground", Playground);
