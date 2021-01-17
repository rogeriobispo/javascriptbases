import fetch from 'node-fetch'

fetch('https://swapi.dev/api/films/').then(response => response.json()).then(json => console.log(json))
