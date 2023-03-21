const FxJs = require("fxjs");
const S = require("fxjs/Strict");
const L = require("fxjs/Lazy");
const C = require("fxjs/Concurrency");

const users = [
  {id: 1, name: "a", age: 22}, 
  {id: 2, name: "b", age: 25}, 
  {id: 3, name: "c", age: 31}, 
  {id: 4, name: "d", age: 27}
];

const f = (info, user) => {
  const group = user.age - user.age % 10;
  info.count[group] = (info.count[group] || 0) + 1;
  info.total[group] = (info.total[group] || 0) + user.age;
  return info;
};

const ret = S.reduce(f, {count: {}, total: {}}, users);
console.log(ret);