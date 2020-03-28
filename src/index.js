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

    // state = {}
    // showTextNode(0)
    // if (showTextNode('A')) {
    //   let curState = JSON.parse(localStorage.getItem('cState'))
    //   let next = JSON.parse(localStorage.getItem('next'))
    //   state = curState
    //   showTextNode(next)
    // }else{
    //   state = {}
    //   showTextNode('I')
    // }
  }
  
  function showTextNode(textNodeIndex) {
    let backgrounds = {
      kingdom: "./src/images/kingdom.png",
      forest: "./src/images/Backgrounds/forest.jpg",
      mine: "./src/images/Backgrounds/mine.jpg",
      village: "./src/images/Backgrounds/town.jpg",
      dark: "./src/images/Backgrounds/dark.jpg",
      well: "./src/images/Backgrounds/well.jpg"
    }
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
    let a = textNode.location;
    document.body.style.backgroundImage = `url(${backgrounds[a]})`;
  }

  function showOption(option) {
    return option.requiredState == null || option.requiredState(state)
  }

  function selectOption(option) {
    const nextTextNodeId = option.nextText
    if (nextTextNodeId < 0) {
      return startGame()
    }
    state = Object.assign(state, option.setState)
    localStorage.setItem( 'cState', JSON.stringify(state))
    localStorage.setItem('next', JSON.stringify(nextTextNodeId))
    showTextNode(nextTextNodeId)
  }

  // function backgroungChange(backgrounds) {
  //   document.body.style.backgroundImage = backgrounds;
  // }

  story;

  startGame()
})