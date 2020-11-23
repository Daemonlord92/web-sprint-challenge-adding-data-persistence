const db = require("../../data/dbConfig");

const getTask = () => {
    return db('tasks as t')
        .join("projects as p", "p.id", "t.project_id")
        .select("p.id as project id", "t.tasks_desc", "t.tasks_note as task notes", "p.project_name as project name", "p.project_desc as project desc")
}

const findById = (id) => {
    return db("tasks")
        .where({id})
        .first()
}

const addTasks = (data) => {
    return db("tasks")
        .insert(data)
        .then(id => {
            return findById(id[0])
        })
}

module.exports = {
    getTask,
    findById,
    addTasks
}