let guests : string[] = ["Aqsa", "Ayesha", "Sara","faiza"];
let unabletoAttend =[1];
guests.splice(1,1, "Mariyam");
guests.forEach(guest => console.log(`Hello Dear ${guest}, would you like to join me for dinner today?`));
