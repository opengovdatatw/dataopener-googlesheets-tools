const {google} = require('googleapis');
const sheets = google.sheets({version: 'v4', auth: require('./google-api-key.json').key});

/*
[ 0:'8025',
  1:'交通通訊',
  2:'請提供 全國各警察機關測速執法超速或闖紅燈每日資料',
  3:'內政部',
  4:'https://data.gov.tw/node/8025',
  5:'8025',
  6:'C. 不對外開放',
  7:'',
  8:'',
  9:'',
  10:'無資料一尚未蒐集建置' ]
*/
const rowToObject = (row, rowId) => {
   let id = row[0] || `${row[3]}-${rowId}`;
   let source = row[0] ? '國發會 data.gov.tw' : row[3];
   let tags =row.slice(7).filter(s=>s.length);
   if (!row[5]) console.error('caseId not found, extract from id', id.split("_"));
   let caseId = id.split("_").shift();
   
   return {
     id,
     category: row[1],
     subject: row[2],
     authority: row[3],
     caseUrl: row[4],
     response: row[6],
     caseId,
     source,
     tags
   };
};
let spreadsheetId = '14ceZCncQGpndd8hmJwX8SrhVBFFUl41st0XFeWmSWXE';
sheets.spreadsheets.values.get({spreadsheetId, range:"A3:M3408"})
   .then(res=>res.data.values)
   .then(range=>range.reduce((data,row, rowId)=>{ data.push(rowToObject(row, rowId)); return data; }, [] ))
   .then(data=>console.log(JSON.stringify(data)));
