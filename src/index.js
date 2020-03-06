import "./styles/index.scss";
import { story } from "./story";

window.addEventListener("DOMContentLoaded", () => {
  const textElement = document.getElementById('text')
  const optionButtonsElement = document.getElementById('option-buttons')

  let state = {}

  function startGame() {
    let curState = JSON.parse(localStorage.getItem('cState'))
    let next = JSON.parse(localStorage.getItem('next'))
    if (curState && next ) {
      state = curState
      showTextNode(next)
    } else {
      state = {}
      showTextNode(0)
    }
  }

  function showTextNode(textNodeIndex) {
    const textNode = story.find(textNode => textNode.id === textNodeIndex)
    textElement.innerText = textNode.text
    while (optionButtonsElement.firstChild) {
      optionButtonsElement.removeChild(optionButtonsElement.firstChild)
    }

    textNode.options.forEach(option => {
      if (showOption(option)) {
        const button = document.createElement('button')
        button.innerText = option.text
        button.classList.add('btn')
        button.addEventListener('click', () => selectOption(option))
        optionButtonsElement.appendChild(button)
      }
    })
  }

  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }

  function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId <= 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    localStorage.setItem( 'cState', JSON.stringify(state))
    localStorage.setItem('next', JSON.stringify(nextTextNodeId))
    showTextNode(nextTextNodeId)
  }

  story;

  startGame()
})