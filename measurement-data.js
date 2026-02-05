// Measurement and Unit Conversion Problems
// Organized by difficulty level

const measurementProblems = {
    easy: [
        // Time Conversions - Easy
        {
            question: "How many seconds are in 1 minute?",
            answer: 60,
            unit: "seconds",
            category: "Time"
        },
        {
            question: "How many minutes are in 1 hour?",
            answer: 60,
            unit: "minutes",
            category: "Time"
        },
        {
            question: "How many hours are in 1 day?",
            answer: 24,
            unit: "hours",
            category: "Time"
        },
        {
            question: "How many days are in 1 week?",
            answer: 7,
            unit: "days",
            category: "Time"
        },
        {
            question: "How many months are in 1 year?",
            answer: 12,
            unit: "months",
            category: "Time"
        },
        {
            question: "How many days are in 2 weeks?",
            answer: 14,
            unit: "days",
            category: "Time"
        },
        {
            question: "How many hours are in 2 days?",
            answer: 48,
            unit: "hours",
            category: "Time"
        },

        // Length - Easy (Customary)
        {
            question: "How many inches are in 1 foot?",
            answer: 12,
            unit: "inches",
            category: "Length"
        },
        {
            question: "How many feet are in 1 yard?",
            answer: 3,
            unit: "feet",
            category: "Length"
        },
        {
            question: "How many inches are in 2 feet?",
            answer: 24,
            unit: "inches",
            category: "Length"
        },
        {
            question: "How many feet are in 3 yards?",
            answer: 9,
            unit: "feet",
            category: "Length"
        },

        // Length - Easy (Metric)
        {
            question: "How many centimeters are in 1 meter?",
            answer: 100,
            unit: "centimeters",
            category: "Length (Metric)"
        },
        {
            question: "How many meters are in 1 kilometer?",
            answer: 1000,
            unit: "meters",
            category: "Length (Metric)"
        },
        {
            question: "How many millimeters are in 1 centimeter?",
            answer: 10,
            unit: "millimeters",
            category: "Length (Metric)"
        },

        // Capacity - Easy
        {
            question: "How many cups are in 1 pint?",
            answer: 2,
            unit: "cups",
            category: "Capacity"
        },
        {
            question: "How many pints are in 1 quart?",
            answer: 2,
            unit: "pints",
            category: "Capacity"
        },
        {
            question: "How many quarts are in 1 gallon?",
            answer: 4,
            unit: "quarts",
            category: "Capacity"
        },
        {
            question: "How many cups are in 1 quart?",
            answer: 4,
            unit: "cups",
            category: "Capacity"
        },

        // Weight - Easy
        {
            question: "How many ounces are in 1 pound?",
            answer: 16,
            unit: "ounces",
            category: "Weight"
        },
        {
            question: "How many grams are in 1 kilogram?",
            answer: 1000,
            unit: "grams",
            category: "Weight (Metric)"
        },

        // Money - Easy
        {
            question: "How many cents are in 1 dollar?",
            answer: 100,
            unit: "cents",
            category: "Money"
        },
        {
            question: "How many pennies are in 1 dollar?",
            answer: 100,
            unit: "pennies",
            category: "Money"
        },
        {
            question: "How many cents is 1 nickel worth?",
            answer: 5,
            unit: "cents",
            category: "Money"
        },
        {
            question: "How many cents is 1 dime worth?",
            answer: 10,
            unit: "cents",
            category: "Money"
        },
        {
            question: "How many cents is 1 quarter worth?",
            answer: 25,
            unit: "cents",
            category: "Money"
        },
        {
            question: "How many cents are in 2 dimes?",
            answer: 20,
            unit: "cents",
            category: "Money"
        },
        {
            question: "How many cents are in 2 quarters?",
            answer: 50,
            unit: "cents",
            category: "Money"
        },
        {
            question: "How many pennies equal 1 nickel?",
            answer: 5,
            unit: "pennies",
            category: "Money"
        }
    ],

    medium: [
        // Time Conversions - Medium
        {
            question: "How many weeks are in 1 year? (approximately)",
            answer: 52,
            unit: "weeks",
            category: "Time"
        },
        {
            question: "How many days are in 1 year?",
            answer: 365,
            unit: "days",
            category: "Time"
        },
        {
            question: "How many minutes are in 2 hours?",
            answer: 120,
            unit: "minutes",
            category: "Time"
        },
        {
            question: "How many seconds are in 3 minutes?",
            answer: 180,
            unit: "seconds",
            category: "Time"
        },
        {
            question: "How many days are in 4 weeks?",
            answer: 28,
            unit: "days",
            category: "Time"
        },

        // Length - Medium (Customary)
        {
            question: "How many inches are in 1 yard?",
            answer: 36,
            unit: "inches",
            category: "Length"
        },
        {
            question: "How many yards are in 1 mile?",
            answer: 1760,
            unit: "yards",
            category: "Length"
        },
        {
            question: "How many feet are in 1 mile?",
            answer: 5280,
            unit: "feet",
            category: "Length"
        },
        {
            question: "How many inches are in 5 feet?",
            answer: 60,
            unit: "inches",
            category: "Length"
        },

        // Length - Medium (Metric)
        {
            question: "How many decimeters are in 1 meter?",
            answer: 10,
            unit: "decimeters",
            category: "Length (Metric)"
        },
        {
            question: "How many centimeters are in 5 meters?",
            answer: 500,
            unit: "centimeters",
            category: "Length (Metric)"
        },
        {
            question: "How many meters are in 5 kilometers?",
            answer: 5000,
            unit: "meters",
            category: "Length (Metric)"
        },
        {
            question: "How many millimeters are in 1 meter?",
            answer: 1000,
            unit: "millimeters",
            category: "Length (Metric)"
        },

        // Capacity - Medium
        {
            question: "How many cups are in 1 gallon?",
            answer: 16,
            unit: "cups",
            category: "Capacity"
        },
        {
            question: "How many fluid ounces are in 1 cup?",
            answer: 8,
            unit: "fluid ounces",
            category: "Capacity"
        },
        {
            question: "How many milliliters are in 1 liter?",
            answer: 1000,
            unit: "milliliters",
            category: "Capacity (Metric)"
        },
        {
            question: "How many centiliters are in 1 liter?",
            answer: 100,
            unit: "centiliters",
            category: "Capacity (Metric)"
        },
        {
            question: "How many deciliters are in 1 liter?",
            answer: 10,
            unit: "deciliters",
            category: "Capacity (Metric)"
        },

        // Weight - Medium
        {
            question: "How many pounds are in 1 ton?",
            answer: 2000,
            unit: "pounds",
            category: "Weight"
        },
        {
            question: "How many centigrams are in 1 gram?",
            answer: 100,
            unit: "centigrams",
            category: "Weight (Metric)"
        },
        {
            question: "How many milligrams are in 1 gram?",
            answer: 1000,
            unit: "milligrams",
            category: "Weight (Metric)"
        },
        {
            question: "How many grams are in 5 kilograms?",
            answer: 5000,
            unit: "grams",
            category: "Weight (Metric)"
        },

        // Money - Medium
        {
            question: "How many nickels are in 1 dollar?",
            answer: 20,
            unit: "nickels",
            category: "Money"
        },
        {
            question: "How many dimes are in 1 dollar?",
            answer: 10,
            unit: "dimes",
            category: "Money"
        },
        {
            question: "How many quarters are in 1 dollar?",
            answer: 4,
            unit: "quarters",
            category: "Money"
        },
        {
            question: "How many pennies are in 2 dollars?",
            answer: 200,
            unit: "pennies",
            category: "Money"
        },
        {
            question: "How many cents are in 3 quarters?",
            answer: 75,
            unit: "cents",
            category: "Money"
        },
        {
            question: "How many cents are in 5 dimes?",
            answer: 50,
            unit: "cents",
            category: "Money"
        },
        {
            question: "How many nickels are in 2 dollars?",
            answer: 40,
            unit: "nickels",
            category: "Money"
        },
        {
            question: "How many dimes are in 5 dollars?",
            answer: 50,
            unit: "dimes",
            category: "Money"
        },
        {
            question: "How many cents is a half dollar worth?",
            answer: 50,
            unit: "cents",
            category: "Money"
        }
    ],

    hard: [
        // Time Conversions - Hard
        {
            question: "How many years are in 1 decade?",
            answer: 10,
            unit: "years",
            category: "Time"
        },
        {
            question: "How many years are in 1 century?",
            answer: 100,
            unit: "years",
            category: "Time"
        },
        {
            question: "How many years are in 1 millennium?",
            answer: 1000,
            unit: "years",
            category: "Time"
        },
        {
            question: "How many seconds are in 5 minutes?",
            answer: 300,
            unit: "seconds",
            category: "Time"
        },
        {
            question: "How many hours are in 3 days?",
            answer: 72,
            unit: "hours",
            category: "Time"
        },

        // Length - Hard (Customary)
        {
            question: "How many inches are in 3 yards?",
            answer: 108,
            unit: "inches",
            category: "Length"
        },
        {
            question: "How many feet are in 10 yards?",
            answer: 30,
            unit: "feet",
            category: "Length"
        },
        {
            question: "How many inches are in 10 feet?",
            answer: 120,
            unit: "inches",
            category: "Length"
        },

        // Length - Hard (Metric)
        {
            question: "How many meters are in 10 kilometers?",
            answer: 10000,
            unit: "meters",
            category: "Length (Metric)"
        },
        {
            question: "How many centimeters are in 12 meters?",
            answer: 1200,
            unit: "centimeters",
            category: "Length (Metric)"
        },
        {
            question: "How many millimeters are in 50 centimeters?",
            answer: 500,
            unit: "millimeters",
            category: "Length (Metric)"
        },
        {
            question: "How many decimeters are in 10 meters?",
            answer: 100,
            unit: "decimeters",
            category: "Length (Metric)"
        },
        {
            question: "How many meters are in 1 hectometer?",
            answer: 100,
            unit: "meters",
            category: "Length (Metric)"
        },
        {
            question: "How many meters are in 1 dekameter?",
            answer: 10,
            unit: "meters",
            category: "Length (Metric)"
        },

        // Capacity - Hard
        {
            question: "How many fluid ounces are in 1 gallon?",
            answer: 128,
            unit: "fluid ounces",
            category: "Capacity"
        },
        {
            question: "How many cups are in 3 gallons?",
            answer: 48,
            unit: "cups",
            category: "Capacity"
        },
        {
            question: "How many pints are in 2 gallons?",
            answer: 16,
            unit: "pints",
            category: "Capacity"
        },
        {
            question: "How many liters are in 1 kiloliter?",
            answer: 1000,
            unit: "liters",
            category: "Capacity (Metric)"
        },
        {
            question: "How many milliliters are in 5 liters?",
            answer: 5000,
            unit: "milliliters",
            category: "Capacity (Metric)"
        },
        {
            question: "How many deciliters are in 10 liters?",
            answer: 100,
            unit: "deciliters",
            category: "Capacity (Metric)"
        },
        {
            question: "How many liters are in 1 hectoliter?",
            answer: 100,
            unit: "liters",
            category: "Capacity (Metric)"
        },
        {
            question: "How many liters are in 1 dekaliter?",
            answer: 10,
            unit: "liters",
            category: "Capacity (Metric)"
        },

        // Weight - Hard
        {
            question: "How many ounces are in 5 pounds?",
            answer: 80,
            unit: "ounces",
            category: "Weight"
        },
        {
            question: "How many pounds are in 3 tons?",
            answer: 6000,
            unit: "pounds",
            category: "Weight"
        },
        {
            question: "How many kilograms are in 1 metric ton?",
            answer: 1000,
            unit: "kilograms",
            category: "Weight (Metric)"
        },
        {
            question: "How many grams are in 10 kilograms?",
            answer: 10000,
            unit: "grams",
            category: "Weight (Metric)"
        },
        {
            question: "How many decigrams are in 1 gram?",
            answer: 10,
            unit: "decigrams",
            category: "Weight (Metric)"
        },
        {
            question: "How many grams are in 1 hectogram?",
            answer: 100,
            unit: "grams",
            category: "Weight (Metric)"
        },
        {
            question: "How many grams are in 1 dekagram?",
            answer: 10,
            unit: "grams",
            category: "Weight (Metric)"
        },

        // Metric Prefix - Hard
        {
            question: "How many meters are in 1 kilometer (using prefix)?",
            answer: 1000,
            unit: "meters",
            category: "Metric Prefixes"
        },
        {
            question: "How many grams are in 1 kilogram (using prefix)?",
            answer: 1000,
            unit: "grams",
            category: "Metric Prefixes"
        },
        {
            question: "How many liters are in 1 kiloliter (using prefix)?",
            answer: 1000,
            unit: "liters",
            category: "Metric Prefixes"
        },
        {
            question: "A hectometer equals how many meters?",
            answer: 100,
            unit: "meters",
            category: "Metric Prefixes"
        },
        {
            question: "A dekameter equals how many meters?",
            answer: 10,
            unit: "meters",
            category: "Metric Prefixes"
        },
        {
            question: "How many centimeters equal 0.1 meters?",
            answer: 10,
            unit: "centimeters",
            category: "Metric Prefixes"
        },
        {
            question: "How many millimeters equal 0.01 meters?",
            answer: 10,
            unit: "millimeters",
            category: "Metric Prefixes"
        },
        {
            question: "How many milligrams equal 0.001 grams?",
            answer: 1,
            unit: "milligrams",
            category: "Metric Prefixes"
        },

        // Money - Hard
        {
            question: "How many pennies are in 5 dollars?",
            answer: 500,
            unit: "pennies",
            category: "Money"
        },
        {
            question: "How many nickels are in 5 dollars?",
            answer: 100,
            unit: "nickels",
            category: "Money"
        },
        {
            question: "How many quarters are in 10 dollars?",
            answer: 40,
            unit: "quarters",
            category: "Money"
        },
        {
            question: "How many dimes are in 3 dollars?",
            answer: 30,
            unit: "dimes",
            category: "Money"
        },
        {
            question: "How many pennies are in 3 quarters?",
            answer: 75,
            unit: "pennies",
            category: "Money"
        },
        {
            question: "How many nickels equal 2 quarters?",
            answer: 10,
            unit: "nickels",
            category: "Money"
        },
        {
            question: "How many dimes equal 5 quarters?",
            answer: 12.5,
            unit: "dimes",
            category: "Money"
        },
        {
            question: "How many cents are in 10 nickels?",
            answer: 50,
            unit: "cents",
            category: "Money"
        },
        {
            question: "How many quarters are in 5 dollars?",
            answer: 20,
            unit: "quarters",
            category: "Money"
        },
        {
            question: "How many pennies are in 1 quarter?",
            answer: 25,
            unit: "pennies",
            category: "Money"
        },
        {
            question: "How many nickels are in 10 dimes?",
            answer: 20,
            unit: "nickels",
            category: "Money"
        },
        {
            question: "How many cents are in 7 dimes and 3 nickels?",
            answer: 85,
            unit: "cents",
            category: "Money"
        }
    ]
};
