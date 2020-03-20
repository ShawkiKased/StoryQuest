export const story = [

    {
        id: 0,
        location: 'kingdom',
        text: '*Instructions* Read through your adventure and use your mouse to click on the choice. Everything has a purpose, a cave needs a lanturn, so if you do not have one, you will not be able to progress, explore and discover ways to solve the puzzles each dungeon brings!',
        options: [
            {
                text: 'Start Game!',
                nextText: 'I'
            }
        ]
    },
    {
        id: 'I',
        location: 'kingdom',
        text: 'Queen Elizabeth: Welcome Hero, we need your help,the evil King Shawki is ruling the Kingdom with an iron fist! We need someone who is both brave and smart! You will need to traverse the Kingdom in search of the elemental stones that can make you strong enough to face him! Good Luck and be careful on your long journey Hero!',
        options: [
            {
                text: 'Start!',
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
                text: 'The Woods',
                nextText: 'W1'
            },
            {
                text: 'The Caves',
                nextText: 'W2'
            },
            {
                text: 'The Village',
                nextText: 'V'
            },
            {
                text: 'The Tower of King Shawki',
                requiredState: (currentState) => currentState.earthStone && currentState.waterStone && currentState.fireStone,
                nextText: 'W4'
            }
        ]
    },
    {
        id: 'W1',
        location: 'forest',
        text: 'You find yourself in a deep forest, you see a sign that warns of a maze.',
        options: [
            {
                text: 'Continue Forward!',
                nextText: 'W1M'
            },
            {
                text: 'Go Back to Map',
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
                text: 'Continue Straight',
                nextText: 'W1M-1'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-2'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-3'
            },
            {
                text: 'Talk to Goblin',
                nextText: 'W1G'
            },
            {
                text: 'Go Back',
                nextText: 'W1'
            }
        ]
    },
    {
        id: 'W1M-E',
        location: 'forest',
        text: 'You see a bright light shine on you through the path, but alas, you are mysteriously back at the Maze Entrance',
        options: [
            {
                text: 'Continue',
                nextText: 'W1M'
            }
        ]
    },
    {
        id: 'W1M-1',
        location: 'forest',
        text: 'You started Straight and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-1-1'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-1-2'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-1-3'
            }
        ]
    },
    {
        id: 'W1M-1-1',
        location: 'forest',
        text: 'You went Straight again and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-1-2',
        location: 'forest',
        text: 'You went Left and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-1-3',
        location: 'forest',
        text: 'You went Right and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-S'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-S',
        location: 'forest',
        text: 'You find yourself....in a field of flowers, in front of you is a pedastal which seems to contain the EarthStone',
        options: [
            {
                text: 'Grab EarthStone',
                requiredState: (currentState) => !currentState.earthStone && !currentState.goblinBlessing,
                nextText: 'W1M-S1'
            },
            {
                text: 'Grab EarthStone',
                requiredState: (currentState) => currentState.goblinBlessing && !currentState.earthStone,
                nextText: 'W1M-S2'
            },
            {
                text: 'You have already Taken the stone, Note: "Right Right Left" Continue',
                requiredState: (currentState) => currentState.earthStone,
                nextText: 'W1M'
            }
        ]
    },
    {
        id: 'W1M-S1',
        location: 'forest',
        text: 'You go for the Stone only to see it covered in a force field, theres a note "Get the Goblins blessing for the stone"',
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
        text: 'You reach for the stone, and HUZZAH, your grabbed it: EARTHSTONE ACQUIRED!............................hm? There seems to be a note under the stone...."Right Right Left"',
        options: [
            {
                text: 'Continue',
                setState: {earthStone: true},
                nextText: 'W1M'
            }
        ]
    },
    {
        id: 'W1M-2',
        location: 'forest',
        text: 'You Started Left and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-2-1'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-2-2'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-2-3'
            }

        ]
    },
    {
        id: 'W1M-2-1',
        location: 'forest',
        text: 'You went Straight and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-2-2',
        location: 'forest',
        text: 'You went Left again and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-GB'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-GB',
        location: 'forest',
        text: 'You find a tree, it seems to be carrying Goblin Berries',
        options: [
            {
                text: 'Take the Berries and Continue',
                setState: { goblinBerry: true },
                nextText: 'W1M'
            },
            {
                text: 'Continue without Berries',
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
                text: 'Continue Straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-3',
        location: 'forest',
        text: 'You Started Right and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-3-1'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-3-2'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-3-3'
            }
        ]
    },
    {
        id: 'W1M-3-1',
        location: 'forest',
        text: 'You went Straight and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-3-2',
        location: 'forest',
        text: 'You went Left and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-3-3',
        location: 'forest',
        text: 'You went Right again and find 3 more paths',
        options: [
            {
                text: 'Continue Straight',
                nextText: 'W1M-E'
            },
            {
                text: 'Continue Left',
                nextText: 'W1M-SF'
            },
            {
                text: 'Continue Right',
                nextText: 'W1M-E'
            }
        ]
    },
    {
        id: 'W1M-SF',
        location: 'forest',
        text: 'You find a tree, and it seems to contain Star Fruit',
        options: [
            {
                text: 'Take the Star Fruit and Continue',
                setState: { starFruit: true },
                nextText: 'W1M'
            },
            {
                text: 'Continue without taking Star Fruit',
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
                text: 'Maze Entrance',
                nextText: 'W1M'
            },
            {
                text: 'Give Goblin GoblinBerries',
                requiredState: (currentState) => currentState.goblinBerry,
                nextText: 'W1GE'
            },
            {
                text: 'Ask about Mirror Of Truth',
                requiredState: (currentState) => currentState.advice,
                nextText: 'W1G2'
            }
        ]
    },
    {
        id: 'W1GE',
        location: 'forest',
        text: 'Goblin: *MUNCH MUNCH MUNCH MUNCH MUNCH* STRAIGHT *MUNCH MUNCH MUNCH* RIGHT *MUNCH MUNCH MUNCH* LEFT *MUNCH MUNCH MUNCH MUNCH, PLEASE TAKE MY BLESSING*',
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
        text: 'Goblin: Oh, for THAT im gonna need TWO Delicious things at the same time, hehehe',
        options: [
            {
                text: 'Return to Maze',
                nextText: 'W1M'
            },
            {
                text: 'Give Both Goblin Berries and Star Fruit',
                requiredState: (currentState) => currentState.starFruit && currentState.goblinBerry,
                nextText: 'W1G3'
            }
        ]
    },
    {
        id: 'W1G3',
        location: 'forest',
        text: 'Goblin: *MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH* SO DELICIOUS *MUNCH MUNCH MUNCH MUNCH MUNCH* SO JUICY *MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH MUNCH* Okay Okay Okay okay, listen carefully, have you been to the mines? Theres a giant hole with some creature in it. Your going to have to give him Golden Goblin Berries, he really hates normal ones. I heard you can find them deep in the caves, near the FireStone. Try looking for something suspicious',
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
                text: 'Return to Map',
                nextText: 1
            },
            {
                text: 'Use Lantern',
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
        text: 'Going deeper in the cave, you find yourself in the Mines. There are 2 two paths and a minecart in the middle',
        options: [
            {
                text: 'Go to the Left',
                requiredState: (currentState) => !currentState.lever,
                nextText: 'W2L1'
            },
            {
                text: 'Go to the Left',
                requiredState: (currentState) => currentState.lever,
                nextText: 'W2L3'
            },
            {
                text: 'Get closer to the Minecart',
                requiredState: (currentState) => !currentState.minecart,
                nextText: 'W2M'
            },
            {
                text: 'Get Closer to the Minecart',
                requiredState: (currentState) => currentState.minecart,
                nextText: 'W2MS'
            },
            {
                text: 'Go to the Right',
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
        text: 'You come closer to the left Path but a big boulder is blocking the way, your going to need to smash it somehow',
        options: [
            {
                text: 'Go Back',
                nextText: 'W2E'
            },
            {
                text: 'Use Hammer',
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
        text: 'You use your Hammer to smash the boulder into pieces. Behind it lays a minecart lever',
        options: [
            {
                text: 'Take Minecart Lever',
                setState: { lever: true },
                nextText: 'W2E'
            }
        ]

    },
    {
        id: 'W2M',
        location: 'mine',
        text: 'You came closer to the Minecart, looks like it could be rideable, but the lever is missing',
        options: [
            {
                text: 'Go Back',
                nextText: 'W2E'
            },
            {
                text: 'Place Lever',
                requiredState: (currentState) => currentState.lever,
                nextText: 'W2M2'
            }
        ]

    },
    {
        id: 'W2M2',
        location: 'mine',
        text: 'You placed the Lever in the Minecart, you can now ride on it',
        options: [
            {
                text: 'Continue',
                setState: { minecart: true},
                nextText: 'W2MS'
            }
        ]
    },
    {
        id: 'W2MS',
        location: 'mine',
        text: 'Would you like to ride the Minecart?',
        options: [
            {
                text: 'Ride the Minecart',
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
        text: 'You got on the Minecart and rode forward, its time to be careful, proceed with caution...',
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
        text: 'You crashed and got knocked out......Try Again',
        options: [
            {
                text: 'Continue',
                nextText: 1
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
                text: 'Use your Hammer',
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
                text: 'Use your Hammer',
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
                text: 'Use your Hammer',
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
        text: 'You didnt do anything and the trolls end up crashing into each other. Behind you is a minecart with a bomb coming close to you and following behind....',
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
                text: 'Use your Hammer',
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
        text: 'You used your Hammer to knock the bomb out of the incoming cart. Your minecart has reached its destination, the stress is over.',
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
        text: 'You reached a pedastal......It has the FireStone in it, HUZZAH!',
        options: [
            {
                text: 'Ride Minecart Back',
                setState: { fireStone: true },
                nextText: 'W2E'
            }
        ]
    },
    {
        id: 'W2MSEnd2',
        location: 'mine',
        text: 'You have already taken the FireStone, the only thing here is the pedastal and a wall',
        options: [
            {
                text: 'Ride Minecart Back',
                nextText: 'W2E'
            },
            {
                text: 'Observe Wall',
                requiredState: (currentState) => currentState.goblinAdvice && !currentState.wall,
                nextText: 'W2W'
            },
            {
                text: 'Observe Broken Wall',
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
                text: 'Go Back',
                nextText: 'W2MSEnd2'
            },
            {
                text: 'Use your Hammer on the crack',
                nextText: 'W2W2'
            }
        ]
    },
    {
        id: 'W2W2',
        location: 'mine',
        text: 'You used your Hammer on the crack, you busted a hole and see that theres a room behind it. You smashed it again and busted a new room',
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
        text: 'You come up to a new room with a golden tree, it contains Gold Goblin Berries',
        options: [
            {
                text: 'Grab Golden Berries and Go Back',
                setState: { goldenBerry: true },
                nextText: 'W2MSEnd2'
            }
        ]
    },
    {
        id: 'W2R',
        location: 'mine',
        text: 'You find a big hole in the ground, it seems dangerous, but as you come close, you hear a faint voice......"Feed Me"',
        options: [
            {
                text: 'Go Back',
                nextText: 'W2E'
            },
            {
                text: 'Throw Goblin Berries in the hole',
                requiredState: (currentState) => currentState.goblinBerry,
                nextText: 'W2RG1'
            },
            {
                text: 'Throw Star Fruit in the hole',
                requiredState: (currentState) => currentState.starFruit && (!currentState.rubyGem && !currentState.hammer),
                nextText: 'W2RS1'
            },
            {
                text: 'Throw Golden Goblin Berries in the hole',
                requiredState: (currentState) => currentState.goldenBerry,
                nextText: 'W2RGG'
            }
        ]
    },
    {
        id: 'W2RG1',
        location: 'mine',
        text: 'You threw the Goblin Berries in the hole.....................',
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
        text: 'You threw the Star Fruit in the hole........................',
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
        text: 'You hear the voice again, "THANK YOU, IM STARVING, TAKE THIS", the Ruby Gem is thrown out of hole!',
        options: [
            { 
                text: 'Take Ruby Gem',
                setState: { rubyGem: true },
                nextText: 'W2E'
            }
        ]
    },
    {
        id: 'W2RGG',
        location: 'mine',
        text: 'You threw the Golden Goblin Berries in the hole...............',
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
        text: 'You hear the voice again, "OH MY GOD, OOOOOOOH MYYYYY GOOOOOOD, GOLDEN GOBLIN BERRIES? AWWWWW YEEEEEEEEEEESSS THANK YOU, TAKE THIS, AND BE CAREFUL OF THE MONSTERS NEAR THE WELL", the Mirror Of Truth was thrown out of the hole',
        options: [
            {
                text: 'Take Mirror Of Truth',
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
                text: 'Go to the Shop',
                nextText: 'V-S'
            },
            {
                text: 'Talk to the Village Folk',
                nextText: 'V-P'
            },
            {
                text: 'Go Back to Map',
                nextText: 1
            }
        ]
    },
    {
        id: 'V-S',
        location: 'village',
        text: 'ShopKeeper: Welcome Hero! Take a look at my wares, anything fits your fancy for your Adventure?',
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
                text: 'Life Potion',
                requiredState: (currentState) => !currentState.lifePotion,
                nextText: 'V-SP'
            },
            {
                text: 'Nothing, Thank You',
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
                text: 'Trade Star Fruit for Lanturn',
                requiredState: (currentState) => currentState.starFruit,
                setState: { starFruit: false, lanturn: true},
                nextText: 'V-S'
            }
        ]
    },
    {
        id: 'V-SH',
        location: 'village',
        text: 'ShopKeeper: I will trade you a Hammer for a Ruby Gem',
        options: [
            {
                text: 'Back',
                nextText: 'V-S'
            },
            {
                text: 'Trade Ruby Gem for Hammer',
                requiredState: (currentState) => currentState.rubyGem,
                setState: { rubyGem: false, hammer: true },
                nextText: 'V-S'
            }
        ]
    },
    {
        id: 'V-SP',
        location: 'village',
        text: 'ShopKeeper: I will trade you a Life Potion for a Dark Stone',
        options: [
            {
                text: 'Back',
                nextText: 'V-S'
            },
            {
                text: 'Trade Dark Stone for Life Potion',
                requiredState: (currentState) => currentState.darkStone,
                setState: { darkStone: false, lifePotion: true },
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
                text: 'Lovely Couple by the well',
                requiredState: (currentState) => !currentState.well,
                nextText: 'V-PL'
            },
            {
                text: 'To the Well',
                requiredState: (currentState) => currentState.well,
                nextText: 'V-PW'
            },
            {
                text: 'Children that are playing',
                nextText: 'V-PK'
            },
            {
                text: 'Wise Old Man reading',
                nextText: 'V-PO'
            },
            {
                text: 'Go Back',
                nextText: 'V'
            }
        ]
    },
    {
        id: 'V-PL',
        location: 'village',
        text: 'Lovely Couple: Can you not bother us please? We are enjoying our company in these dark days',
        options: [
            {
                text: 'Go Back',
                nextText: 'V-P'
            },
            {
                text: 'Use the Mirror Of Truth',
                requiredState: (currentState) => currentState.mirror,
                nextText: 'VPLW'
            }
        ]
    },
    {
        id: 'VPLW',
        location: 'village',
        text: 'You used your Mirror Of Truth, the "Lovely Couple" have suddenly turned into monsters',
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
        text: 'Bad Choice, the monsters managed to attack you and knock you out...........Try Again',
        options: [
            {
                text: 'Continue',
                nextText: 1
            }
        ]
    },
    {
        id: 'VPLW2',
        location: 'village',
        text: 'Monsters: "What the!? He figured us out, lets get em!" The monsters charge towards you.....',
        options: [
            {
                text: 'Use Hammer',
                nextText: 'VPLWF'
            },
            {
                text: 'Use Lantern',
                nextText: 'VPLW3'
            },
            {
                text: 'Dodge Attack',
                nextText: 'VPLWF'
            }
        ]
    },
    {
        id: 'VPLW3',
        location: 'village',
        text: 'You used the Lanturn to blind the monsters, nows your chance!',
        options: [
            {
                text: 'Use Hammer',
                nextText: 'VPLWF4',
            }
        ]
    },
    {
        id: 'VPLWF4',
        location: 'village',
        text: 'You knocked the monsters out with your Hammer, they are defeated! The well has now changed, a set of stairs have appeared going underground.....',
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
                text: 'Go down the Well',
                nextText: 'W3',
            },
            {
                text: 'Go Back',
                nextText: 'V-P'
            }
        ]
    },
    {
        id: 'V-PK',
        location: 'village',
        text: '"Stop running away so fast Cindy, i cant tag you", "Try to keep up Tommy", "Hey Gabriel, i heard the well is haunted", "Well I heard you can find a GoblinBerry Tree if you stay left in the forest Maze"',
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
        text: 'Wise Old Man: Hello there Hero....is there something you would like to talk about?',
        options: [
            {
                text: 'About the EarthStone',
                nextText: 'V-PO1'
            },
            {
                text: 'About the FireStone',
                nextText: 'V-PO2'
            },
            {
                text: 'About the WaterStone',
                requiredState: (currentState) => !currentState.earthStone || !currentState.fireStone,
                nextText: 'V-PO3A'
            },
            {
                text: 'About the WaterStone',
                requiredState: (currentState) => currentState.earthStone && currentState.fireStone,
                nextText: 'V-PO3B'
            },
            {
                text: 'Nothing, Thank You',
                nextText: 'V-P'
            }
        ]
    },
    {
        id: 'V-PO1',
        location: 'village',
        text: 'Wise Old Man: The EarthStone is hidden in the woods, but youll need to find your way through a tricky maze.',
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
        text: 'Wise Old Man: The FireStone is hidden in the caves, although without a light source, it would be futile to go there now.',
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
        text: 'Wise Old Man: Nobody knows anything about the Water Stone right now, come back when you find the other 2 first',
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
        text: 'Wise Old Man: Ah I see your back with both the FireStone and EarthStone. Ive done some reading and found out that the WaterStone is deep in an underground dungeon that is only accessible to those that have the Mirror Of Truth. Where to find such a thing is a mystery unfortunately, however i have read that a Forest Goblin should know. If you can find one, ask him about it.',
        options: [
            {
                text: 'Continue',
                setState: { advice: true},
                nextText: 'V-PO'
            }
        ]
    }
]