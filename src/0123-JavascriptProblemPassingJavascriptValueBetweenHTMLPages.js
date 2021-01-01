// localstoreg can beused to pass value between pages
// url querystring can be used to pass values between pages
// indexedDB can be used to pass values between pages
// single page application can be used to pass values between pages

localstorege.setItem('userName', 'rogerio.bispo') // adiciona item 
// no localstorege

console.log(localstorege.getItem('userName'))
