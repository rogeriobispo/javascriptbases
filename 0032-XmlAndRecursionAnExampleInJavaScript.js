// Recursion with xml
var xml = ''
var matchNode = function(theNode, nameStr) {
  if(theNode === null) {
    return theNode;
  }

  if(theNode.nodeName === nameStr) {
    return theNode;
  } else {
    return null;
  }
}

var firstNode = function(theNode, nameStr) {
  if(theNode.firstChild !== null && theNode.firstChild.nodeType === 1){
    if(matchNode(theNode.firstChild, nameStr) !== null) {
      return theNode.firstChild;
    } else {
      return firstNode(theNode.firstChild, nameStr)
    }
  } else {
    return null;
  }
}

var siblings = function(theNode, nameStr) {
  var returnNode = theNode.nextSibling;
  if(returnNode !== null) {
    returnNode = matchNode(returnNode, nameStr);
  }else {
    return null;
  }

  if (returnNode !== null) {
    return returnNode;
  } else {
    return siblings(theNode.nextSibling, nameStr)
  }
}
var parser = new DOMParser(),
    xml = parser.parseFromString(xml, "text/xml")
var pageOne = firstNode(xmlDoc, 'page')
var firstTopic = firstNode(xmlDoc, 'topic')
