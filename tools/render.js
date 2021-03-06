import task from './lib/task';
import fs from 'fs';

import ghpages from 'gh-pages';
import path from 'path';

var Stats = require('../dist/stats.json');
const style = Stats.style;
const bundle = Stats.main;

const Html = `<!doctype html>
<html xmlns:og="http://ogp.me/ns#">
  <head>
    <base href="/">
    <meta charset="utf-8">
    <meta name="google-site-verification" content="k51SnVrumhhBgtEzqaKZMzInljqZkZXoCzGeTIG6W10" />
    <meta name="viewport" content="width=device-width">
    <title>100 Days of pattern | Jasmine Anteunis</title>
    <meta property="og:title" content="100daysofpattern" />
    <meta property="og:type" content="100 Days of pattern" />
    <meta property="og:url" content="http://100daysofpattern.com" />
    <meta property="og:image" content=""/>
    <meta name="description" content="100 days of pattern is a personal project inspired by many other '100daysproject', everyday I designed and push one pattern">
    <meta name="robots" content="index, follow">
    <link rel="canonical" href="http://100daysofpattern.com"/>
    <link href="${style}" rel="stylesheet"/>
  </head>
  <body>
    <div id="root"></div>
    <script src="${bundle}"></script>
    <script>
      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');

    ga('create', 'UA-72133578-1', 'auto');
      ga('send', 'pageview');

      </script>
    <link href='https://fonts.googleapis.com/css?family=Anaheim' rel='stylesheet' type='text/css'>
    <link href='https://fonts.googleapis.com/css?family=Abril+Fatface' rel='stylesheet' type='text/css'>
  </body>
</html>
`;

export default task(async function render() {
  var file = './dist/index.html';
  fs.writeFile('./dist/CNAME', '100daysofpattern.com', { flags: 'wx' }, function () {
    fs.writeFile(file, Html, { flags: 'wx' }, function (err) {
      console.log("It's saved!");
      ghpages.publish(path.join(__dirname, '../dist'), function(err) {console.log(err)});
    });
  });
});

