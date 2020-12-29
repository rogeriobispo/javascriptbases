// Lets you store and retrieve object that are indexed with a key.
// Data is retrievalble if accessing the same domain
// The api is asynchronous
// store data using key values pairs
// the specificitaion is still evolving.

// Basic steps to access indexedDB
// Open a database
// create an object store in the database.
// ON the success event conduct your transactions
// close the transactions

window.indexedDB = window.indexedDB || window.mozIndexedDB
|| window.webkitIndexedDB || window.msIndexedDB

if(!window.indexedDB){
  console.log("Does not suport indexedDB")
}

let request = window.indexedDB.open('QuizQuestDataBase', 1);// the dbname and version.
// if you is updating the version changes
let db,
    tx,
    store,
    index;
request.onupgradeneeded = function (e) {
  let db = request.result;
      store = db.createObjectStore('QuestionStore',{
        keyPath: 'qID'
      });

      // another way to store id
      // store = db.createObjectStore('QuestionStore', { autoIncrement: true})
      inde = store.createIndex('questionText', 'questionText', { unique: false })
}

request.onerror  = function (e) {
  console.log('There was an error', e);
}


request.onsuccess = function(e){
  db = request.result;
  tx = db.transaction('QuestionStore', 'readwrite');
  store = tx.objectStore('QuestionStore');
  index = store.index('QuestionText')

  db.onerror = function(e){
    console.log('There was an error', e)
  }
  store.put({ //record this object into indexedb
    qID: 1,
    QuestionText: 'The sky is blu',
    correctAnswer: true,
    studentAnswer: true,
    result: true
  })

  store.put({ //record this object into indexedb
    qID: 2,
    QuestionText: 'The grass is green',
    correctAnswer: true,
    studentAnswer: true,
    result: true
  })

  tx.oncomplete = function() {
    db.close();
  }
}


// retrive data from indexedb

let q1 = store.get(1);
let qs = index.get('The grass is green.')
tx.oncomplete= function(){
  db.close();
}

q1.onsuccess = function(e) {
  console.log(q1.result);
  console.log(q1.result.QuestionText);
}

qs.onsuccess = function() {
  console.log(qs.result.QuestionText);
}
