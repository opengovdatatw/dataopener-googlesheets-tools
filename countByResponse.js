let data = require('./data/dataopener-flat.json');

let reducer = (data) => data.reduce((a,c)=>{
  let response = a[c.response] || 0;
  a[c.response] = response + 1;
  return a;
}, {});

let count = reducer(data);
let byAuthority = [...(new Set(data.map(e=>e.authority))).values()].reduce((a,c) => { a[c] = reducer(data.filter(e=>e.authority===c)); return a;}, {});
byAuthority["data.gov.tw"]=count;
console.log(JSON.stringify(byAuthority));
