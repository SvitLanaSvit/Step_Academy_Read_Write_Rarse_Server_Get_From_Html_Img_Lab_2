const express = require('express');
const app = express();
app.use(express.static(__dirname + '/public'));
console.log(__dirname);
app.listen(3000, ()=>{
    console.log('Server started on port 3000');
})