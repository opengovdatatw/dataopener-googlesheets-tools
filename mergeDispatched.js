let data = require('./data/dataopener-flat.json');

let merged = data.reduce((a,c)=>{
   if (c.caseId !== c.id) {
      console.error(c.caseId);
      let p = a.find(e=>e.id===c.caseId);
      console.error(p.id);
      let dispatchedCases = p.dispatchedCases || [];
      dispatchedCases.push(c);
      p.dispatchedCases = dispatchedCases;
   }
   return a;
}, data.filter(e=>e.id===e.caseId));

console.log(JSON.stringify(merged));
