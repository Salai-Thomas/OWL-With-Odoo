# -*- coding: utf-8 -*-
{
    'name': "OWL Playground",

    'summary': "For Practice And Learning",

    'description': """For Practice And Learning""",
    'author': "Salai Thomas",
    'website': 'https://github.com/Salai-Thomas',
    'category': 'Uncategorized',
    'version': '18.0',
    'depends': ['base','web'],
    'data': [
        'views/menu.xml',
    ],
    'assets': {
        'web.assets_backend': [
            'owl_playground/static/src/js/playground.js',
            'owl_playground/static/src/xml/playground.xml',
        ],
    },
    'images': ['static/description/icon.png'],
    'license': 'LGPL-3',
    'installable': True,
    'application': False,
    'auto_install': False,
}

