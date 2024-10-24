// index.js

const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve a single HTML page
app.get('/', (req, res) => {
  res.send(`
    <html>
      <head>
        <title>My Node App</title>
      </head>
      <body>
        <h1>Hello, welcome to my Node.js app!</h1>
        <p>This is a simple one-page app deployed using Heroku.</p>
      </body>
    </html>
  `);
});

// Start the server
app.listen(port, () => {
  console.log(`App running on http://localhost:${port}`);
});
