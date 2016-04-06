'use strict';
const glob = require("glob");
//https://github.com/isaacs/node-glob

glob("assets/branding/**",{"ignore":["node_modules/**"]}, (er, files) => {
  let l = files.length-1;  //glob returns a folder itself (assets/branding) as first item in array, so we count it in total sum.
  if(l<10){
    console.log(`😋  ${files.length} ✅`);
  }
  else{
    console.log('\x1b[31m', `😡  ${files.length} ❌`);
    // thx for colors https://coderwall.com/p/yphywg/printing-colorful-text-in-terminal-when-run-node-js-script
  }
});
