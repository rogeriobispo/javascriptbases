import fetch from 'node-fetch';
const file = 'http://127.0.0.1:8080/src/0065-JavascriptTipLoadingAnExternalXMLFile.xml';
fetch(file).then(resp => {
  return resp.text()
}).then(data => {
  let parser = new DOMParser();
  xmlDoc = parser.parseFromString(data, 'text/xml');
  console.log(xmlDoc)
})
