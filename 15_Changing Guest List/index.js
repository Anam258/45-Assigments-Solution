var guests = ["Aqsa", "Ayesha", "Sara", "faiza"];
var unabletoAttend = [1];
guests.splice(1, 1, "Mariyam");
guests.forEach(function (guest) { return console.log("Hello Dear ".concat(guest, ", would you like to join me for dinner today?")); });
