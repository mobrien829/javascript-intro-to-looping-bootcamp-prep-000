function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push(console.log("I am 1 strange loop."))
    }
    else {
      array.push(console.log("I am " + i + " strange loops."))
    }
  }
  return array
}