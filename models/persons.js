'use strict';

const { Model } = require('objection');

class department extends Model {
  static get tableName() {
    return 'department';
  }
}

class bank extends Model {
  static get tableName() {
    return 'bank';
  }
}
class users extends Model {
  static get tableName() {
    return 'users';
  }
    static get relationMappings() {
      return {
        bank: {
          relation: Model.HasManyRelation,
          modelClass: bank,
          join: {
            from: 'users.id',
            to: 'bank.id'
          }
        },
  
        Department: {
          relation: Model.ManyToManyRelation,
          modelClass: department,
          join: {
            from: 'users.id',
            to: 'department.id'
          }
        },
      }
    }
  }
  
    

module.exports = {
  users,department,bank
};



