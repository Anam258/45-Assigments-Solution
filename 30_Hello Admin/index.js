var usernames = ["admin", "Teacher", "TA", "Senior Student", "Student"];
usernames.forEach(function (username) {
    if (username === "admin") {
        console.log("Hello admin, would you like to give me a chance for participate in Online Sessions?");
    }
    else {
        console.log("Hello ".concat(username, ", thank you for reaching out to me."));
    }
});
