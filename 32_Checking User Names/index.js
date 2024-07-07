// Array of Current Users
var current_users = ["khaula", "ANAM", "marium", "zainab", "amna"];
// Array of New Users 
var new_users = ["Khaula", "sara", "fariha", "anam", "tayyaba"];
// loop through new_users to check for usernames availability 
new_users.forEach(function (newUser) {
    var our_condition = current_users.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); });
    if (our_condition) {
        console.log("".concat(newUser, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUser, " is available."));
    }
});
