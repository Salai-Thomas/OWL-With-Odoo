/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import {DashboardItem} from "@awesome_dashboard/dashboardItem";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { onWillStart,useState } from "@odoo/owl";
import { _t } from "@web/core/l10n/translation";
import { memoize } from "@web/core/utils/functions";




class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";

    static components = {Layout,DashboardItem}

    setup() {
      this.action = useService("action");
      this.rpc = useService("rpc");

       this.statistics = useState({
         nb_new_orders: 0,
         total_amount: 0,
         average_quantity: 0,
         nb_cancelled_orders: 0,
         average_time: 0,
    });

    this.loadStatistics = memoize(async () => {
    const result = await this.rpc("/awesome_dashboard/statistics");
    return result;
});
      onWillStart(async () => {
         const result = await this.loadStatistics();
         Object.assign(this.statistics,result);
      });
    }

    openCustomer() {
      this.action.doAction("base.action_partner_form");
}

    async openCRM(activity) {
        this.action.doAction({
            type: 'ir.actions.act_window',
            name: _t('CRM'),
            target: 'current',
            res_id: activity.res_id,
            res_model: 'crm.lead',
            views: [[false, 'form','list']],
        });
    }

}



registry.category("actions").add("awesome_dashboard.dashboard", AwesomeDashboard);
