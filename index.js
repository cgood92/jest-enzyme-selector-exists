export default {
  toExist(received, argument = true) {
    const message = () =>
      `expected enzyme element ${!argument || this.isNot ? "not " : ""}to exist`
    let pass = false
    if (received.exists() === argument) {
      pass = true
    }
    return {
      message,
      pass,
    }
  },
}
