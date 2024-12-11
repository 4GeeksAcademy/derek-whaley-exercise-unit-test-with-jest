// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // Return the dollar value
    return valueInDollar;
};

// Function to convert from Dollar to Yen
const fromDollarToYen = function(valueInDollar) {
    // Convert the given valueInDollar to Yen
    let valueInYen = valueInDollar * (156.5 / 1.07);
    // Return the Yen value
    return valueInYen;
};

// Function to convert from Yen to Pound
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInYen to Pounds
    let valueInPound = valueInYen * (0.87 / 156.5);
    // Return the Pound value
    return valueInPound;
};

// This is my function that sums two numbers
const sum = (a, b) => {
    return a + b;
};

// Just a console log for ourselves
console.log(sum(7, 3));

// Export the function to be used on other files
// (similar to the keyword "export" when using webpack)
// We include fromEuroToDollar here as well because it needs to be exported
// Now includes all conversions
module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound };