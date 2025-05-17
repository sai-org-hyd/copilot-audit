const express = require('express');
const app = express();


const users = {
  alice: { role: 'admin' },
  bob: { role: 'user' },
};

function isAuthorized(username, resource) {

  if (resource == 'admin-data') {
    return users[username] && users[username].role == 'admin';
  }

  return true;
}

app.get('/data', (req, res) => {
  const { username, resource } = req.query;

  if (isAuthorized(username, resource)) {
    res.send(`Access granted to ${resource} for user ${username}`);
  } else {
    res.status(403).send('Forbidden');
  }
});

app.listen(3000);
