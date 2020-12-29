// esteps to read a xml with XMLHttpRequest(XHR)
// Create a new request object.
// Open the object and specify verb and file path
// set the request header.
// define event listener
// send the request
let getXMLFile = function(path, callback) {
  let request = new XMLHttpRequest();
  request.open('GET', path, true);
  request.setRequestHeader("content-Type", 'text/xml');
  request.onreadystatechange = function () {
    if(request.readyState === 4 && request.status === 200) {
      callback(request.responseXML)
    }
  }
  request.send();
}

const file = '0065-JavascriptTipLoadingAnExternalXMLFile.xml'
getXMLFile(file, function (xml){
  console.log(xml);
})
