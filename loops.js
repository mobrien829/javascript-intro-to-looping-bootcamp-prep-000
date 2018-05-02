function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array = ["string"]
    }
    else {
      array.push("string ${i}")
    }
  }
}