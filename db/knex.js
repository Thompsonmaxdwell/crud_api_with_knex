const knex = require('knex');

const knexfile = require('../knexfile');
const evironment =  process.env.NODE_ENV || "development";

const db = knex(knexfile[evironment])

module.exports = db;