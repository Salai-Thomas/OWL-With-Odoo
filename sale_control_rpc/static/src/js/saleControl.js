import {Component} from "@odoo/owl";
import { registry} from '@web/core/registry';

export class SaleControl extends Component{
    static template = "saleControl"
    setup(){
        this.rpc = this.env.services.rpc;
        console.log(this.rpc);
        console.log(this.env);
        console.log(this.env.services)

    }
}

registry.category("actions").add("sale_control_rpc", SaleControl);
