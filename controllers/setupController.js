var Todos = require('../models/todoModel');

module.exports = function(app){
    app.get('/api/setupTodos',function(req,res){
        //seed database
        var starterTodos = [
            {
                "username": "Lana",
                "todo": "veniam tempor",
                "isDone": false,
                "hasAttachment": true
            },
            {
                "username": "Harrison",
                "todo": "enim qui",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "Christian",
                "todo": "proident officia",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "Willis",
                "todo": "laborum excepteur",
                "isDone": false,
                "hasAttachment": false
            },
            {
                "username": "Tonia",
                "todo": "laboris aute",
                "isDone": true,
                "hasAttachment": false
            },
            {
                "username": "Deanne",
                "todo": "cillum fugiat",
                "isDone": false,
                "hasAttachment": false
            }
        ];

        Todos.create(starterTodos, function(err,results){
            res.send(results);
        });
        
    });
}