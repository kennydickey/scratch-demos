"use strict";

//handlebars tamplate js
$(function () {
  //grab template script
  var templateScript = $("#address-template").html(); //using jQuery
  //compile template
  var template = Handlebars.compile(templateScript);
  // define our data object
  var context = {
    "city": "london",
    "address": "baker street",
    // 2nd example
    "description": {
      "escaped": "Using {{}} brackets will result in escaped HTML:",
      "unescaped": "Using {{{}}} will result in raw html unescaped:"
    },
    "example": "<button> Hello </button>",
    // 3rd example
    people: [
      {firstName: 'Gandalf', lastName: 'Gray'},
      {firstName: 'Frodo', lastName: 'Baggins'}
    ]
  };
  // pass our data to the template
  var compiledhtml = template(context);
  //add compiled html to the page
  $('.content-placeholder').html(compiledhtml); //follow upward ^
});

// new function for helpers
$(function () {
  // register a helper
  // str is arg passed to the helper when called
  Handlebars.registerHelper('capitalize', function(str){
    str = str || '';
    return str.slice(0,1).toUpperCase() + str.slice(1);
  });
  Handlebars.registerHelper('uppercase', function(options){
    return options.fn(this).toUpperCase(); 
  })
  // grab the template script
  var templateScript = $("#helpers-template").html();
  //compile the template
  var template = Handlebars.compile(templateScript);
  //array of obj in our context
  var context = {
    animals:[
      {name: "cow", noise: "moo"},
      {name: "cat", noise: "meow"},
      {name: "fish", noise: ""}
    ],
    // block helper context
    "code": "up up down down left right left right b a select start"
  };
  //pass our data to the template
  var compiledhtml = template(context);
  //add compiled html to the page
  $('.content-placeholder2').html(compiledhtml);
})

