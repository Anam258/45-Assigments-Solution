function shirt(size: number = 38, message: string = "I Coding") {
    console.log(`I have T- Shirt with a size of: ${size}, \n & messege prints on it is: "${message}"`);
}

shirt(); // Default large and message
shirt(35); // Default message, medium size
shirt(17, "I love Pakistan"); // Custom message, small size