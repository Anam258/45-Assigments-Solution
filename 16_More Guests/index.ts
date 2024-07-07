let guests : string[] = ["Aqsa", "Ayesha", "Sara","faiza"];

console.log(`"Great News" I found a bigger dinner table`);
//adding more guest 
guests.unshift("Tuba");
guests.push("Zainab");
let middleIndex : number = Math.floor (guests.length/2)
guests.splice(middleIndex,0,"Khaula");
guests.forEach(guest => console.log(`Hello friend ${guest}, would you like to join me for dinner today?`)
);
