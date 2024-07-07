var usernames = ["Anam", "Marium", "Amna"];
usernames = [];
if (usernames.length === 0) {
    console.log("We need to find some users!");
}
else {
    usernames.forEach(function (username) {
        console.log("Hello ".concat(username, ", How are you?"));
    });
}
