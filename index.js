function findMinAndRemove(array){
  let minimum = array[0]

  for (let i=1; i<array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i]
    }
  }

  return minimum
}

function selectionSort(array){

}
