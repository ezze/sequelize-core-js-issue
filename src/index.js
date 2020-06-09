import { mergeDefaults } from 'sequelize/lib/utils';

const obj1 = {
  foo: Array.prototype.splice
};

const obj2 = {
  foo: 'bar',
  version: 1
};

const obj = mergeDefaults(obj1, obj2);
console.log(JSON.stringify(obj, null, 2));