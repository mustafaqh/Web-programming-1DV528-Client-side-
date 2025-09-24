import ScoreManager from './webStorage.js'

/**
 * class for control and handel the html element throw the quis
 * and it simulate each case in the quiz
 */
export default class HtmlController {
  constructor () {
    this.rad_con = document.getElementById('radio-container')
    this.form = document.getElementById('quizz-form')
    this.quizzBox = document.getElementById('quizz-box')
    this.questionText = document.getElementById('question-text')
    this.timer = document.getElementById('counter')
    this.answeInput = document.getElementById('answer')
    this.submitButton = document.getElementById('submit-answer')
    this.resultBox = document.getElementById('result')
    this.resultStatus = document.getElementById('result-status')
    this.scoreTable = document.getElementById('table')
    this.scoreButton = document.getElementById('show-score')
    this.restartButton = document.getElementById('restart')
    this.nameBox = document.getElementById('name-box')
    this.nameInput = document.getElementById('name-input')
    this.lose_img = document.getElementById('lose-image')
    this.timeoutHandle = null
    this.manger = new ScoreManager()
  }

  /**
   * function to creat radio buttons that fit the alternatives provided by the server
   * @param {object} data  information provided by the server
   */
  createtheRaioButtons (data) {
    this.clearRadioButton()
    const radButton = document.querySelectorAll('input[name="radio-button"]')
    if (radButton.length === 0) {
      for (const key in data.alternatives) {
        if (Object.prototype.hasOwnProperty.call(data.alternatives, key)) {
          const value = data.alternatives[key]
          console.log(key, value)
          const radiobtn = document.createElement('input')
          radiobtn.type = 'radio'
          radiobtn.id = 'options'
          radiobtn.name = 'radio-button'
          radiobtn.value = key
          const label = document.createElement('label')
          label.innerHTML = value
          this.rad_con.appendChild(radiobtn)
          this.rad_con.appendChild(label)
        }
      }
    }
  }

  /**
   * functio to show the top five high scores by add the vlue of the 5 high scores to the html tabel.
   * @param {Array} scores - An array list that contains the five top scores.
   */
  ShowHightScore (scores) {
    const tableBody = document.querySelector('#score-table tbody')
    tableBody.innerHTML = ''
    scores.forEach(obj => {
      const row = tableBody.insertRow()
      const cell1 = row.insertCell(0)
      const cell2 = row.insertCell(1)

      cell1.textContent = obj.name
      cell2.textContent = obj.time
    })
  }

  resultCase (status) {
    this.resultBox.classList.remove('hidden')
    this.resultStatus.innerText(status)
    this.scoreButton.classList.remove('hidden')
    this.restartButton.classList.remove('hidden')
    this.scoreTable.classList.add('hidden')
  }

  showTopScores () {
    this.scoreTable.classList.remove('hidden')
    this.scoreButton.classList.add('hidden')
    this.ShowHightScore(this.manger.getHighScores())
  }

  startCase () {
    this.nameBox.classList.remove('hidden')
    this.quizzBox.classList.add('hidden')
    this.resultBox.classList.add('hidden')
    return this.nameInput.value
  }

  questionCase (question) {
    this.nameBox.classList.add('hidden')
    this.quizzBox.classList.remove('hidden')
    this.resultBox.classList.add('hidden')
    this.questionText.innerText = question.question

    if (question.alternatives !== undefined) {
      this.answeInput.classList.add('hidden')
      this.submitButton.classList.add('hidden')
      this.createtheRaioButtons(question)
      this.rad_con.classList.remove('hidden')
      this.answeInput.classList.add('hidden')
      this.submitButton.classList.add('hidden')
    } else if (question.alternatives === undefined) {
      this.rad_con.classList.add('hidden')
      this.answeInput.classList.remove('hidden')
      this.submitButton.classList.remove('hidden')
    }
  }

  answerCase (theurl) {
    if (theurl[1] === 400) {
      return 'lose'
    } else if (theurl[1] === 200) {
      if (theurl[0].nextURL) {
        return 'continue'
      } else if (!theurl[0].nextURL) {
        return 'win'
      }
    }
  }

  WinCase () {
    this.quizzBox.classList.add('hidden')
    this.resultBox.classList.remove('hidden')
    this.scoreButton.classList.remove('hidden')
    this.restartButton.classList.remove('hidden')
    this.scoreTable.classList.add('hidden')
    this.clearTimer()
    this.resultStatus.innerText = 'you win !!!'
  }

  loseCase () {
    this.quizzBox.classList.add('hidden')
    this.resultBox.classList.remove('hidden')
    this.scoreButton.classList.remove('hidden')
    this.restartButton.classList.remove('hidden')
    this.scoreTable.classList.add('hidden')
    this.clearTimer()
    this.resultStatus.innerText = 'yoe lose !!!'
  }

  getAnswer () {
    return this.answeInput.value
  }

  clearInput () {
    this.answeInput.value = ''
    this.nameInput.value = ''
  }

  countDownTimer (duration) {
    clearTimeout(this.timeoutHandle)
    let seconds = duration
    const updateTimer = () => {
      this.timer.innerHTML = `${seconds < 10 ? '0' : ''}${seconds}`
      seconds--
      if (seconds >= 0) {
        this.timeoutHandle = setTimeout(updateTimer, 1000)
      } else {
        this.loseCase()
      }
    }
    updateTimer()
  }

  // Method to clear the timer
  clearTimer () {
    clearTimeout(this.timeoutHandle)
  }

  /**
   * a function to get the timer vlue
   * @returns {number} the value of the timer.
   */
  getTimer () {
    return parseInt(this.timer.innerHTML)
  }

  /**
   * method to get the radio button in the form of array list.
   * @returns {Array} that contain the radio buttons
   */
  getRadioButtons () {
    const radButton = document.querySelectorAll('input[name="radio-button"]')
    return Array.from(radButton)
  }

  /**
   * method to remove the old radio buttons from the previous question.
   */
  clearRadioButton () {
    if (this.rad_con.children.length > 0) {
      Array.from(this.rad_con.children).forEach(child => {
        this.rad_con.removeChild(child)
      })
    }
  }
}
