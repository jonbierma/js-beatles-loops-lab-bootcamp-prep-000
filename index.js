function theBeatlesPlay(musicians, instruments){
  var arr = []
  for (var i = 0; i < musicians.length; i++){
    arr[i]=musicians[i] + " plays " + instruments[i]
  }
  return arr
}

function johnLennonFacts(facts){
  var newFacts=[]
  let n=0;
  while (n < facts.length-1){
    newFacts[n]=facts[n] + "!!!"
    n++
  }
  return newFacts
}

function iLoveTheBeatles(num){
  var array=[]
  do {
    array.push("I love the Beatles!")
    num++
  } while (num<15)
  return array
}
