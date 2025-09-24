import HtmlController from './module/htmlController.js'
import TheController from './module/Controller.js'

const nameEntry = document.getElementById('name-input')
const startButton = document.getElementById('submit-name')
const inputEntry = document.getElementById('answer')
const subBtn = document.getElementById('submit-answer')
const restBtn = document.getElementById('restart')
const scoreBtn = document.getElementById('show-score')
const startUrl = 'https://courselab.lnu.se/quiz/question/1'

const cont = new TheController()
const htmlCont = new HtmlController()

let radioArray = []
htmlCont.startCase()
nameEntry.addEventListener('keypress', async (event) => {
  if (event.key === 'Enter') {
    if (nameEntry.value === '') {
      alert('enter you name or your nickname to start')
    } else {
      event.preventDefault()
      await cont.startButton(startUrl)
    }
  }
})

startButton.addEventListener('click', async () => {
  if (nameEntry.value === '') {
    alert('enter you name or your nickname to start')
  } else {
    await cont.startButton(startUrl)
  }
})

inputEntry.addEventListener('keypress', async (event) => {
  if (event.key === 'Enter') {
    event.preventDefault()
    await cont.submitButton()
    radioArray = htmlCont.getRadioButtons()
    console.log(radioArray)
    for (let i = 0; i < radioArray.length; i++) {
      console.log('vlue: ', radioArray[i].value)
      radioArray[i].addEventListener('change', async (event) => {
        const theanswer = event.target.value
        console.log(theanswer)
        cont.radioButton(theanswer)
      })
    }
  }
})

subBtn.addEventListener('click', async () => {
  await cont.submitButton()

  radioArray = htmlCont.getRadioButtons()
  console.log(radioArray)
  for (let i = 0; i < radioArray.length; i++) {
    console.log('vlue: ', radioArray[i].value)
    radioArray[i].addEventListener('change', async (event) => {
      const theanswer = event.target.value
      console.log(theanswer)
      cont.radioButton(theanswer)
    })
  }
})

scoreBtn.addEventListener('click', () => {
  htmlCont.showTopScores()
})

restBtn.addEventListener('click', () => {
  htmlCont.clearInput()
  htmlCont.clearRadioButton()
  htmlCont.startCase()
})
