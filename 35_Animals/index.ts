// Array of animals with their types
let animals = [
    { name: "Lion", type: "Wild" },
    { name: "Snake", type: "Wild" },
    { name: "Dolphin", type: "Pet" },
    { name: "Cat", type: "Pet" },
    { name: "Fox", type: "Wild"},
    {name: "Dog", type: "Pet"}
];

// Loop through each animal
animals.forEach(animal => {
    // Check if the animal is a mammal
    if (animal.type === "Wild") {
        console.log(`${animal.name} is a a wild animal.`);
    } else {
        console.log(`${animal.name} is a pet animal.`);
    }
});
