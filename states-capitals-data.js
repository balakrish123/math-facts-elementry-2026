// US States and Capitals Data
// Complete list of all 50 US states with their capitals
// Organized by region for difficulty levels

const statesCapitals = {
    // All states and capitals
    all: [
        { state: "Alabama", capital: "Montgomery", abbrev: "AL", region: "South" },
        { state: "Alaska", capital: "Juneau", abbrev: "AK", region: "West" },
        { state: "Arizona", capital: "Phoenix", abbrev: "AZ", region: "West" },
        { state: "Arkansas", capital: "Little Rock", abbrev: "AR", region: "South" },
        { state: "California", capital: "Sacramento", abbrev: "CA", region: "West" },
        { state: "Colorado", capital: "Denver", abbrev: "CO", region: "West" },
        { state: "Connecticut", capital: "Hartford", abbrev: "CT", region: "Northeast" },
        { state: "Delaware", capital: "Dover", abbrev: "DE", region: "Northeast" },
        { state: "Florida", capital: "Tallahassee", abbrev: "FL", region: "South" },
        { state: "Georgia", capital: "Atlanta", abbrev: "GA", region: "South" },
        { state: "Hawaii", capital: "Honolulu", abbrev: "HI", region: "West" },
        { state: "Idaho", capital: "Boise", abbrev: "ID", region: "West" },
        { state: "Illinois", capital: "Springfield", abbrev: "IL", region: "Midwest" },
        { state: "Indiana", capital: "Indianapolis", abbrev: "IN", region: "Midwest" },
        { state: "Iowa", capital: "Des Moines", abbrev: "IA", region: "Midwest" },
        { state: "Kansas", capital: "Topeka", abbrev: "KS", region: "Midwest" },
        { state: "Kentucky", capital: "Frankfort", abbrev: "KY", region: "South" },
        { state: "Louisiana", capital: "Baton Rouge", abbrev: "LA", region: "South" },
        { state: "Maine", capital: "Augusta", abbrev: "ME", region: "Northeast" },
        { state: "Maryland", capital: "Annapolis", abbrev: "MD", region: "South" },
        { state: "Massachusetts", capital: "Boston", abbrev: "MA", region: "Northeast" },
        { state: "Michigan", capital: "Lansing", abbrev: "MI", region: "Midwest" },
        { state: "Minnesota", capital: "St. Paul", abbrev: "MN", region: "Midwest" },
        { state: "Mississippi", capital: "Jackson", abbrev: "MS", region: "South" },
        { state: "Missouri", capital: "Jefferson City", abbrev: "MO", region: "Midwest" },
        { state: "Montana", capital: "Helena", abbrev: "MT", region: "West" },
        { state: "Nebraska", capital: "Lincoln", abbrev: "NE", region: "Midwest" },
        { state: "Nevada", capital: "Carson City", abbrev: "NV", region: "West" },
        { state: "New Hampshire", capital: "Concord", abbrev: "NH", region: "Northeast" },
        { state: "New Jersey", capital: "Trenton", abbrev: "NJ", region: "Northeast" },
        { state: "New Mexico", capital: "Santa Fe", abbrev: "NM", region: "West" },
        { state: "New York", capital: "Albany", abbrev: "NY", region: "Northeast" },
        { state: "North Carolina", capital: "Raleigh", abbrev: "NC", region: "South" },
        { state: "North Dakota", capital: "Bismarck", abbrev: "ND", region: "Midwest" },
        { state: "Ohio", capital: "Columbus", abbrev: "OH", region: "Midwest" },
        { state: "Oklahoma", capital: "Oklahoma City", abbrev: "OK", region: "South" },
        { state: "Oregon", capital: "Salem", abbrev: "OR", region: "West" },
        { state: "Pennsylvania", capital: "Harrisburg", abbrev: "PA", region: "Northeast" },
        { state: "Rhode Island", capital: "Providence", abbrev: "RI", region: "Northeast" },
        { state: "South Carolina", capital: "Columbia", abbrev: "SC", region: "South" },
        { state: "South Dakota", capital: "Pierre", abbrev: "SD", region: "Midwest" },
        { state: "Tennessee", capital: "Nashville", abbrev: "TN", region: "South" },
        { state: "Texas", capital: "Austin", abbrev: "TX", region: "South" },
        { state: "Utah", capital: "Salt Lake City", abbrev: "UT", region: "West" },
        { state: "Vermont", capital: "Montpelier", abbrev: "VT", region: "Northeast" },
        { state: "Virginia", capital: "Richmond", abbrev: "VA", region: "South" },
        { state: "Washington", capital: "Olympia", abbrev: "WA", region: "West" },
        { state: "West Virginia", capital: "Charleston", abbrev: "WV", region: "South" },
        { state: "Wisconsin", capital: "Madison", abbrev: "WI", region: "Midwest" },
        { state: "Wyoming", capital: "Cheyenne", abbrev: "WY", region: "West" }
    ]
};

// Organize by difficulty based on regions
statesCapitals.easy = statesCapitals.all.filter(s =>
    s.region === "Northeast" || ["California", "Texas", "Florida"].includes(s.state)
);

statesCapitals.medium = statesCapitals.all.filter(s =>
    s.region === "South" || s.region === "Midwest"
);

statesCapitals.hard = statesCapitals.all.filter(s =>
    s.region === "West" || s.state === "Alaska" || s.state === "Hawaii"
);

// Helper function to generate wrong options for multiple choice
function generateCapitalOptions(correctCapital, allStates) {
    const options = [correctCapital];
    const otherCapitals = allStates
        .map(s => s.capital)
        .filter(c => c !== correctCapital);

    // Shuffle and pick 3 random wrong answers
    while (options.length < 4 && otherCapitals.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherCapitals.length);
        const randomCapital = otherCapitals.splice(randomIndex, 1)[0];
        if (!options.includes(randomCapital)) {
            options.push(randomCapital);
        }
    }

    // Shuffle the options
    return options.sort(() => Math.random() - 0.5);
}

// Helper function to generate wrong state options
function generateStateOptions(correctState, allStates) {
    const options = [correctState];
    const otherStates = allStates
        .map(s => s.state)
        .filter(st => st !== correctState);

    // Shuffle and pick 3 random wrong answers
    while (options.length < 4 && otherStates.length > 0) {
        const randomIndex = Math.floor(Math.random() * otherStates.length);
        const randomState = otherStates.splice(randomIndex, 1)[0];
        if (!options.includes(randomState)) {
            options.push(randomState);
        }
    }

    // Shuffle the options
    return options.sort(() => Math.random() - 0.5);
}
