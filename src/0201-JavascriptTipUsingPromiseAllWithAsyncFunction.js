import fetch from 'node-fetch';

let todos = fetch('https://jsonplaceholder.typicode.com/todos').then(resp => resp.json());
let comments = fetch('https://jsonplaceholder.typicode.com/comments').then(resp => resp.json());
let posts = fetch('https://jsonplaceholder.typicode.com/posts').then(resp => resp.json());

const retrieveAll = async function() {
  let result = await Promise.all([todos, comments, posts])
  console.log(result)
}()
