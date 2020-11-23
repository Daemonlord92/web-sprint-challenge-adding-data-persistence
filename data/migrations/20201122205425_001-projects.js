
exports.up = function(knex) {
  return knex.schema
      .createTable('projects', function (projects) {
          projects.increments();
          projects.string("project_name", 128).notNullable().unique()
          projects.string("project_desc", 255)
          projects.boolean("completed").notNullable().defaultTo(false)
      })

        .createTable("resources", (resources) => {
            resources.increments()
            resources.string("resource_name", 128).notNullable().unique()
            resources.string("resource_desc", 255)
        })

      .createTable("tasks", (tasks) => {
          tasks.increments()
          tasks.string("tasks_desc").notNullable().unique()
          tasks.string("tasks_notes", 128)
          tasks.integer("project_id")
              .references("id")
              .inTable("projects")
              .onDelete("CASCADE")
              .onUpdate("CASCADE")
      })

      .createTable("project_resource", (pR) => {
          pR.integer("project_id")
              .references("id")
              .inTable("projects")
              .onDelete("CASCADE")
              .onUpdate("CASCADE")
              .notNullable()
          pR.integer("resource_id")
              .references("id")
              .inTable("resources")
              .onDelete("CASCADE")
              .onUpdate("CASCADE")
              .notNullable()
          pR.primary(['project_id', 'resource_id'])
      })

};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists("projects")
      .dropTableIfExists("tasks")
      .dropTableIfExists("resources")
      .dropTableIfExists("project_resource")
};
