export const story = [

    {
        id: 0,
        location: 'kingdom',
        text: '*Instructions* Welcome to StoryQuest! A text-based puzzle/adventure game! Navigate through the world in search of the Sacred Stones to diminish evil! Clicking is your best friend, click the button options carefully to solve the perilous puzzles on your journey! You will only have 3 lives, fail 3 times, and you will start all over so be careful!',
        options: [
            // {
            //     text: 'Continue!',
            //     nextText: 'C'
            // },
            {
                text: 'Start new game!',
                setState: { lives: 3},
                nextText: 'N'
            }
        ]
    },
    {
        id: 'I',
        location: 'inventory',
        text: 'Heres what you current have on you:',
        options: [
            {
                text: 'Key items',
                nextText: 'IK'
            },
            {
                text: 'Tradeable/Disposable items',
                nextText: 'IT'
            },
            {
                text: 'Return to game',
                nextText: 1
            }
        ]
    },
    {
        id: 'IK',
        location: 'inventory',
        text: 'Inventory: Key items',
        options: [
            {
                text: 'Earth Stone',
                requiredState: (currentState) => currentState.earthStone
            },
            {
                text: 'Fire Stone',
                requiredState: (currentState) => currentState.fireStone
            },
            {
                text: 'Water Stone',
                requiredState: (currentState) => currentState.waterStone
            },
            {
                text: 'Goblins blessing',
                requiredState: (currentState) => currentState.goblinBlessing
            },
            {
                text: 'Note: "Right Right Left"',
                requiredState: (currentState) => currentState.note
            },
            {
                text: 'Lanturn',
                requiredState: (currentState) => currentState.lanturn
            },
            {
                text: 'Hammer',
                requiredState: (currentState) => currentState.hammer
            },
            {
                text: 'Mirror of truth',
                requiredState: (currentState) => currentState.mirror
            },
            {
                text: 'Book',
                requiredState: (currentState) => currentState.book
            },
            {
                text: 'Go back',
                nextText: 'I'
            }
        ]
    },
    {
        id: 'IT',
        location: 'inventory',
        text: 'Inventory: Tradeable/Disposable items',
        options:[
            {
                text: 'Goblin berries',
                requiredState: (currentState) => currentState.goblinBerry
            },
            {
                text: 'Star fruit',
                requiredState: (currentState) => currentState.starFruit
            },
            {
                text: 'Ruby gem',
                requiredState: (currentState) => currentState.rubyGem
            },
            {
                text: 'Lever',
                requiredState: (currentState) => currentState.lever
            },
            {
                text: 'Golden goblin berries',
                requiredState: (currentState) => currentState.goldenBerry
            },
            {
                text: 'Dark gem',
                requiredState: (currentState) => currentState.darkGem
            },
            {
                text: 'Life potion',
                requiredState: (currentState) => currentState.lifePotion
            },
            {
                text: 'Go back',
                nextText: 'I'
            }
        ]
    },
    {
        id: 'N',
        location: 'kingdom',
        text: 'Queen Elizabeth: Welcome Hero, we need your help, the evil King Shawki is ruling the kingdom with an iron fist! We need someone who is both brave and smart! You will need to traverse the kingdom in search of the elemental stones that can make you strong enough to face him! Good Luck and be careful on your long journey Hero!',
        options: [
            {
                text: 'Start!',
                setState: { lives: 3 },
                nextText: 1
            }
        ]
    },
    {
        id: 1,
        location: 'kingdom',
        text: 'Where would you like to go Hero?',
        options: [
            {
                text: 'Woods',
                nextText: 'W1'
            },
            {
                text: 'Caves',
                nextText: 'W2'
            },
            {
                text: 'Village',
                nextText: 'V'
            },
            {
                text: 'The tower of King Shawki',
                requiredState: (currentState) => currentState.earthStone && currentState.waterStone && currentState.fireStone,
                nextText: 'W4'
            },
            {
                text: 'Check inventory',
                nextText: 'I'
            }
        ]
    },
    {
        id: 'W1',
        location: 'forest',
        text: 'You find yourself in a deep forest, you see a sign that warns of a maze.',
        options: [
            {
                text: 'Continue forward!',
                nextText: 'W1M'
            },
            {
                text: 'Go back to map',
                nextText: 1
            }
        ]
    },
    {
        id: 'W1M',
        location: 'forest',
        text: 'You reached the entrance of the maze, theres 3 paths and a goblin sitting on the floor',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-1'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-2'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-3'
            },
            {
                text: 'Talk to goblin',
                nextText: 'W1G'
            },
            {
                text: 'Go back',
                nextText: 'W1'
            }
        ]
    },
    {
        id: 'W1M-E',
        location: 'forest',
        text: 'You have unfortunately got yourself lost in the maze, you lost a life. TRY AGAIN',
        options: [
            {
                text: 'Continue (Lifes left: 2)',
                requiredState: (currentState) => currentState.lives === 3,
                setState: { lives: 2 },
                nextText: 'W1M'
            },
            {
                text: 'Continue (Lifes left: 1)',
                requiredState: (currentState) => currentState.lives === 2,
                setState: { lives: 1 },
                nextText: 'W1M'
            },
            {
                text: 'GAMEOVER, start new game',
                requiredState: (currentState) => currentState.lives === 1,
                nextText: 'N'
            }
        ]
    },
    {
        id: 'W1M-1',
        location: 'forest',
        text: 'You started straight and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-1-1'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-1-2'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-1-3'
            }
        ]
    },
    {
        id: 'W1M-1-1',
        location: 'forest',
        text: 'You went straight again and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-1-2',
        location: 'forest',
        text: 'You went left and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-1-3',
        location: 'forest',
        text: 'You went right and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-S'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-S',
        location: 'forest',
        text: 'You find yourself....in a field of flowers, in front of you is a pedastal which seems to contain the Earth Stone',
        options: [
            {
                text: 'Grab Earth Stone',
                requiredState: (currentState) => !currentState.earthStone && !currentState.goblinBlessing,
                nextText: 'W1M-S1'
            },
            {
                text: 'Grab Earth Stone',
                requiredState: (currentState) => currentState.goblinBlessing && !currentState.earthStone,
                nextText: 'W1M-S2'
            },
            {
                text: 'You have already taken the stone, continue',
                requiredState: (currentState) => currentState.earthStone,
                nextText: 'W1M'
            }
        ]
    },
    {
        id: 'W1M-S1',
        location: 'forest',
        text: 'You go for the stone only to see it covered in a force field, theres a note: "Get the goblins blessing for the stone"',
        options: [
            {
                text: 'Continue',
                nextText: 'W1M'
            }

        ]
    },
    {
        id: 'W1M-S2',
        location: 'forest',
        text: 'You reach for the stone.....you grabbed it: HUZZAH EARTH STONE ACQUIRED!............................hm? There seems to be a note under the stone...."Right Right Left"',
        options: [
            {
                text: 'Continue',
                setState: {earthStone: true, note: true},
                nextText: 'W1M'
            }
        ]
    },
    {
        id: 'W1M-2',
        location: 'forest',
        text: 'You Started left and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-2-1'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-2-2'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-2-3'
            }

        ]
    },
    {
        id: 'W1M-2-1',
        location: 'forest',
        text: 'You went straight and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-2-2',
        location: 'forest',
        text: 'You went left again and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-GB'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-GB',
        location: 'forest',
        text: 'You find a tree, it seems to be carrying Goblin berries',
        options: [
            {
                text: 'Take the berries and continue',
                setState: { goblinBerry: true },
                nextText: 'W1M'
            },
            {
                text: 'Continue without berries',
                nextText: 'W1M'
            }
        ]
    },
    {
        id: 'W1M-2-3',
        location: 'forest',
        text: 'You went Right and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-3',
        location: 'forest',
        text: 'You Started right and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-3-1'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-3-2'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-3-3'
            }
        ]
    },
    {
        id: 'W1M-3-1',
        location: 'forest',
        text: 'You went straight and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-3-2',
        location: 'forest',
        text: 'You went left and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-3-3',
        location: 'forest',
        text: 'You went right again and find 3 more paths',
        options: [
            {
                text: 'Continue straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue left',
                nextText: 'W1M-SF'
            },
            {
                text: 'Continue right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-SF',
        location: 'forest',
        text: 'You find a tree, and it seems to contain Star fruit',
        options: [
            {
                text: 'Take the star fruit and continue',
                setState: { starFruit: true },
                nextText: 'W1M'
            },
            {
                text: 'Continue without taking star fruit',
                nextText: 'W1M'
            }
        ]
    },
    {
        id: 'W1G',
        location: 'forest',
        text: 'Goblin: I know the way through the maze, but i require something delicious',
        options: [
            {
                text: 'Maze entrance',
                nextText: 'W1M'
            },
            {
                text: 'Give goblin goblin berries',
                requiredState: (currentState) => currentState.goblinBerry,
                nextText: 'W1GE'
            },
            {
                text: 'Ask about Mirror of truth',
                requiredState: (currentState) => currentState.advice,
                nextText: 'W1G2'
            }
        ]
    },
    {
        id: 'W1GE',
        location: 'forest',
        text: 'Goblin: *MUNCH MUNCH MUNCH MUNCH MUNCH* straight *MUNCH MUNCH MUNCH* right *MUNCH MUNCH MUNCH* left *MUNCH MUNCH MUNCH MUNCH* take my blessing!',
        options: [
            {
                text: 'Continue',
                setState: {goblinBerry: false, goblinBlessing: true},
                nextText: 'W1M'
            }
        ]
    },
    {
        id: 'W1G2',
        location: 'forest',
        text: 'Goblin: Oh, for THAT im gonna need TWO delicious things at the same time, hehehe',
        options: [
            {
                text: 'Return to maze',
                nextText: 'W1M'
            },
            {
                text: 'Give both goblin berries and star fruit',
                requiredState: (currentState) => currentState.starFruit && currentState.goblinBerry,
                nextText: 'W1G3'
            }
        ]
    },
    {
        id: 'W1G3',
        location: 'forest',
        text: 'Goblin: *MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH* so delicious *MUNCH MUNCH MUNCH MUNCH MUNCH* so juicy *MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH* Okay okay okay okay, listen carefully, have you been to the mines? Theres a giant hole with some creature in it. Your going to have to give him golden goblin berries, he really hates normal ones. I heard you can find them deep in the caves, near the Fire Stone. Try looking for something suspicious',
        options: [
            {
                text: 'Return to Maze',
                setState: { goblinBerry: false, starFruit: false, goblinAdvice: true },
                nextText: 'W1M'
            }
        ]
    },
    {
        id: 'W2',
        location: 'dark',
        text: 'You went inside the cave, however it is really dark and impossible to see forward',
        options: [
            {
                text: 'Return to map',
                nextText: 1
            },
            {
                text: 'Use lantern',
                requiredState: (currentState) => currentState.lanturn,
                nextText: 'W2-'
            }
        ]
    },
    {
        id: 'W2-',
        location: 'mine',
        text: 'You used your lanturn to light the way, you are now able to see through the cave',
        options: [
            {
                text: 'Continue',
                nextText: 'W2E'
            }
        ]
    },
    {
        id: 'W2E',
        location: 'mine',
        text: 'Going deeper in the cave, you find yourself in the mines. There are 2 paths and a minecart in the middle',
        options: [
            {
                text: 'Go to the left',
                requiredState: (currentState) => !currentState.lever,
                nextText: 'W2L1'
            },
            {
                text: 'Go to the left',
                requiredState: (currentState) => currentState.lever,
                nextText: 'W2L3'
            },
            {
                text: 'Get closer to the minecart',
                requiredState: (currentState) => !currentState.minecart,
                nextText: 'W2M'
            },
            {
                text: 'Get closer to the minecart',
                requiredState: (currentState) => currentState.minecart,
                nextText: 'W2MS'
            },
            {
                text: 'Go to the right',
                nextText: 'W2R'
            },
            {
                text: 'Get out of the cave',
                nextText: 1
            }
        ]
    },
    {
        id: 'W2L1',
        location: 'mine',
        text: 'You come closer to the left path but a big boulder is blocking the way, your going to need to smash it somehow',
        options: [
            {
                text: 'Go back',
                nextText: 'W2E'
            },
            {
                text: 'Use hammer',
                requiredState: (currentState) => currentState.hammer,
                nextText: 'W2L2'
            }
        ]
    },
    {
        id: 'W2L3',
        location: 'mine',
        text: 'You smashed the boulder and took the lever already',
        options: [
            {
                text: 'Go Back',
                nextText: 'W2E'
            },
        ]
    },
    {
        id: 'W2L2',
        location: 'mine',
        text: 'You use your hammer to smash the boulder into pieces. Behind it lays a minecart lever',
        options: [
            {
                text: 'Take minecart lever',
                setState: { lever: true },
                nextText: 'W2E'
            }
        ]

    },
    {
        id: 'W2M',
        location: 'mine',
        text: 'You come closer to the minecart, looks like you could ride it, but the lever is missing',
        options: [
            {
                text: 'Go back',
                nextText: 'W2E'
            },
            {
                text: 'Place lever',
                requiredState: (currentState) => currentState.lever,
                nextText: 'W2M2'
            }
        ]

    },
    {
        id: 'W2M2',
        location: 'mine',
        text: 'You placed the lever in the minecart, you can now ride on it',
        options: [
            {
                text: 'Continue',
                setState: { minecart: true, lever: false},
                nextText: 'W2MS'
            }
        ]
    },
    {
        id: 'W2MS',
        location: 'mine',
        text: 'Would you like to ride the minecart?',
        options: [
            {
                text: 'Ride the minecart',
                nextText: 'W2MS-'
            },
            {
                text: 'No',
                nextText: 'W2E'
            }
        ]
    },
    {
        id: 'W2MS-',
        location: 'mine',
        text: 'You got on the minecart and rode forward, its time to be careful, proceed with caution...',
        options: [
            {
                text: 'Continue',
                nextText: 'W2MS1'
            }
        ]
    },
    {
        id: 'W2MSF',
        location: 'mine',
        text: 'You crashed and got knocked out......TRY AGAIN',
        options: [
            {
                text: 'Continue (Lifes left: 2)',
                requiredState: (currentState) => currentState.lives === 3,
                setState: { lives: 2 },
                nextText: 'W2E'
            },
            {
                text: 'Continue (Lifes left: 1)',
                requiredState: (currentState) => currentState.lives === 2,
                setState: { lives: 1 },
                nextText: 'W2E'
            },
            {
                text: 'GAMEOVER, start new game',
                requiredState: (currentState) => currentState.lives === 1,
                nextText: 'N'
            }
        ]
    },
    {
        id: 'W2MS1',
        location: 'mine',
        text: 'You come across a multi-track system, In front of you is an incoming minecart with a troll in it, hes about to crash into you.',
        options: [
            {
                text: 'Change the track',
                nextText: 'W2MS2'
            },
            {
                text: 'Try to duck',
                nextText: 'W2MSF'
            },
            {
                text: 'Use your hammer',
                nextText: 'W2MSF'
            },
            {
                text: 'Dont do anything',
                nextText: 'W2MSF'
            }
        ]
    },
    {
        id: 'W2MS2',
        location: 'mine',
        text: 'You avoided the troll. In front of you is a bigger troll outside the track about to hit you with a giant club.....',
        options: [
            {
                text: 'Change the track',
                nextText: 'W2MSF'
            },
            {
                text: 'Try to duck',
                nextText: 'W2MS3'
            },
            {
                text: 'Use your hammer',
                nextText: 'W2MSF'
            },
            {
                text: 'Dont do anything',
                nextText: 'W2MSF'
            }
        ]
    },
    {
        id: 'W2MS3',
        location: 'mine',
        text: 'You ducked and avoided the swing. In front of you are two more trolls on opposite tracks heading towards you.....',
        options: [
            {
                text: 'Change the track',
                nextText: 'W2MSF'
            },
            {
                text: 'Try to duck',
                nextText: 'W2MSF'
            },
            {
                text: 'Use your hammer',
                nextText: 'W2MSF'
            },
            {
                text: 'Dont do anything',
                nextText: 'W2MS4'
            }
        ]
    },
    {
        id: 'W2MS4',
        location: 'mine',
        text: 'You didnt do anything and the trolls end up crashing into each other. Behind you is a minecart with a bomb following behind....',
        options: [
            {
                text: 'Change the track',
                nextText: 'W2MSF'
            },
            {
                text: 'Try to duck',
                nextText: 'W2MSF'
            },
            {
                text: 'Use your hammer',
                nextText: 'W2MS5'
            },
            {
                text: 'Speed up and try to lose it',
                nextText: 'W2MSF'
            }
        ]
    },
    {
        id: 'W2MS5',
        location: 'mine',
        text: 'You used your hammer to knock the bomb out of the incoming cart. Your minecart has reached its destination, the stress is over.',
        options: [
            {
                text: 'Continue',
                requiredState: (currentState) => !currentState.fireStone,
                nextText: 'W2MSEnd'
            },
            {
                text: 'Continue',
                requiredState: (currentState) => currentState.fireStone,
                nextText: 'W2MSEnd2'
            }
        ]
    },
    {
        id: 'W2MSEnd',
        location: 'mine',
        text: 'You reached a pedastal......It has the Fire Stone in it, HUZZAH!',
        options: [
            {
                text: 'Ride minecart back',
                setState: { fireStone: true },
                nextText: 'W2E'
            }
        ]
    },
    {
        id: 'W2MSEnd2',
        location: 'mine',
        text: 'You have already taken the Fire Stone, the only thing here is the pedastal and a wall',
        options: [
            {
                text: 'Ride minecart back',
                nextText: 'W2E'
            },
            {
                text: 'Observe wall',
                requiredState: (currentState) => currentState.goblinAdvice && !currentState.wall,
                nextText: 'W2W'
            },
            {
                text: 'Observe broken wall',
                requiredState: (currentState) => currentState.wall,
                nextText: 'W2W3'
            }
        ]
    },
    {
        id: 'W2W',
        location: 'mine',
        text: 'You observed the wall, there seems to be a crack',
        options: [
            {
                text: 'Go back',
                nextText: 'W2MSEnd2'
            },
            {
                text: 'Use your hammer on the crack',
                nextText: 'W2W2'
            }
        ]
    },
    {
        id: 'W2W2',
        location: 'mine',
        text: 'You used your hammer on the crack, you busted a hole and see that theres a room behind it. You smashed it again and busted a new room',
        options: [
            {
                text: 'Continue',
                setState: { wall: true },
                nextText: 'W2W3'
            }
        ]
    },
    {
        id: 'W2W3',
        location: 'mine',
        text: 'You come up to a new room with a golden tree, it contains gold goblin berries',
        options: [
            {
                text: 'Grab golden berries and go back',
                setState: { goldenBerry: true },
                nextText: 'W2MSEnd2'
            }
        ]
    },
    {
        id: 'W2R',
        location: 'mine',
        text: 'You find a big hole in the ground, it seems dangerous, but as you come close, you hear a faint voice......"Feed me"',
        options: [
            {
                text: 'Go back',
                nextText: 'W2E'
            },
            {
                text: 'Throw goblin berries in the hole',
                requiredState: (currentState) => currentState.goblinBerry,
                nextText: 'W2RG1'
            },
            {
                text: 'Throw star fruit in the hole',
                requiredState: (currentState) => currentState.starFruit && (!currentState.rubyGem && !currentState.hammer),
                nextText: 'W2RS1'
            },
            {
                text: 'Throw golden goblin berries in the hole',
                requiredState: (currentState) => currentState.goldenBerry,
                nextText: 'W2RGG'
            }
        ]
    },
    {
        id: 'W2RG1',
        location: 'mine',
        text: 'You threw the goblin berries in the hole.....................',
        options: [
            {
                text: 'Continue',
                setState: { goblinBerry: false },
                nextText: 'W2RG2'
            }
        ]
    },
    {
        id: 'W2RG2',
        location: 'mine',
        text: 'The ground furiously shakes, and you hear a booming voice "I DONT LIKE GOBLIN BERRIES", the cave collapses on top of you and knocks you out. You then wake up back at the main map.....',
        options: [
            {
                text: 'Continue',
                nextText: 1
            }
        ]
    },
    {
        id: 'W2RS1',
        location: 'mine',
        text: 'You threw the star fruit in the hole........................',
        options: [
            {
                text: 'Continue',
                setState: { starFruit: false },
                nextText: 'W2RS2'
            }
        ]
    },
    {
        id: 'W2RS2',
        location: 'mine',
        text: 'You hear the voice again, "THANK YOU, IM STARVING, TAKE THIS", the ruby gem is thrown out of hole!',
        options: [
            { 
                text: 'Take ruby gem',
                setState: { rubyGem: true },
                nextText: 'W2E'
            }
        ]
    },
    {
        id: 'W2RGG',
        location: 'mine',
        text: 'You threw the golden goblin berries in the hole...............',
        options: [
            {
                text: 'Continue',
                setState: { goldenBerry: false },
                nextText: 'W2RGG2'
            }
        ]
    },
    {
        id: 'W2RGG2',
        location: 'mine',
        text: 'You hear the voice again, "OH MY GOD, OOOOOOOH MYYYYY GOOOOOOD, GOLDEN GOBLIN BERRIES? AWWWWW YEEEEEEEEEEESSS THANK YOU, TAKE THIS, AND BE CAREFUL OF THE MONSTERS NEAR THE WELL", the Mirror Of truth was thrown out of the hole',
        options: [
            {
                text: 'Take mirror Of truth',
                setState: { mirror: true },
                nextText: 'W2E'
            }
        ]
    },
    {
        id: 'V',
        location: 'village',
        text: 'You went to the village, there are plenty of people to see, what would you like to do?',
        options: [
            {
                text: 'Go to the shop',
                nextText: 'V-S'
            },
            {
                text: 'Talk to the village folk',
                nextText: 'V-P'
            },
            {
                text: 'Go back to map',
                nextText: 1
            }
        ]
    },
    {
        id: 'V-S',
        location: 'village',
        text: 'ShopKeeper: Welcome Hero! Take a look at my wares, anything fits your fancy for your adventure?',
        options: [
            {
                text: 'Lanturn',
                requiredState: (currentState) => !currentState.lanturn,
                nextText: 'V-SL'
            },
            {
                text: 'Hammer',
                requiredState: (currentState) => !currentState.hammer,
                nextText: 'V-SH'
            },
            {
                text: 'Life potion',
                nextText: 'V-SP'
            },
            {
                text: 'Nothing, thank you',
                nextText: 'V'
            }
        ]
    },
    {
        id: 'V-SL',
        location: 'village',
        text: 'ShopKeeper: I will trade you a Lanturn for a Star Fruit',
        options: [
            {
                text: 'Back',
                nextText: 'V-S'
            },
            {
                text: 'Trade star fruit for lanturn',
                requiredState: (currentState) => currentState.starFruit,
                setState: { starFruit: false, lanturn: true},
                nextText: 'V-S'
            }
        ]
    },
    {
        id: 'V-SH',
        location: 'village',
        text: 'ShopKeeper: I will trade you a hammer for a ruby gem',
        options: [
            {
                text: 'Back',
                nextText: 'V-S'
            },
            {
                text: 'Trade ruby gem for hammer',
                requiredState: (currentState) => currentState.rubyGem,
                setState: { rubyGem: false, hammer: true },
                nextText: 'V-S'
            }
        ]
    },
    {
        id: 'V-SP',
        location: 'village',
        text: 'ShopKeeper: I will trade you a life potion for a dark gem',
        options: [
            {
                text: 'Back',
                nextText: 'V-S'
            },
            {
                text: 'Trade dark gem for life potion',
                requiredState: (currentState) => currentState.darkGem,
                setState: { darkGem: false, lifePotion: true },
                nextText: 'V-SP2'
            }
        ]
    },
    {
        id: 'V-SP2',
        location: 'village',
        text: 'ShopKeeper: Here you go, keep in mind you can only use this once, if you want another, you will need to find me another dark gem',
        options: [
            {
                text: 'Thank you',
                nextText: 'V-S'
            }
        ]
    },
    {
        id: 'V-P',
        location: 'village',
        text: 'You go to the center of the village and see the village folk doing their daily routines. Who would you like to talk to?',
        options: [
            {
                text: 'Lovely couple by the well',
                requiredState: (currentState) => !currentState.well,
                nextText: 'V-PL'
            },
            {
                text: 'To the well',
                requiredState: (currentState) => currentState.well,
                nextText: 'V-PW'
            },
            {
                text: 'Children that are playing',
                nextText: 'V-PK'
            },
            {
                text: 'Wise old man',
                nextText: 'V-PO'
            },
            {
                text: 'Go back',
                nextText: 'V'
            }
        ]
    },
    {
        id: 'V-PL',
        location: 'village',
        text: 'Lovely couple: Can you not bother us please? We are enjoying our company in these dark days',
        options: [
            {
                text: 'Go back',
                nextText: 'V-P'
            },
            {
                text: 'Use the mirror Of truth',
                requiredState: (currentState) => currentState.mirror,
                nextText: 'VPLW'
            }
        ]
    },
    {
        id: 'VPLW',
        location: 'village',
        text: 'You used your mirror Of truth, the "lovely couple" have suddenly turned into monsters',
        options: [
            {
                text: 'Continue',
                nextText: 'VPLW2'
            }
        ]
    },
    {
        id: 'VPLWF',
        location: 'village',
        text: 'Bad choice, the monsters managed to attack you and knock you out...........TRY AGAIN',
        options: [
            {
                text: 'Continue (Lifes left: 2)',
                requiredState: (currentState) => currentState.lives === 3,
                setState: { lives: 2 },
                nextText: 'V'
            },
            {
                text: 'Continue (Lifes left: 1)',
                requiredState: (currentState) => currentState.lives === 2,
                setState: { lives: 1 },
                nextText: 'V'
            },
            {
                text: 'GAMEOVER, start new game',
                requiredState: (currentState) => currentState.lives === 1,
                nextText: 'N'
            }
        ]
    },
    {
        id: 'VPLW2',
        location: 'village',
        text: 'Monsters: "What the!? He figured us out, lets get em!" The monsters charge towards you.....',
        options: [
            {
                text: 'Use hammer',
                nextText: 'VPLWF'
            },
            {
                text: 'Use lantern',
                nextText: 'VPLW3'
            },
            {
                text: 'Dodge attack',
                nextText: 'VPLWF'
            }
        ]
    },
    {
        id: 'VPLW3',
        location: 'village',
        text: 'You used the lanturn to blind the monsters, nows your chance!',
        options: [
            {
                text: 'Use hammer',
                nextText: 'VPLWF4',
            }
        ]
    },
    {
        id: 'VPLWF4',
        location: 'village',
        text: 'You knocked the monsters out with your hammer, they are defeated! The well has now changed, a set of stairs have appeared going underground.....',
        options: [
            {
                text: 'Continue',
                setState: { well: true },
                nextText: 'V-PW'
            }
        ]
    },
    {
        id: 'V-PW',
        location: 'village',
        text: 'You go near the well, that now has a set of stairs leading underground.',
        options: [
            { 
                text: 'Go down the well',
                nextText: 'W3',
            },
            {
                text: 'Go back',
                nextText: 'V-P'
            }
        ]
    },
    {
        id: 'W3',
        location: 'well',
        text: 'You go downstairs and find yourself in a secret underground room, theres 2 doors and a fireplace with boiling pot',
        options: [
            {
                text: 'Check the left door',
                requiredState: (currentState) => !currentState.pot,
                nextText: 'W3L'
            },
            {
                text: 'Check the left door',
                requiredState: (currentState) => currentState.pot,
                nextText: 'W3LB'
            },
            {
                text: 'Check fireplace',
                requiredState: (currentState) => !currentState.pot,
                nextText: 'W3F'
            },
            {
                text: 'Check fireplace',
                requiredState: (currentState) => currentState.pot,
                nextText: 'W3FB'
            },
            {
                text: 'Check the right door',
                requiredState: (currentState) => !currentState.book && !currentState.SD,
                nextText: 'W3R'
            },
            {
                text: 'Check the right Door',
                requiredState: (currentState) => currentState.book && !currentState.SD,
                nextText: 'W3RB'
            },
            {
                text: 'Check the right door',
                requiredState: (currentState) => currentState.book && currentState.SD && !currentState.glass,
                nextText: 'W3RC'
            },
            {
                text: 'Check the right door',
                requiredState: (currentState) => currentState.book && currentState.SD && currentState.glass,
                nextText: 'W3RD'
            },
            {
                text: 'Go back outside',
                requiredState: (currentState) => !currentState.glass,
                nextText: 'V-PW'
            },
            {
                text: 'Go back outside',
                requiredState: (currentState) => currentState.glass,
                nextText: 'WT'
            }
        ]
    },
    {
        id: 'W3L',
        location: 'well',
        text: 'You walked to the door on the left, it is a metal door with no opening...',
        options: [
            {
                text: 'Go back',
                nextText: 'W3'
            },
            {
                text: '"Knock on the steel"',
                requiredState: (currentState) => currentState.bookAdvice && !currentState.SD,
                nextText: 'W3LK'
            }
        ]
    },
    {
        id: 'W3LK',
        location: 'well',
        text: 'You came closer to the door and decided to do what the old man suggested....what should you do first?',
        options: [
            {
                text: 'Knock 2 times heavy',
                nextText: 'W3LK2'
            },
            {
                text: 'Knock 2 times light',
                nextText: 'W3LK2'
            },
            {
                text: 'Knock 1 time heavy',
                nextText: 'W3LK2'
            },
            {
                text: 'Knock 3 times light',
                setState: {S1: true},
                nextText: 'W3LK2'
            }
        ]
    },
    {
        id: 'W3LK2',
        location: 'well',
        text: 'What should you do second?',
        options: [
            {
                text: 'Knock 1 time heavy',
                setState: {S1: false},
                nextText: 'W3LK3'
            },
            {
                text: 'Knock 1 time light',
                setState: { S1: false },
                nextText: 'W3LK3'
            },
            {
                text: 'Knock 3 times heavy',
                setState: {S2: true},
                nextText: 'W3LK3'
            },
            {
                text: 'Knock 2 times light',
                setState: { S1: false },
                nextText: 'W3LK3'
            }
        ]
    },
    {
        id: 'W3LK3',
        location: 'well',
        text: 'Finally, what should you do?',
        options: [
            {
                text: 'Knock 1 time heavy',
                setState: {S1: false, S2: false},
                nextText: 'W3LKF'
            },
            {
                text: 'Knock 2 times light',
                requiredState: (currentState) => currentState.S1 && currentState.S2,
                nextText: 'W3LKP'
            },
            {
                text: 'Knock 2 times light',
                requiredState: (currentState) => !currentState.S1 || !currentState.S2,
                nextText: 'W3LKF'
            },
            {
                text: 'Knock 3 times heavy',
                setState: { S1: false, S2: false },
                nextText: 'W3LKF'
            },
            {
                text: 'Knock 4 times light',
                setState: { S1: false, S2: false },
                nextText: 'W3LKF'
            }
        ]
    },
    {
        id: 'W3LKF',
        location: 'well',
        text: '.............Unfortunately nothing happened.......',
        options: [
            {
                text: 'Continue',
                nextText: 'W3L'
            }
        ]
    },
    {
        id: 'W3LKP',
        location: 'well',
        text: '.....................You hear a rumbling of something moving. It seems to have come from the right side',
        options: [
            {
                text: 'Continue',
                setState: { SD: true },
                nextText: 'W3L'
            }
        ]
    },
    {
        id: 'W3LB',
        location: 'well',
        text: 'You came closer to the left door, the metal door has slid open, leading to a staircase going up',
        options: [
            {
                text: 'Climb up the stairs',
                nextText: 'W3LS'
            },
            {
                text: 'Go back',
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3LS',
        location: 'well',
        text: 'You are up stairs and find yourself in a room with a switch and a window',
        options: [
            {
                text: 'Pull the switch',
                nextText: 'W3LSE'
            },
            {
                text: 'Check the window',
                nextText: 'W3LSW'
            },
            {
                text: 'Go back downstairs',
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3LSW',
        location: 'well',
        text: 'You checked the window, you can see downstairs.....Everything seems normal',
        options: [
            {
                text: 'Go back',
                nextText: 'W3LS'
            }
        ]
    },
    {
        id: 'W3LSE',
        location: 'well',
        text: 'You pulled the switch...............You hear a rumble, the entire downtairs has now been flooded with water',
        options: [
            {
                text: 'Continue',
                nextText: 'W3LSS'
            }
        ]  
    },   
    {
        id: 'W3LSS',
        location: 'well',
        text: 'You are upstairs, there is a window, a switch, and a flooded downstairs',
        options: [
            {
                text: 'Pull the switch',
                nextText: 'W3LSS2'
            },
            {
                text: 'Check the window',
                requiredState: (currentState) => !currentState.darkGem && !currentState.lifePotion && !currentState.waterStone,
                nextText: 'W3LSW2'
            },
            {
                text: 'Check the window',
                requiredState: (currentState) => (currentState.darkGem && !currentState.waterStone) || (currentState.lifePotion && !currentState.waterStone),
                nextText: 'W3LSW3'
            },
            {
                text: 'Check the window',
                requiredState: (currentState) => currentState.waterStone,
                nextText: 'W3LSW4'
            },
            {
                text: 'Try to swim downstairs',
                requiredState: (currentState) => !currentState.lifePotion && !currentState.waterStone,
                nextText: 'W3LSF'
            },
            {
                text: 'Use life potion and try to swim downstairs',
                requiredState: (currentState) => currentState.lifePotion && !currentState.waterStone,
                nextText: 'W3LSUW'
            }
        ]
    },
    {
        id: 'W3LSS2',
        location: 'well',
        text: 'You pulled the switch again...............You hear a rumble, the flood has been drained and downstairs is free to walk back',
        options: [
            {
                text: 'Continue',
                nextText: 'W3LS'
            }
        ]
    },
    {
        id: 'W3LSF',
        location: 'well',
        text: 'You tried to swim your way downstairs, unfortunately, you could not hold your breath for too long and drowned......TRY AGAIN',
        options: [
            {
                text: 'Continue (Lifes left: 2)',
                requiredState: (currentState) => currentState.lives === 3,
                setState: { lives: 2 },
                nextText: 'W3LSS'
            },
            {
                text: 'Continue (Lifes left: 1)',
                requiredState: (currentState) => currentState.lives === 2,
                setState: { lives: 1 },
                nextText: 'W3LSS'
            },
            {
                text: 'GAMEOVER, start new game',
                requiredState: (currentState) => currentState.lives === 1,
                nextText: 'N'
            }
        ]
    },
    {
        id: 'W3LSUW',
        location: 'well',
        text: 'You drank the life potion and swam downstairs, right before your breath ran out of air, the Life Potion gave you a burst of stronger energy........',
        options: [
            {
                text: 'Continue',
                nextText: 'W3LSUW2'
            }
        ]
    },
    {
        id: 'W3LSUW2',
        location: 'well',
        text: 'You swim deeper and grabbed the Water Stone, and swim back to the top floor.......HUZZAH, YOU HAVE GAINED THE WATER STONE!',
        options: [
            {
                text: 'Continue',
                setState: { lifePotion: false, waterStone: true},
                nextText: 'W3LSS'
            }
        ]
    },
    {
        id: 'W3LSW2',
        location: 'well',
        text: 'You checked the window, the downstairs is entirely flooded.........WAIT, you see the Water Stone! It is floating on top of the flooding water........hm? There seems to be something stuck in the window frame.',
        options: [
            {
                text: 'Open the window',
                nextText: 'W3DG'
            }
        ]
    },
    {
        id: 'W3DG',
        location: 'well',
        text: 'You slighty opened the window for the object to slip out...........Its a dark gem!',
        options: [
            {
                text: 'Continue',
                setState: { darkGem: true },
                nextText: 'W3LSW3'
            }
        ]
    },
    {
        id: 'W3LSW3',
        location: 'well',
        text: 'You checked the window, downstairs is entirely flooded.........WAIT, you see the Water Stone! It is floating on top of the flooded water.',
        options: [
            {
                text: 'Go Back',
                nextText: 'W3LSS'
            }
        ]
    },
    {
        id: 'W3LSW4',
        location: 'well',
        text: 'You checked the window, the downstairs is entirely flooded.....',
        options: [
            {
                text: 'Go back',
                nextText: 'W3LSS'
            }
        ]
    },
    {
        id: 'W3F',
        location: 'well',
        text: 'You come closer to the fireplace, there seems to be something boiling in the pot, but the flames are too hot to grab it.',
        options: [
            {
                text: 'Throw glass of liquid in the flames',
                requiredState: (currentState) => currentState.glass,
                nextText: 'W3F2'
            },
            {
                text: 'Go back',
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3F2',
        location: 'well',
        text: 'You threw whatever was in that glass of liquid in the flames.............The flames have died down and the boiling pot has stopped.',
        options: [
            {
                text: 'Look at the pot',
                setState: { glass: false },
                nextText: 'W3F3'
            }
        ]
    },
    {
        id: 'W3F3',
        location: 'well',
        text: 'You looked inside the pot, there seems to be a switch underneath it, you pressed it.............................You hear a rumbling sound coming from the left side.',
        options: [
            {
                text: 'Continue',
                setState: { pot: true },
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3FB',
        location: 'well',
        text: 'You came closer to the fireplace, the flames are no more and the pot isnt boiling',
        options: [
            {
                text: 'Go back',
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3R',
        location: 'well',
        text: 'You walked to the door on the right, behind it is a book shelf with a single book on it....',
        options: [
            {
                text: 'Grab the book',
                requiredState: (currentState) => !currentState.book,
                nextText: 'W3B'
            },
            {
                text: 'Go back',
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3B',
        location: 'well',
        text: 'You grabbed the book, its in a langauge you dont understand, maybe theres someone who can read it to you...',
        options: [
            {
                text: 'Continue',
                setState: {book: true},
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3RB',
        location: 'well',
        text: 'You walked to the door on the right, you have taken the book from the book shelf',
        options: [
            {
                text: 'Go back',
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3RC',
        location: 'well',
        text: 'You walked to the door on the right, the book shelf has flipped over, theres a.......glass of water? Its some sort of liquid',
        options: [
            {
                text: 'Drink liquid',
                nextText: 'W3RDW'
            },
            {
                text: 'Take glass of liquid',
                nextText: 'W3RT'
            },
            {
                text: 'Go back',
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3RDW',
        location: 'well',
        text: 'You were pretty thirsty so you decided to drink the glass of what your assuming is water.....................Unfortunately it wasnt drinkable and you got poisoned. TRY AGAIN',
        options: [
            {
                text: 'Continue (Lifes left: 2)',
                requiredState: (currentState) => currentState.lives === 3,
                setState: { lives: 2 },
                nextText: 'W3'
            },
            {
                text: 'Continue (Lifes left: 1)',
                requiredState: (currentState) => currentState.lives === 2,
                setState: { lives: 1 },
                nextText: 'W3'
            },
            {
                text: 'GAMEOVER, start new game',
                requiredState: (currentState) => currentState.lives === 1,
                nextText: 'N'
            }
        ]
    },
    {
        id: 'W3RT',
        location: 'well',
        text: 'You decided to take the glass of whatever this is, it feels very strange....',
        options: [
            {
                text: 'Continue',
                setState: { glass: true },
                nextText: 'W3'
            }
        ]
    },
    {
        id: 'W3RD',
        location: 'well',
        text: 'You walked to the door on the right and have picked up the glass of water',
        options: [
            {
                text: 'Continue',
                nextText: 'W3'
            }
        ]
    },

    {
        id: 'WT',
        location: 'village',
        text: 'You came out of the well but......the glass of liquid has mysteriously dissapeared',
        options: [
            {
                text: 'Continue',
                setState: { glass: false },
                nextText: 'V-PW'
            }
        ]
    },
    {
        id: 'V-PK',
        location: 'village',
        text: '"Stop running away so fast Cindy, i cant tag you", "Try to keep up Tommy", "Hey Gabriel, i heard the well is haunted", "Well I heard you can find a goblin berry tree if you stay left in the forest maze"',
        options: [
            {
                text: 'Go Back',
                nextText: 'V-P'
            }
        ]
    },
    {
        id: 'V-PO',
        location: 'village',
        text: 'Wise old man: Hello there Hero....is there something you would like to talk about?',
        options: [
            {
                text: 'About the Earth Stone',
                nextText: 'V-PO1'
            },
            {
                text: 'About the Fire Stone',
                nextText: 'V-PO2'
            },
            {
                text: 'About the Water Stone',
                requiredState: (currentState) => !currentState.earthStone || !currentState.fireStone,
                nextText: 'V-PO3A'
            },
            {
                text: 'About the Water Stone',
                requiredState: (currentState) => currentState.earthStone && currentState.fireStone,
                nextText: 'V-PO3B'
            },
            {
                text: 'Do you know anything about this book?',
                requiredState: (currentState) => currentState.book,
                nextText: 'V-PO4'
            },
            {
                text: 'Nothing, thank you',
                nextText: 'V-P'
            }
        ]
    },
    {
        id: 'V-PO1',
        location: 'village',
        text: 'Wise old man: The Earth Stone is hidden in the woods, but youll need to find your way through a tricky maze.',
        options: [
            {
                text: 'Continue',
                nextText: 'V-PO'
            }
        ]
    },
    {
        id: 'V-PO2',
        location: 'village',
        text: 'Wise old man: The Fire Stone is hidden in the caves, although without a light source, it would be futile to go there now.',
        options: [
            {
                text: 'Continue',
                nextText: 'V-PO'
            }
        ]
    },
    {
        id: 'V-PO3A',
        location: 'village',
        text: 'Wise old man: Nobody knows anything about the Water Stone right now, come back when you find the other 2 first',
        options: [
            {
                text: 'Continue',
                nextText: 'V-PO'
            }
        ]
    },
    {
        id: 'V-PO3B',
        location: 'village',
        text: 'Wise old man: Ah I see your back with both the Fire Stone and Earth Stone. Ive done some reading and found out that the Water Stone is deep in an underground dungeon that is only accessible to those that have the Mirror of Truth. Where to find such a thing is a mystery unfortunately, however i have read that a forest goblin should know. If you can find one, ask him about it.',
        options: [
            {
                text: 'Continue',
                setState: { advice: true},
                nextText: 'V-PO'
            }
        ]
    },
    {
        id: 'V-PO4',
        location: 'village',
        text: 'Wise old man: I do, let me take a look, hmmm................Ah! It says "Knock on the Steel, 3 light, 3 heavy, 2 light no order more" Do you know what this could be referring to?',
        options: [
            {
                text: 'Continue',
                setState: { bookAdvice: true },
                nextText: 'V-PO'
            }
        ]
    }
]