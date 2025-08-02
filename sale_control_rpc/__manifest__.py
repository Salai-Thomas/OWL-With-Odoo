# -*- coding: utf-8 -*-
{
    'name': "Sale Control RPC",

    'summary': "For Practice And Learning",

    'description': """For Practice And Learning""",
    'author': "Salai Thomas",
    'category': 'Uncategorized',
    'version': '18.0',
    'depends': ['base','web','sale_management'],
    'data': [
        'views/menu.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'sale_control_rpc/static/src/js/saleControl.js',
            'sale_control_rpc/static/src/xml/saleControl.xml',
        ],
    },
}

