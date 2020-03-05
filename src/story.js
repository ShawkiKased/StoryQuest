export const story = [
    {
        id: 1,
        text: 'Queen Elizabeth: Welcome Hero, we need your help,the evil King Shawki is ruling the Kingdom with an iron fist! We need someone who is both brave and smart! You will need to traverse the Kingdom in search of the elemental stones that can make you strong enough to face him! Good Luck and be careful on your long journey Hero!',
        options: [
            {
                text: 'Start!',
                nextText: 2
            }
        ]
    },
    {
        id: 2,
        text: 'Where would you like to go hero?',
        options: [
            {
                text: 'The Woods',
                nextText: 3
            },
            {
                text: 'The Caves',
                nextText: 4
            },
            {
                text: 'The Village',
                nextText: 5
            },
            {
                text: 'The Tower of King Shawki',
                requiredState: (currentState) => currentState.earthStone && currentState.waterStone && currentState.fireStone,
                nextText: 6
            }
        ]
    }
]