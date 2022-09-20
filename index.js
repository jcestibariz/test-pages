const {mkdirSync, writeFileSync} = require('fs');

mkdirSync('.out');
writeFileSync('.out/index.html', '<!doctype html>Hello World!');
