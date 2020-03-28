# Welcome To StoryQuest!

StoryQuest is an interractive Text Based Adventure. You will be told a story with your Main Character through various and interractive message boxes. These will give you a scenario and options on how to proceed, maybe you'll be a in forest, or a cave etc. You can visit it [Here!](https://shawkikased.github.io/StoryQuest/)

* Technologies used:
I used a simple combination of DOM Manipulation with Vanilla JavaScript, HTML and CSS.


## How it Works

Players will have to adventure through a puzzle based adventure, finding out their way through the various areas by listening to dialogue, and using items wisely through the various prompts.


## Game Structure Logic

Player starts on the base area. Gets to choose where on the map to go. A Scenario will pop up, maybe asking if they have an item, or gives them a chance to be explained something.


### How Scenario's Work

Certain Scenario's will stop the player from entering or fight based on whether they have an item or not.
I used a state object that will be used to carry the true or false values of what a player can and can't do and based it on a RequiredState option. Here's an example scenario from Story.js, in this code snippet, the player will only have the option to light up the cave if they have the lanturn on them:

``options: [
            {
                text: 'Return to Map',
                nextText: 1
            },
            {
                text: 'Use Lantern',
                requiredState: (currentState) => currentState.lanturn,
                nextText: 'W2-'
            }
        ]
``

* Cave without Lanturn:
![CaveExample](https://i.imgur.com/9HKZAhl.png)

* Cave with Lanturn:
![CaveExample2](https://i.imgur.com/vpOr5S9.png)

### Backgrounds

There will be many unique areas in the game, all of which will have different backgrounds. Since this is Vanilla JavaScript, I managed to achieve this by having a Background Object with each background valued to their respective location. Using a location value in the Story, i made a simple code snippet that will change the background to whatever the location's value is in the Index.js. Here's a quick snippet example:

``document.body.style.backgroundImage = `url(${backgrounds[a]})`;``

* Town Example:
![TownExample](https://i.imgur.com/jJ1aH3A.jpg)

*Forest Example:
![ForestExample](https://i.imgur.com/XQanU32.png)

<!-- ## Functionality and MVP's

In StoryQuest, the User will be able to:
* Go through an Entire Adventure built through text box choices!
* Carry items which are represented by setting the state of objects, which will be needed to proceed in the game.
* A Background visual of your location to give you a sense of where you are.
* Save states so when the user refreshes, they will be to continue where they left off.


## WireFrame && FileStructure

![WireFrame](https://i.imgur.com/YGCZElE.png) *source: Self-made
![FileStructure](https://i.imgur.com/Js6uwzP.png) *source: edited from File Structure example from App Academy

## Architecture and Technology

* DOM Manipulation will be used to render a selection box that will be where the main game is played.
* The Story and progression will be contained in an array of plot points labeled by ID's.
* Mostly click based, using onclick functions/event listeners.

## Game Structure Logic
* Player starts on the base area. Gets to choose where on the map to go.
* A Scenario will pop up, maybe asking if they have an item, or gives them a chance to be explained something
* Certain Scenario's will stop the player from entering or fight based on whether they have an item or not
* The Story Array will also contain states which is the main function of the player's context, like whether they have an item or not. -->

## Future Plans for StoryQuest

* Multiple tracks of music for all the various areas.
* Icons and better visuals.
* Polishing all around and more!