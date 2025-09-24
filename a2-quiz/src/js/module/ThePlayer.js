export default class ThePlayer {
  #name
  #score

  constructor () {
    this.#name = ''
    this.#score = 0
  }

  set_the_name (x) {
    this.#name = x
  }

  get_the_name () {
    return this.#name
  }

  set_the_score (s) {
    this.#score += s
  }

  clear () {
    this.#score = 0
  }

  get_the_score () {
    return this.#score
  }
}
