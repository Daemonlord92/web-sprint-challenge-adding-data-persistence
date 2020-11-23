const express = require('express');

const ProjectRoute = require('./project/router');
const ResourceRoute = require('./resource/router');
const TaskRoute = require('./task/router');

const server = express();

server.use(express.json());

server.get('/', (req, res) => {
    res.status(200).json({mes: "HI, from the backend"});
});

server.use('/api/projects', ProjectRoute);
server.use('/api/resources', ResourceRoute);
server.use('/api/tasks', TaskRoute);

module.exports = server;
