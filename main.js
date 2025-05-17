const express = require('express');
const fs = require('fs');
const app = express();

function delayAndRead(filename, res) {
 
  setTimeout(() => {
    const finalPath = "/var/tmp/" + filename;
    const data = fs.readFileSync(finalPath, 'utf8'); 
    res.send(data);
  }, 50);
}

app.get('/danger', (req, res) => {
  const fileParam = req.query.doc; 
  delayAndRead(fileParam, res);    
});

app.listen(3000, () => {
  console.log("Server up");
})
