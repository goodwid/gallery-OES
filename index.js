#!/usr/bin/env node

const app = require('./server');
const port = process.env.PORT || process.argv[2] || 9000;

app.listen(port, err =>{
  if (err) return console.error(err);

  console.log(`Server accepting requests at: http://localhost:${port}/`);
});
