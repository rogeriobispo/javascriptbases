// A module on node
// A separate file with a grouping of related functionality.
// won't interefere with other code.
// it has a separate scope
// Reusable and sharable;
// provides a way to structure code. 
// Key commands: module, exports require.
// module exports require is part of node.

const formatName = require('./0117-names.js');

console.log('IM in a file');
console.log(formatName('bispo, rogerio'));
