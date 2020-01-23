1. Create google-api-key.json to setup your Google API key, and need to have authorization to googlesheets api
2. run `nodejs sheets_to_flat_json.js > data/dataopener-flat.json` to generate flat json based on current googlesheets content
3. run `nodejs mergeDispatched.js > data/dataopen-dispatchedCases.json` to make another json with better structured
4. run `nodejs countByAuthority.js` to count by authority
