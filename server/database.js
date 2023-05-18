const knex = require('knex');
const connection = require('./connection.json');
const database = knex({
    client: 'mysql',
    connection
});

module.exports=database