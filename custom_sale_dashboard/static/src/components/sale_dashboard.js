/** @odoo-module **/

import { registry } from "@web/core/registry";
import { loadJS } from "@web/core/assets";
import { Component,onWillStart,useRef,onMounted } from  "@odoo/owl";
import { KpiCard } from "./Kpi_card/kpi_card"

class SaleDashboardAction extends Component {
    static template = "custom_sale_dashboard.SaleDashboardAction";
    setup(){
        onWillStart(async()=>{
        await loadJS("https://cdnjs.cloudflare.com/ajax/libs/Chart.js/4.4.1/chart.umd.min.js")
        })
    }
}

SaleDashboardAction.components = {KpiCard}
registry.category("actions").add("custom_sale_dashboard.sale_dashboard", SaleDashboardAction);