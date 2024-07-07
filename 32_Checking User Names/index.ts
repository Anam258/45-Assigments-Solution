// Array of Current Users
let current_users: string[] = ["khaula", "ANAM", "marium", "zainab", "amna"];

// Array of New Users 
let new_users: string[] = ["Khaula", "sara", "fariha", "anam", "tayyaba"];

// loop through new_users to check for usernames availability 
new_users.forEach(newUser => {
    let our_condition = current_users.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())
    if (our_condition) {
        console.log(`${newUser} will need to enter a new username.`);
    } else {
        console.log(`${newUser} is available.`);
    }
});