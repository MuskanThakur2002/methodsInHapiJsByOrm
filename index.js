'use strict';

const Knex = require('knex');

const knexfile = require('./knexfile');

const { Model } = require('objection');


function setup_db(){
  const knex = Knex(knexfile.development);
  Model.knex(knex)
}

module.exports=setup_db;