function findMinAndRemove(array){
  let minimum = array[0]

  for (let i=1; i<array.length; i++) {
    if (array[i] < minimum) {
      minimum = array[i]
    }
  }

  console.log(minimum)
}

function selectionSort(array){

}
