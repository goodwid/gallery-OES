#!/usr/bin/env node

const fs = require('fs');
const jf = require('json-format');

const inputDir = process.argv[2];

const files = fs.readdirSync(inputDir, {encoding: 'utf-8'});
const out = files.map(file => {
  const [name, suffix] = file.split('.');
  return {name: name, filename: file};
});

console.log(jf(out));
