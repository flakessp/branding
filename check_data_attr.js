'use strict';

let content = document.getElementById('content');
let linkArray = content.querySelectorAll('a');

[].forEach.call(linkArray, function(el){
  fs.readFile(__dirname + 'index.html', 'utf8', function(err, html) {
    console.log(html);
  });
    console.log(el.dataset.eventClick);
});