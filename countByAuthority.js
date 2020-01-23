let data = require('./data/dataopener-flat.json');

let count = data.reduce((a,c)=>{
  let authority = a[c.authority] || 0;
  a[c.authority] = authority + 1;
  return a;
}, {});

console.log(JSON.stringify(count));
