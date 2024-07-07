var guests = ["Aqsa", "Ayesha", "Sara", "faiza"];
console.log("\"Great News\" I found a bigger dinner table");
//adding more guest 
guests.unshift("Tuba");
guests.push("Zainab");
var middleIndex = Math.floor(guests.length / 2);
guests.splice(middleIndex, 0, "Khaula");
guests.forEach(function (guest) { return console.log("Hello friend ".concat(guest, ", would you like to join me for dinner today?")); });
