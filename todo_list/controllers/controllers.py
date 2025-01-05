from odoo import http


class TodoList(http.Controller):
    @http.route('/todo_list', auth='user')
    def todolist(self):
        return "<h1>helloworld</h1>"
