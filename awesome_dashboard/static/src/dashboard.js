/** @odoo-module **/

import { Component } from "@odoo/owl";
import { Layout } from "@web/search/layout";
import { registry } from "@web/core/registry";
import { useService } from "@web/core/utils/hooks";
import { _t } from "@web/core/l10n/translation";



class AwesomeDashboard extends Component {
    static template = "awesome_dashboard.AwesomeDashboard";

    static components = {Layout}

    setup() {
      this.action = useService("action");
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
