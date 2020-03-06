export const story = [
    {
        id: 0,
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
        text: 'You reach for the stone, and HUZZAH, your grabbed it: EARTHSTONE ACQUIRED, TWO MORE STONES LEFT!............................hm? There seems to be a note under the stone...."Right Right Left"',
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
            }
        ]
    },
    {
        id: 'W1GE',
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
        id: 'W2',
        text: 'You went inside the cave, however it is really dark and impossible to see forward',
        options: [
            {
                text: 'Go Back to Map',
                nextText: 1
            },
            {
                text: 'Use Lantern',
                requiredState: (currentState) => currentState.lanturn,
                nextText: 'W2-1'
            }
        ]
    },
    {
        id: 'V',
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
        text: 'ShopKeeper: I will trade you a Life Potion for a Dark Stone',
        options: [
            {
                text: 'Back',
                nextText: 'V-S'
            },
            {
                text: 'Trade Dark Stone for Hammer',
                requiredState: (currentState) => currentState.darkStone,
                setState: { darkStone: false, lifePotion: true },
                nextText: 'V-S'
            }
        ]
    },
    {
        id: 'V-P',
        text: 'You go to the center of the village and see the village folk doing their daily routines. Who would you like to talk to?',
        options: [
            {
                text: 'Lovely Couple by the well',
                nextText: 'V-PL'
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
        text: 'Lovely Couple: Can you not bother us please? We are enjoying our company in these dark days',
        options: [
            {
                text: 'Go Back',
                nextText: 'V-P'
            }
        ]
    },
    {
        id: 'V-PK',
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
        text: 'Wise Old Man: Nobody knows anything about the Water Stone right now, come back when you find the other 2 first',
        options: [
            {
                text: 'Continue',
                nextText: 'V-PO'
            }
        ]
    }
]