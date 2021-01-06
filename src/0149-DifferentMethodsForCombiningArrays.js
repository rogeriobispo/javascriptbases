let score1 = [1, 2, 3, 4],
    score2 = [5, 6, 7, 8],
    score3 = [9, 10, 11, 12]

let arrrayCombined1 = score1.concat(score2).concat(score3)
console.log(arrrayCombined1)

let arrrayCombined2 = [...score1, ...score2, ...score3]
console.log(arrrayCombined2)

let arrrayCombined3 = [].concat(score1, score2, score3)
console.log(arrrayCombined3)

let arrayCombined3 = [1, 2, 3]
arrayCombined3.push(...score3, ...score2)
