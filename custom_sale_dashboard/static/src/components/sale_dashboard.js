/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component } from  "@odoo/owl";

class SaleDashboardAction extends Component {
    static template = "custom_sale_dashboard.SaleDashboardAction";
}

// remember the tag name we put in the first step
registry.category("actions").add("custom_sale_dashboard.sale_dashboard", SaleDashboardAction);