let guests : string[] = ["Aqsa", "Ayesha", "Sara","faiza"];
 
// adding more guest 
guests.unshift("Tuba");
let middleIndex : number = Math.floor(guests.length/2)
 guests.splice(middleIndex,0,"Khaula");
 guests.push("Zainab");

//invite only 2 people 
console.log("Unfortunately, I can only invite two people for dinner.");

while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}

guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});



