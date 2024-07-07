function shirt(size, message) {
    if (size === void 0) { size = 38; }
    if (message === void 0) { message = "I am Pakistani"; }
    console.log("I have T- Shirt with a size of: ".concat(size, ", \n & messege prints on it is: \"").concat(message, "\""));
}
shirt(); // Default large and message
shirt(35); // Default message, medium size
shirt(17, "I like Coding"); // Custom message, small size
