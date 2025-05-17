const express = require('express');
const app = express();
const port = 3000;


app.get('/hello', (req, res) => {
  // Intentionally DO NOT sanitize the password.  This is the vulnerability.
  const password = req.query.password;
  //  const sanitizedPassword = password.replace(/</g, "&lt;").replace(/>/g, "&gt;");
  res.send(password); // BAD: Vulnerable to XSS
});


app.get('/', (req, res) => {
  
  res.send("hello world"); 
});

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});