# Welcome To StoryQuest!

## Background and Overview

My Project will be a single page game. StoryQuest will be an interractive Text Based Adventure. You will be told a story with your Main Character through various and interractive Message Boxes. These will give you a scenario and options on how to proceed, maybe you'll be a in forest, or a cave etc. 

## Functionality and MVP's

In StoryQuest, the User will be able to:
* Go through an Entire Adventure built through text box choices!
* Carry items which are represented by setting the state of objects, which will be needed to proceed in the game.
* A Background visual of your location to give you a sense of where you are.
* Save states so when the user refreshes, they will be to continue where they left off.

In Adition, this project can possibly include:
* Include images of the characters your talking/Interracting with.
* Turn based battles

## WireFrame && FileStructure

![WireFrame](https://i.imgur.com/YGCZElE.png)
![FileStructure](https://i.imgur.com/Js6uwzP.png)

## Architecture and Technology

* DOM Manipulation will be used to render a selection box that will be where the main game is played.
* The Story and progression will be contained in an array of plot points labeled by ID's.
* Mostly click based, using onclick functions/event listeners.

## Game Structure Logic
* Player starts on the base area. Gets to choose where on the map to go.
* A Scenario will pop up, maybe asking if they have an item, or gives them a chance to be explained something
* Certain Scenario's will stop the player from entering or fight based on whether they have an item or not
* The Story Array will also contain states which is the main function of the player's context, like whether they have an item or not.

## Implementation TimeLine

* Spend day 1 properly visualizing how to get the correct technology and how the project will be structured, as well as making sure my project setup is working to begin with.
* Spend Day 2 getting proper mechanics down, getting a map to render as an example
* Spend Day 3 Building the actual game logic so the game follows the structure of changing states and id's based on what's happening
* Spend Day 4 Writing the plot that contains the scenario's and the state they need to be in
* Spend Day 5 Finishing up the plot and state changes before possibly moving on to background and/or save states.