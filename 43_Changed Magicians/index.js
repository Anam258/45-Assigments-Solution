// Define a function to add "the Great" to each magician's name
function makeGreat(magicians) {
    var greatMagicians = magicians.map(function (magician) { return "the Great ".concat(magician); });
    return greatMagicians;
}
// Define a function to display magician names
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Example usage
var originalMagicians = ["Khaula", "Anam", "maryam", "Zainab", "Amna"];
// Create a new list with "the Great" added to each name
var greatMagicians = makeGreat(originalMagicians);
// Display the original magician names
console.log("Original Magicians:");
showMagicians(originalMagicians);
// Display the modified magician names
console.log("\nGreat Magicians:");
showMagicians(greatMagicians);
