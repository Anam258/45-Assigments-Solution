function makeSandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log("Making a sandwich with: ".concat(items.join(', '), "."));
}
// Example usage
makeSandwich("peanut butter", "jelly");
makeSandwich("chicken", "BBQ sauce", "cheese");
makeSandwich("beef", "cheddar cheese", "Spicy sauce");
makeSandwich("carrot", "cucumber", "red pepper", "spinach");
makeSandwich("grilled cheese");
