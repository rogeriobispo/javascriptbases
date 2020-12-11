// xml came as string. This
// should be converted to XMLDom

var xml = `
<?xml version="1.0" encoding="UTF-8" ?>
<sco>
  <topics>
    <pages>texst first page</pages>
  </topics>
</sco>
`

var parser = new DOMParser();
    xmlDoc = parser.parseFromString(xml, "text/xml");

console.log(xmlDoc.getElementsByTagName('xml'))

// commands for working with the xml dom
// getElementByTagName,
// firstChild, lastChild, NextSibling, PreviousSibling, parentNode
// childNode
// getAttribute(), setAttribute
// innerHtml
// removeChild removeAttribute(), createElement
// createAttribute()
