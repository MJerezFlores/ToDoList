const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const path = require('path');


app.use(express.static('public'));


app.get('/api/tasks/:idDay',function(req, res) {
    object.forEach(function (element) {
        (req.params.idDay === element.name) ? res.send(element.tasks) : res.send("Error")
    })
});


//PROVISIONAL ENDPOINTS

app.get("/api/listTasks/", (req, res) => res.send(''));
app.delete("/api/task/:idTask", (req, res) => res.send(''));
app.post("/api/task/edit", (req, res) => res.send(''));
app.post("/api/task/add", (req, res) => res.send(''));
app.get("/api/search/:filter", (req, res) => res.send(''));


server.listen(3000);


object = [{
            "name": "Monday",
            "weekday": true,
            "tasks": [
                {
                    "task": "Sacar al perroto",
                    "done": false
                },
                {
                    "task": "Sacar al perro",
                    "done": true
                }
            ]
        },

        {
            "name": "Tuesday",
            "weekday": true,
            "tasks": [
                {
                    "task": "Sacar al gato",
                    "done": false
                },
                {
                    "task": "Sacar al perro",
                    "done": true
                }
            ]
        },

        {
            "name": "Wednesday",
            "weekday": true,
            "tasks": [
                {
                    "task": "Sacar al raton",
                    "done": false
                },
                {
                    "task": "Sacar al perro",
                    "done": true
                }
            ]
        },

        {
            "name": "Thrusday",
            "weekday": true,
            "tasks": [
                {
                    "task": "Sacar al mono",
                    "done": false
                },
                {
                    "task": "Sacar al perro",
                    "done": true
                }
            ]
        },

        {
            "name": "Friday",
            "weekday": true,
            "tasks": [
                {
                    "task": "Sacar al baifo",
                    "done": false
                },
                {
                    "task": "Sacar al perro",
                    "done": true
                }
            ]
        },

        {
            "name": "Saturday",
            "weekday": false,
            "tasks": [
                {
                    "task": "Sacar al charmander",
                    "done": false
                },
                {
                    "task": "Sacar al perro",
                    "done": true
                }
            ]
        },

        {
            "name": "Sunday",
            "weekday": false,
            "tasks": [
                {
                    "task": "Sacar al greymon",
                    "done": false
                },
                {
                    "task": "Sacar al perro",
                    "done": true
                }
            ]
        }];





