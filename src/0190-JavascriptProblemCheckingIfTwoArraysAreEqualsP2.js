const usingSort = function(array1, array2) {
 if(array1.length !== array2.length) return false;
 if(array1.sort.toString() !== array2.sort.toString()) return false;
 return true
}


console.log(usingSort([1,3,2,1], [1,2,3,3]))
