var Name = "anam Anwer";
console.log(Name.toLowerCase());
console.log(Name.toUpperCase());
console.log(Name.replace(/\b\w/g, function (char) { return char.toUpperCase(); }));
