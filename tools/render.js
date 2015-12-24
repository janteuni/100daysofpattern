import React from 'react';
import App from '../components/App';

import task from './lib/task';
import fs from 'fs';

import ghpages from 'gh-pages';
import path from 'path';

var Stats = require('../dist/stats.json');
const rootHtml = React.renderToString(<App />)
const style = Stats.style
const bundle = Stats.main

const Html = `<!doctype html>
<html xmlns:og="http://ogp.me/ns#">
  <head>
    <base href="/">
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width">
    <title>100 DAYS OF PATTERN</title>
    <meta property="og:title" content="100daysofpattern" />
    <meta property="og:type" content="100 DAYS OF PATTERN" />
    <meta property="og:url" content="http://100daysofpattern.com" />
    <meta property="og:image" content="" />
    <meta name="description" content="100daysofpattern">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="http://100daysofpattern.com"/>
    <link href="100daysofpattern/${style}" rel="stylesheet"/>
  </head>
  <body>
    <div id="root">${rootHtml}</div>
    <script async src="100daysofpattern/${bundle}"></script>
  </body>
</html>
`;

export default task(async function render() {
  var file = './dist/index.html';
  fs.writeFile(file, Html, { flags: 'wx' }, function (err) {
    console.log("It's saved!");
    ghpages.publish('../dist', function(err) {console.log(err)});
  });
});

