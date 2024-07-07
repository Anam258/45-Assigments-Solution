var guests = ["Aqsa", "Ayesha", "Sara", "faiza"];
// adding more guest 
guests.unshift("Tuba");
guests.splice(2, 0, "Khaula");
guests.push("Zainab");
//invite only 2 people 
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    var removedGuest = guests.pop();
    console.log("Sorry, ".concat(removedGuest, ", I can't invite you to dinner."));
}
guests.forEach(function (guest) {
    console.log("Dear ".concat(guest, ", you're still invited to dinner."));
});
