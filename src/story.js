
export const story = [
    { m: "Hello There Beautiful Person! ;)" },
    { m: "Welcome to Story Quest! An Adventure awaits, and it needs your smart brain!" },
    {question: "Do you like to read?", answers: [
        { m: "Yes", next: "like_yes"},
        { m: "Not Thrilled", next: "like_not"} ]
    },
    { label: "like_yes", m: "Great, cause your gonna need it for this story based game!"},
    { label: "like_not", m: "Well, you better sharpen those skills, your gonna need it for this story based game!"},
    { m: "Moving on then..."}
];