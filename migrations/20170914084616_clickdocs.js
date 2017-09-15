exports.up = function(knex, Promise) {
  return knex.schema.createTable("clickdocs", function(table) {
    table.increments();
    table.integer("totalClicks").notNullable();
    table.timestamps();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable("clickdocs");
};
