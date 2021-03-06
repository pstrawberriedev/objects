/*
  scratch.js
*/

// Say Hi outside of doc ready
console.log('--> scratch.js');

// On Ready
$(document).ready(function() {
  
  //Say Hi
  console.log('--> scratch.js (doc ready)');
  
  // Flowtype Init
  // http://simplefocus.com/flowtype/
  $('body').flowtype({
     minimum   : 320,
     maximum   : 1980,
     minFont   : 10,
     maxFont   : 20,
     fontRatio : 30
  });
  
});