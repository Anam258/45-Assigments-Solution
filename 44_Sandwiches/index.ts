function makeSandwich(...items: string[]): void {
    console.log(`Making a sandwich with: ${items.join(', ')}.`);
}

// Example usage
makeSandwich("peanut butter", "jelly");
makeSandwich("chicken", "BBQ sauce", "cheese");
makeSandwich("beef", "cheddar cheese", "Spicy sauce");
makeSandwich("carrot", "cucumber", "red pepper", "spinach");
makeSandwich("grilled cheese");
