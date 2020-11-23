const db = require('../../data/dbConfig')

const getResources= () => {
    return db('resources')
}

const getResourcesById = (id) => {
    return db("resources")
        .where({ id })
        .first();
}

const insertResources = (resource) => {
    return db('resources').insert(resource).then((ids) => {
        return getResourcesById(ids[0]);
    });
}

const insertResourcesToProjects = (resource) => {
    return db('resources as r')
        .innerJoin("projects as t", "t.id", "r.project_id")
        .insert(resource).then((ids) => {
            return getResourcesById(ids[0]);
        });
}

module.exports = {
    getResources,
    getResourcesById,
    insertResources,
    insertResourcesToProjects
};