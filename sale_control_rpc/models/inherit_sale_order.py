from odoo import models,api


class InheritSaleOrder(models.Model):
    _inherit = 'sale.order'

    @api.model
    def get_orders(self):
        return self.search([])