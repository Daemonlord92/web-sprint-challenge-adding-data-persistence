const db = require('../../data/dbConfig');

const getProjects = () => {
    return db('projects')
}

const getProjectsById = (id) => {
    return db('projects as p')
        .select(["p.*"])
        .where("p.id", id)
        .first()
}

const getProjectResources = (id) => {
    return db("project_resource as pr")
        .innerJoin("projects as p", "p.id", "pr.project_id")
        .innerJoin("resources as r", "r.id", "pr.resource_id")
        .where("p.id", id)
        .select(["p.id", "p.project_name", "r.resource_name"])
}

const getResourcesFromProjects = (id) => {
    return db("project_resource as pr")
        .innerJoin("projects as p", "p.id", "pr.project_id")
        .innerJoin("resources as r", "r.id", "pr.resource_id")
        .where("r.id", id)
        .select(["r.id", "r.resource_name", "p.project_name"])
}

const insertProjects = (project) => {
    return db("projects").insert(project).then((ids) => {
        return getProjectsById(ids[0])
    })
}

module.exports = {
    getProjects,
    getProjectResources,
    getProjectsById,
    insertProjects,
    getResourcesFromProjects,
};