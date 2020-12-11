// Whats is so bad about global variables?
// global variables can be change anywhere
// polutes de global namespace shared by everyone
// reliance on global variables defeats modularity


// three ways global variables can be created
// var statement outside any function is in the global namespace
// adicionando a property to the global object( window this)
// use a variable without declaring it.

var greeting = "hello"; //declared on the global scope

function helloWorld() {
  this.name = "World"; //global setted to this
  punct = "!"; //global using without declaring it
}
helloWorld();

console.log(`${greeting} ${name}${punct}`); // accessing all variables on the global namespace
