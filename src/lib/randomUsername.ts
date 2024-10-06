export default function randomUsername() {
    const adjectives = [
        "admiring", "adoring", "affectionate", "agitated", "amazing", "angry",
        "blissful", "boring", "brave", "clever", "cool", "compassionate",
        "confident", "determined", "distracted", "dreamy", "eager", "ecstatic",
        "elastic", "elated", "elegant", "festive", "fervent", "gallant",
        "gifted", "gracious", "happy", "hardcore", "hopeful", "hungry",
        "infallible", "inspiring", "jolly", "jovial", "keen", "kind",
        "laughing", "loving", "mystifying", "modest", "naughty", "nifty",
        "nervous", "peaceful", "practical", "quirky", "recursing", "relaxed",
        "reverent", "serene", "stoic", "suspicious", "tender", "thirsty",
        "trusting", "unruffled", "upbeat", "vibrant", "vigilant", "wizardly"
    ];

    const nouns = [
        "panda", "tiger", "unicorn", "phoenix", "dragon", "wolf", "eagle",
        "whale", "dolphin", "lion", "shark", "bear", "falcon", "hawk",
        "octopus", "penguin", "raven", "butterfly", "swan", "zebra"
    ];

    const randomAdjective = adjectives[Math.floor(Math.random() * adjectives.length)];
    const randomNoun = nouns[Math.floor(Math.random() * nouns.length)];

    return `${randomAdjective} ${randomNoun}`;
}
