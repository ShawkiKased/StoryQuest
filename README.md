# Welcome To StoryQuest!

## Background and Overview

My Project will be a single page game. StoryQuest will be an interractive Story Text Based game. You will be told a story with your Main Character through various and interractive Message Boxes. These will give you a scenario and options on how to proceed, maybe you'll be a in forest, or a cave or fighting enemies. The choice will effect the outcome and all the while the background will be a map telling you where your path has lead you.

## Functionality and MVP's

In StoryQuest, the User will be able to:
* Adventure through a map of locations through text boxes
* Get into unique scenario's depending on your current status.
* Have multiple options available that makes the adventure deep. 

In Adition, this project can possibly include:
* Have the ability to change the overall map.
* Turn based battles based on status.

## WireFrame && FileStructure

![WireFrame](https://i.imgur.com/dzY4DVr.png)
![FileStructure](https://i.imgur.com/I9giEdj.png)

## Architecture and Technology

* DOM Manipulation will be used to render a text box that will be where the main game is played.
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
* Spend Day 3 finding out how to make pop ups, modal styles and maybe even add events
* Spend Day 4 implmenting how the map changes or scenario for the player
* Spend Day 5 finishing up and making sure all the components work a proper product