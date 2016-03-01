'use strict';

let content = document.getElementById('content');
let linkArray = content.querySelectorAll('a');

[].forEach.call(linkArray, function(el){
  if(true){

  }
  console.log(el.dataset.eventClick);
});