const num = 5463987.62
const currency = 12536322.55
const score = 0.7935

console.log(num.toLocaleString('de-DE'))

 const brazilReal  = new Intl.NumberFormat('pt-BR', {
   style: 'currency',
   currency: 'BRL'
 })

 console.log(brazilReal.format(currency))



 const germanEuro  = new Intl.NumberFormat('de-DE', {
  style: 'currency',
  currency: 'EUR'
})

console.log(germanEuro.format(currency))


const japanYen  = new Intl.NumberFormat('js-JP', {
  style: 'currency',
  currency: 'JPY'
})

console.log(japanYen.format(currency))

const percent = new Intl.NumberFormat('en-US', { style: 'percent'})

console.log(percent.format(score))
