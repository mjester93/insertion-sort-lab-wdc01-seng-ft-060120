function findMinAndRemove(array){
  let minimum = array[0]
  let index = 0

  for (let i=1; i<array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i]
      index = i
    }
  }

  return array.splice(index, 1)
}

function selectionSort(array){

}
