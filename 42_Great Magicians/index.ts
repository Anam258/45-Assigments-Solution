// Define a function to add "the Great" to each magician's name
function makeGreat(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = `the Great ${magicians[i]}`;
    }
}

// Define a function to display magician names
function showMagicians(magicians: string[]): void {
    magicians.forEach(magician => {
        console.log(magician);
    });
}

// Example usage
let magicians: string[] = ["Anam", "Aqsa", " Barina", "Zara", "Ramiya"];


// Modify the magician names
makeGreat(magicians);

// Call the function to display modified magician names
showMagicians(magicians);
