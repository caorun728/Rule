/*
https://gist.githubusercontent.com/NobyDa/9be418b93afc5e9c8a8f4d28ae403cf2/raw/TF_Download.js
 */
let app = JSON.parse($request.body);
app.storefrontId = '143380-1,29';
$done({body:JSON.stringify(app)});