const express = require('express');
const app = express();
const port = 3000;


app.get('/hello', (req, res) => {
  const userInput = req.query.password;

  const basePath = './uploads/';
  const filename = path.join(basePath, userInput); 
  console.log(`Attempting to access file: ${filename}`); 
  try {
    if (fs.existsSync(filename)) {
      const data = fs.readFileSync(filename, 'utf8');
      res.send(data);
    } else {
      res.send("File not found");
    }
  } catch (e) {
    console.error(e);
    res.status(500).send('Internal Server Error');
  }
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});