const matches = (obj, source) =>
  Object.keys(source).every(key => obj.hasOwnProperty(key) && obj[key] === source[key]);
document.writeln(" { age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true } : Result :: "+matches({ age: 25, hair: 'long', beard: true }, { hair: 'long', beard: true })+"\n"); // true
document.writeln("{ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true } : Result :: "+matches({ hair: 'long', beard: true }, { age: 25, hair: 'long', beard: true })+"\n"); // false
document.writeln("{ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true } : Result :: "+matches({ hair: 'long', beard: true }, { age: 26, hair: 'long', beard: true })+"\n"); // false