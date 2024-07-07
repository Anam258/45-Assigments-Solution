let guests : string[] = ["Aqsa", "Ayesha", "Sara","faiza"];
//add guest at the begining Index of the array 
guests.unshift("Tuba");
//add guest at the ending Index of the array 
guests.push("Zainab");
//set middle Index
let middleIndex : number = Math.floor (guests.length/2)
//add guest at the middle Index of the array 
guests.splice(middleIndex,0,"Khaula");
//print the lenght (quantity) of total guests
console.log(`I invited ${guests.length} guest at dinner`);
