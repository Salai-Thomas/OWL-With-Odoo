/** @odoo-module **/

import { registry } from "@web/core/registry";
import { Component } from  "@odoo/owl";
import { KpiCard } from "./Kpi_card/kpi_card"

class SaleDashboardAction extends Component {
    static template = "custom_sale_dashboard.SaleDashboardAction";
}

SaleDashboardAction.components = {KpiCard}
registry.category("actions").add("custom_sale_dashboard.sale_dashboard", SaleDashboardAction);