let char1 = {
  id: 1,
  settings: {
    maxAmt: 9,
    minAmt: 1,
    characteristics: {
      life: 9,
      strength: 5,
      intelligence: 8,
      speed: 6
    }
  }
}

let char2 = {
  id: 2,
  settings: {
    maxAmt: 12,
    minAmt: 0,
    characteristics: {
      life: 8,
      strength: 12,
      intelligence: 4
    }
  }
}

let char3 = {
  id: 3
}

console.log(char1.settings.characteristics.speed)
console.log(char2.settings.characteristics.speed)
console.log(char3.settings.characteristics.speed)
console.log(char3?.settings?.characteristics?.speed ?? 'Speed not found')
console.log(char3.['settings']?.characteristics.speed)

obj = {
  name: 'Rogerio',

  // player(){
  //   return this.player
  // }
}
console.log(obj.player?.()) // will not return an error.
