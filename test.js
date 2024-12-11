// Import the function sum from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", () => {
    // Use the function like it’s supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be 3.5 * 1.07
    const expected = 3.5 * 1.07;

    // This is the comparison for the unit test
    expect(dollars).toBe(expected);
});

test("One dollar should be 156.5 yen", () => {
    // Use the function like it’s supposed to be used
    const yen = fromDollarToYen(3.5);

    // If 1 dollar is 156.5 / 1.07 yen, then 3.5 dollars should be 3.5 * (156.5 / 1.07)
    const expected = 3.5 * (156.5 / 1.07);

    // This is the comparison for the unit test
    expect(yen).toBe(expected);
});

test("One yen should be 0.87 / 156.5 pounds", () => {
    // Use the function like it’s supposed to be used
    const pounds = fromYenToPound(156.5);

    // If 1 yen is 0.87 / 156.5 pounds, then 156.5 yen should be 156.5 * (0.87 / 156.5)
    const expected = 156.5 * (0.87 / 156.5);

    // This is the comparison for the unit test
    expect(pounds).toBe(expected);
});