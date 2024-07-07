// Define a function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): string[] {
    let greatMagicians = magicians.map(magician => `the Great ${magician}`);
    return greatMagicians;
}

// Define a function to display magician names
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Example usage
let originalMagicians: string[] = ["Khaula", "Anam", "maryam", "Zainab", "Amna"];

// Create a new list with "the Great" added to each name
let greatMagicians = makeGreat(originalMagicians);

// Display the original magician names
console.log("Original Magicians:");
showMagicians(originalMagicians);

// Display the modified magician names
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
