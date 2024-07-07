// Define a function to add "the Great" to each magician's name
function makeGreat(magicians) {
    for (var i = 0; i < magicians.length; i++) {
        magicians[i] = "the Great ".concat(magicians[i]);
    }
}
// Define a function to display magician names
function showMagicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Example usage
var magicians = ["Anam", "Aqsa", " Barina", "Zara", "Ramiya"];
// Modify the magician names
makeGreat(magicians);
// Call the function to display modified magician names
showMagicians(magicians);
