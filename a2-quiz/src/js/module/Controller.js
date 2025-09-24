import Fetcher from './fetcher.js'
import ThePlayer from './ThePlayer.js'
import HtmlController from './htmlController.js'
import ScoreManager from './webStorage.js'

export default class TheController {
  #htmlCon
  #player
  #fetch
  #maneger
  #theUrl
  #questionUrl
  #answerUrl

  constructor () {
    this.#player = new ThePlayer()
    this.#fetch = new Fetcher()
    this.#htmlCon = new HtmlController()
    this.#questionUrl = null
    this.#answerUrl = null
    this.#theUrl = null
    this.#maneger = new ScoreManager()
  }

  start () {
    const startBox = document.getElementById('name-box')
    startBox.classList.remove('hidden')
  }

  async startButton (startUrl) {
    const playerName = this.#htmlCon.startCase()
    this.#player.set_the_name(playerName)
    this.#questionUrl = await this.#fetch.get(startUrl)
    this.#htmlCon.questionCase(this.#questionUrl)
    console.log(this.#questionUrl.nextURL)
    this.#answerUrl = this.#questionUrl.nextURL
    this.#htmlCon.countDownTimer(10)
    this.#htmlCon.clearInput()
    this.#player.set_the_score(0)
    this.#player.clear()
  }

  /**
   *
   * @param {*} ans function that get the question check its type and send the answer and schek if it is right
   * this function was made to avid the dublicated code
   */
  async action (ans) {
    this.#theUrl = await this.#fetch.post(this.#answerUrl, { answer: ans })
    this.checkTheanswer(this.#theUrl)
    console.log('Status:', this.#theUrl[1])
    this.#questionUrl = this.#theUrl[0].nextURL
    this.#theUrl = await this.#fetch.get(this.#questionUrl)
    this.#htmlCon.questionCase(this.#theUrl)
    this.#answerUrl = this.#theUrl.nextURL
    this.#htmlCon.countDownTimer(10)
    this.#htmlCon.clearInput()
  }

  async submitButton () {
    const theAnswer = this.#htmlCon.getAnswer()
    await this.action(theAnswer)
  }

  async radioButton (theanswer) {
    await this.action(theanswer)
  }

  checkTheanswer (status) {
    const remTime = this.#htmlCon.getTimer()
    if (this.#htmlCon.answerCase(status) === 'win') {
      this.#maneger.addPlayer(this.#player.get_the_name(), this.#player.get_the_score())
      this.#htmlCon.WinCase()
    } else if (this.#htmlCon.answerCase(status) === 'continue') {
      this.#player.set_the_score(10 - remTime)

      this.#htmlCon.questionCase(this.#theUrl)
    } else if (this.#htmlCon.answerCase(status) === 'lose') {
      this.#htmlCon.loseCase()
    }
  }
}
