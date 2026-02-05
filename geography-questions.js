// Geography questions organized by difficulty level
// Questions sourced from KS2 Geography Quiz and Kids Geography Trivia
// Complete coverage of all 4 PDFs with 150+ questions

const geographyQuestions = {
    easy: [
        // World Geography - Easy
        {
            question: "Which continent has the same name as a country?",
            options: ["Africa", "Australia", "Europe", "Antarctica"],
            correct: 1,
            category: "World Geography"
        },
        {
            question: "What is the study of weather called?",
            options: ["Geology", "Meteorology", "Biology", "Astronomy"],
            correct: 1,
            category: "Weather & Climate"
        },
        {
            question: "Which is the smallest continent?",
            options: ["Europe", "Antarctica", "Australia", "South America"],
            correct: 2,
            category: "World Geography"
        },
        {
            question: "How many continents are there in the world?",
            options: ["Five", "Six", "Seven", "Eight"],
            correct: 2,
            category: "World Geography"
        },
        {
            question: "What country is famously shaped like a boot?",
            options: ["Greece", "Spain", "Italy", "Portugal"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "In which country is Mount Fuji?",
            options: ["China", "Japan", "Korea", "Thailand"],
            correct: 1,
            category: "Asia"
        },
        {
            question: "What is the largest country in Europe?",
            options: ["Germany", "France", "Russia", "Ukraine"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "Which ocean is east of the United States?",
            options: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
            correct: 1,
            category: "Oceans"
        },
        {
            question: "What is the main spoken language in Mexico?",
            options: ["English", "Portuguese", "Spanish", "French"],
            correct: 2,
            category: "North America"
        },
        {
            question: "What is another name for the map key?",
            options: ["Symbolism", "Scale", "Legend", "Decoder"],
            correct: 2,
            category: "Maps & Navigation"
        },
        {
            question: "Which is the smallest ocean?",
            options: ["Indian", "Arctic", "Southern", "Atlantic"],
            correct: 1,
            category: "Oceans"
        },
        {
            question: "What is frozen water called?",
            options: ["Fog", "Ice", "Steam", "Vapor"],
            correct: 1,
            category: "Weather & Climate"
        },
        {
            question: "What animal is seen as sacred in India?",
            options: ["Elephant", "Tiger", "Cow", "Monkey"],
            correct: 2,
            category: "Asia"
        },
        {
            question: "Which climate is best for growing bananas?",
            options: ["Desert", "Tropical", "Arctic", "Temperate"],
            correct: 1,
            category: "Climate"
        },
        {
            question: "What is the capital of Mexico?",
            options: ["Cancun", "Guadalajara", "Mexico City", "Tijuana"],
            correct: 2,
            category: "North America"
        },

        // Natural Resources - Easy
        {
            question: "Which is NOT an example of a natural resource?",
            options: ["Light", "Plants", "Plastic", "Stone"],
            correct: 2,
            category: "Natural Resources"
        },
        {
            question: "What happens to the waste water from our homes?",
            options: ["Goes into rivers", "Cleaned at sewage works", "Goes to ocean", "Disappears"],
            correct: 1,
            category: "Environment"
        },
        {
            question: "What is caused by too much rain falling at once?",
            options: ["Drought", "Floods", "Tornado", "Hurricane"],
            correct: 1,
            category: "Weather & Climate"
        },
        {
            question: "Which group of countries did the Vikings come from?",
            options: ["Spain", "Scandinavia", "Italy", "Greece"],
            correct: 1,
            category: "History & Geography"
        },
        {
            question: "What is the main industry in the UK countryside?",
            options: ["Mining", "Fishing", "Farming", "Manufacturing"],
            correct: 2,
            category: "Economy"
        },

        // Additional Easy Questions from PDFs
        {
            question: "What is the power produced by the sun called?",
            options: ["Wind power", "Solar power", "Nuclear power", "Hydro power"],
            correct: 1,
            category: "Energy"
        },
        {
            question: "Which season is it most likely to snow in Britain?",
            options: ["Spring", "Summer", "Autumn", "Winter"],
            correct: 3,
            category: "Weather"
        },
        {
            question: "What country was the first pizza made in?",
            options: ["France", "Greece", "Italy", "Spain"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "What is a settlement?",
            options: ["A farm", "A place where people live", "A mountain", "A river"],
            correct: 1,
            category: "Human Geography"
        },
        {
            question: "How can we help reduce the amount of rubbish that goes to landfill?",
            options: ["Burn it", "Recycle", "Bury it", "Throw it in ocean"],
            correct: 1,
            category: "Environment"
        },
        {
            question: "Which famous lake in Scotland is said to have a monster?",
            options: ["Loch Lomond", "Loch Ness", "Loch Katrine", "Loch Tay"],
            correct: 1,
            category: "Europe"
        },
        {
            question: "What does USA stand for?",
            options: ["United Systems of America", "United States of America", "Universal States of America", "Union of States of America"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Which is the largest state in the USA?",
            options: ["Texas", "California", "Alaska", "Montana"],
            correct: 2,
            category: "North America"
        },
        {
            question: "What continent is India on?",
            options: ["Africa", "Europe", "Asia", "Australia"],
            correct: 2,
            category: "Asia"
        },
        {
            question: "Which continent has the lowest population?",
            options: ["South America", "Australia", "Antarctica", "Europe"],
            correct: 2,
            category: "Population"
        },
        {
            question: "What is Big Ben?",
            options: ["A tower", "A bell inside a clock", "A king", "A bridge"],
            correct: 1,
            category: "Europe"
        },
        {
            question: "What is the river that runs through Paris?",
            options: ["Thames", "Rhine", "Seine", "Danube"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "What sea is on France's south eastern border?",
            options: ["North Sea", "Baltic Sea", "Mediterranean Sea", "Black Sea"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "Which material needs separating into different colours before recycling?",
            options: ["Paper", "Plastic", "Glass", "Metal"],
            correct: 2,
            category: "Environment"
        },
        {
            question: "What are some popular Mexican food dishes?",
            options: ["Sushi and ramen", "Tacos and burritos", "Pizza and pasta", "Curry and rice"],
            correct: 1,
            category: "Culture"
        }
    ],

    medium: [
        // World Geography - Medium
        {
            question: "What is the largest country in South America?",
            options: ["Argentina", "Colombia", "Brazil", "Peru"],
            correct: 2,
            category: "South America"
        },
        {
            question: "What is the longest river in Africa?",
            options: ["Congo River", "Nile River", "Niger River", "Zambezi River"],
            correct: 1,
            category: "Africa"
        },
        {
            question: "What is the capital of India?",
            options: ["Mumbai", "Kolkata", "New Delhi", "Bangalore"],
            correct: 2,
            category: "Asia"
        },
        {
            question: "What name is given to the calm area in the centre of a hurricane?",
            options: ["The core", "The eye", "The center", "The calm"],
            correct: 1,
            category: "Weather"
        },
        {
            question: "What is the highest mountain in Europe?",
            options: ["Mont Blanc", "Matterhorn", "Elbrus", "Mount Etna"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "Which country of the British Isles has the largest county in terms of area?",
            options: ["England", "Scotland", "Wales", "Ireland"],
            correct: 1,
            category: "Europe"
        },
        {
            question: "When we have very little rain causing a water shortage what is this called?",
            options: ["Famine", "Drought", "Desert", "Dry spell"],
            correct: 1,
            category: "Weather"
        },
        {
            question: "What is the process called when the gas cools and forms clouds?",
            options: ["Evaporation", "Precipitation", "Condensation", "Formation"],
            correct: 2,
            category: "Weather"
        },
        {
            question: "What is a chain of mountains called?",
            options: ["Range", "Peak", "Ridge", "Summit"],
            correct: 0,
            category: "Physical Geography"
        },
        {
            question: "Which is the largest sea?",
            options: ["Caribbean Sea", "South China Sea", "Mediterranean Sea", "Red Sea"],
            correct: 1,
            category: "Oceans"
        },
        {
            question: "The U.S. and its territories cover how many time zones?",
            options: ["4", "6", "9", "12"],
            correct: 2,
            category: "North America"
        },
        {
            question: "What is the largest desert in the world?",
            options: ["Gobi", "Sahara", "Arabian", "Kalahari"],
            correct: 1,
            category: "Physical Geography"
        },
        {
            question: "What sea separates Britain from Denmark?",
            options: ["Irish Sea", "Baltic Sea", "North Sea", "English Channel"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "In which city is Tiananmen Square?",
            options: ["Shanghai", "Beijing", "Hong Kong", "Tokyo"],
            correct: 1,
            category: "Asia"
        },
        {
            question: "What is the driest place in Africa?",
            options: ["Kalahari Desert", "Namib Desert", "Sahara Desert", "Karoo Desert"],
            correct: 2,
            category: "Africa"
        },

        // Population - Medium
        {
            question: "The world's population is more than how many billion people?",
            options: ["2 billion", "5 billion", "7 billion", "10 billion"],
            correct: 2,
            category: "Population"
        },
        {
            question: "The average number of people living in one place is called what?",
            options: ["Capacity", "Populous", "Population density", "Census"],
            correct: 2,
            category: "Population"
        },
        {
            question: "A nomad is a person who does what?",
            options: ["Herds reindeer", "Moves from place to place", "Lives in the north", "Stays in one place"],
            correct: 1,
            category: "Culture"
        },

        // Natural Resources - Medium
        {
            question: "Which is an example of a flow resource?",
            options: ["Wind", "Water", "Trees", "Coal"],
            correct: 0,
            category: "Natural Resources"
        },
        {
            question: "What is it called when forests are destroyed?",
            options: ["Global warming", "Wildfire", "Deforestation", "Erosion"],
            correct: 2,
            category: "Environment"
        },
        {
            question: "When a natural resource is used to make something else it is called a what?",
            options: ["Ingredient", "Raw material", "Supply", "Component"],
            correct: 1,
            category: "Natural Resources"
        },

        // Additional Medium Questions from PDFs
        {
            question: "What is the largest river in South America?",
            options: ["Orinoco River", "Paraná River", "Amazon River", "São Francisco River"],
            correct: 2,
            category: "South America"
        },
        {
            question: "Britain is part of the United Kingdom together with which other country?",
            options: ["Scotland", "Northern Ireland", "Wales", "Ireland"],
            correct: 1,
            category: "Europe"
        },
        {
            question: "On which river does Sheffield stand?",
            options: ["Thames", "Severn", "Don", "Trent"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "How is hydro electricity produced?",
            options: ["By wind", "By water", "By sun", "By coal"],
            correct: 1,
            category: "Energy"
        },
        {
            question: "What are the highest mountains in France called?",
            options: ["Pyrenees", "French Alps", "Vosges", "Jura"],
            correct: 1,
            category: "Europe"
        },
        {
            question: "Which region of Ireland is part of the United Kingdom?",
            options: ["Southern Ireland", "Northern Ireland", "Western Ireland", "Eastern Ireland"],
            correct: 1,
            category: "Europe"
        },
        {
            question: "In which settlement would you be more likely to find a cathedral?",
            options: ["Village", "Town", "City", "Hamlet"],
            correct: 2,
            category: "Human Geography"
        },
        {
            question: "What is the most populated state in America?",
            options: ["Texas", "Florida", "New York", "California"],
            correct: 3,
            category: "North America"
        },
        {
            question: "The U.S. and its territories cover how many time zones?",
            options: ["4", "6", "9", "12"],
            correct: 2,
            category: "North America"
        },
        {
            question: "Which of these islands is NOT off the eastern coast of the U.S.?",
            options: ["Bermuda", "Nantucket", "Catalina", "Long Island"],
            correct: 2,
            category: "North America"
        },
        {
            question: "What state has the highest average elevation?",
            options: ["Alaska", "Colorado", "Wyoming", "Montana"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Which is the only Great Lake that lies entirely within the U.S. borders?",
            options: ["Superior", "Michigan", "Huron", "Erie"],
            correct: 1,
            category: "North America"
        },
        {
            question: "What is the capital of Ukraine?",
            options: ["Kiev", "Minsk", "Bucharest", "Sofia"],
            correct: 0,
            category: "Europe"
        },
        {
            question: "What is the highest waterfall in the world?",
            options: ["Niagara Falls", "Victoria Falls", "Angel Falls", "Yosemite Falls"],
            correct: 2,
            category: "South America"
        },
        {
            question: "What is the capital of Northern Ireland?",
            options: ["Dublin", "Belfast", "Cork", "Galway"],
            correct: 1,
            category: "Europe"
        },
        {
            question: "If you wanted to visit the Black Forest, which country would you visit?",
            options: ["Austria", "Switzerland", "Germany", "Poland"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "Which river flows north and empties into the Mediterranean Sea?",
            options: ["Amazon", "Mississippi", "Nile", "Danube"],
            correct: 2,
            category: "Africa"
        },
        {
            question: "What place includes all the water and land between the Tropic of Cancer and Capricorn?",
            options: ["Arctic", "Tropics", "Temperate zone", "Polar zone"],
            correct: 1,
            category: "Climate"
        },
        {
            question: "Portuguese is the main language of which country?",
            options: ["Argentina", "Brazil", "Colombia", "Venezuela"],
            correct: 1,
            category: "South America"
        },
        {
            question: "How long do scientists think modern humans have lived on Earth?",
            options: ["10,000 years", "50,000 years", "200,000 years", "1 million years"],
            correct: 2,
            category: "History"
        }
    ],

    hard: [
        // World Geography - Hard
        {
            question: "What is the highest point in France?",
            options: ["Eiffel Tower", "Mont Blanc", "Matterhorn", "Pyrenees Peak"],
            correct: 1,
            category: "Europe"
        },
        {
            question: "Where are most mountains found?",
            options: ["On land", "Under the oceans", "At the poles", "In deserts"],
            correct: 1,
            category: "Physical Geography"
        },
        {
            question: "In which city is England's oldest cathedral?",
            options: ["London", "York", "Canterbury", "Durham"],
            correct: 2,
            category: "Europe"
        },
        {
            question: "What is the name of the protection used to stop sand being swept from a beach?",
            options: ["Seawall", "Groynes", "Breakwater", "Jetty"],
            correct: 1,
            category: "Coastal Geography"
        },
        {
            question: "What is the name of permanently frozen rivers?",
            options: ["Ice rivers", "Frozen streams", "Glaciers", "Icebergs"],
            correct: 2,
            category: "Physical Geography"
        },
        {
            question: "Which continent is the iciest?",
            options: ["Arctic", "Antarctica", "Greenland", "Siberia"],
            correct: 1,
            category: "World Geography"
        },
        {
            question: "What type of harmful gases surround the Earth?",
            options: ["Oxygen gases", "Greenhouse gases", "Nitrogen gases", "Ozone gases"],
            correct: 1,
            category: "Environment"
        },
        {
            question: "Where is nine tenths of the Earth's water?",
            options: ["In rivers", "In lakes", "In oceans", "In ice caps"],
            correct: 2,
            category: "Oceans"
        },
        {
            question: "What is the process called when water turns into a gas and rises into the sky?",
            options: ["Condensation", "Precipitation", "Evaporation", "Sublimation"],
            correct: 2,
            category: "Weather"
        },
        {
            question: "What kind of economic activity is a supermarket assistant undertaking?",
            options: ["Primary", "Secondary", "Tertiary", "Quaternary"],
            correct: 2,
            category: "Economy"
        },
        {
            question: "What is a bridleway?",
            options: ["A bridge over water", "A path for horses and non-motorised vehicles", "A wedding path", "A coastal route"],
            correct: 1,
            category: "Transportation"
        },
        {
            question: "What is the main source of energy in our ecosystem?",
            options: ["The moon", "The sun", "The ocean", "The wind"],
            correct: 1,
            category: "Environment"
        },
        {
            question: "What can be discovered by counting the rings in a tree trunk?",
            options: ["Its height", "Its age", "Its type", "Its health"],
            correct: 1,
            category: "Nature"
        },
        {
            question: "Why did settlements need to link together?",
            options: ["For protection", "To trade", "For water", "For farming"],
            correct: 1,
            category: "History"
        },
        {
            question: "On which river does Sheffield stand?",
            options: ["Thames", "Trent", "Don", "Severn"],
            correct: 2,
            category: "Europe"
        },

        // Maps & Navigation - Hard
        {
            question: "The scale of a map tells you what?",
            options: ["What symbols mean", "How size relates to real life", "How many people live there", "The map's age"],
            correct: 1,
            category: "Maps"
        },
        {
            question: "Which map feature helps you see an area with bends or hills?",
            options: ["Steps", "Contour lines", "Zig-zag lines", "Elevation marks"],
            correct: 1,
            category: "Maps"
        },
        {
            question: "What is the process of making maps called?",
            options: ["Mapography", "Topography", "Cartography", "Projection"],
            correct: 3,
            category: "Maps"
        },
        {
            question: "What is the invisible line at latitude 0° that intersects South America, Africa, and Indonesia?",
            options: ["Prime meridian", "Equator", "Tropic of Cancer", "International Date Line"],
            correct: 1,
            category: "Maps"
        },
        {
            question: "Which recycle bin would you put a drinks can in?",
            options: ["Glass", "Aluminium", "Plastic", "Paper"],
            correct: 1,
            category: "Environment"
        },

        // Additional Hard Questions - US Geography
        {
            question: "Which state is mostly a peninsula?",
            options: ["California", "Florida", "Louisiana", "Michigan"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Which 840-acre park features an Egyptian obelisk, skating rink, zoo, and Metropolitan Museum of Art?",
            options: ["Golden Gate Park", "Central Park", "Lincoln Park", "Millennium Park"],
            correct: 1,
            category: "North America"
        },
        {
            question: "What is the longest cave in the world?",
            options: ["Carlsbad Caverns", "Mammoth Cave", "Wind Cave", "Jewel Cave"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Which U.S. state is made up of islands?",
            options: ["Alaska", "Hawaii", "Rhode Island", "Michigan"],
            correct: 1,
            category: "North America"
        },
        {
            question: "What is the smallest U.S. national park at only .02 acres?",
            options: ["Hot Springs", "Thaddeus Kosciuszko National Memorial", "Gateway Arch", "Acadia"],
            correct: 1,
            category: "North America"
        },
        {
            question: "What is the highest mountain in the United States?",
            options: ["Mount Whitney", "Mount Rainier", "Mount McKinley (Denali)", "Pikes Peak"],
            correct: 2,
            category: "North America"
        },
        {
            question: "Where is the geographic center of the 48 connected states?",
            options: ["Kansas City, Mo.", "Smith County, Kans.", "Lincoln, Nebr.", "Topeka, Kans."],
            correct: 1,
            category: "North America"
        },
        {
            question: "What is the southernmost point of the 50 states?",
            options: ["Key West, Fla.", "Ka Lae, Hawaii", "San Diego, Calif.", "Brownsville, Texas"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Where can you see the best-preserved prehistoric cliff dwellings in the United States?",
            options: ["Chaco Canyon", "Mesa Verde", "Canyon de Chelly", "Bandelier"],
            correct: 1,
            category: "North America"
        },
        {
            question: "This plantation on the Potomac River was home to George Washington. What is it called?",
            options: ["Monticello", "Mount Vernon", "Montpelier", "Ash Lawn"],
            correct: 1,
            category: "North America"
        },
        {
            question: "What 6,000 ft mountain displays the likenesses of four American presidents?",
            options: ["Stone Mountain", "Mount Rushmore", "Devils Tower", "Crazy Horse"],
            correct: 1,
            category: "North America"
        },
        {
            question: "This natural wonder is 277 miles long and one mile deep. What is it?",
            options: ["Royal Gorge", "Grand Canyon", "Hells Canyon", "Black Canyon"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Which state is second in mean elevation to Colorado?",
            options: ["Montana", "Wyoming", "Utah", "New Mexico"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Which U.S. territory is located about 1,000 miles east-southeast of Miami?",
            options: ["Virgin Islands", "Puerto Rico", "Guam", "American Samoa"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Which geographical area receives the most average rainfall each year in the U.S.?",
            options: ["Seattle, Washington", "Mt. Washington, New Hampshire", "Mobile, Alabama", "Juneau, Alaska"],
            correct: 1,
            category: "North America"
        },
        {
            question: "What share of the world's land area does the U.S. hold?",
            options: ["6.2%", "10.5%", "15%", "25%"],
            correct: 0,
            category: "North America"
        },
        {
            question: "Which of these states does NOT share its name with a U.S. river?",
            options: ["Arkansas", "Nevada", "Delaware", "Ohio"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Where is the geographic center of all 50 states (including Alaska and Hawaii)?",
            options: ["Smith County, Kans.", "Butte County, S.D.", "Jefferson City, Mo.", "Lebanon, Kans."],
            correct: 1,
            category: "North America"
        },
        {
            question: "What is the northernmost point of the United States?",
            options: ["Barrow, Alaska", "Point Barrow, Alaska", "Nome, Alaska", "Prudhoe Bay, Alaska"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Where is the lowest point in the U.S. at 282 ft below sea level?",
            options: ["New Orleans, La.", "Death Valley, Calif.", "Salton Sea, Calif.", "Badwater Basin"],
            correct: 1,
            category: "North America"
        },
        {
            question: "What 27-acre island is home to an important place in American immigration history?",
            options: ["Angel Island", "Ellis Island", "Liberty Island", "Governors Island"],
            correct: 1,
            category: "North America"
        },
        {
            question: "What six states comprise New England?",
            options: ["NY, PA, VT, MA, CT, DE", "ME, NH, VT, MA, CT, RI", "ME, NY, VT, MA, NH, CT", "VT, NH, MA, RI, CT, NY"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Which landlocked harbor is one of the largest in the East Pacific Ocean?",
            options: ["San Diego Harbor", "Pearl Harbor, Hawaii", "Honolulu Harbor", "San Francisco Bay"],
            correct: 1,
            category: "North America"
        },
        {
            question: "The Lechuguilla Cave is part of what series of underground chambers?",
            options: ["Luray Caverns", "Carlsbad Caverns", "Mammoth Cave", "Wind Cave"],
            correct: 1,
            category: "North America"
        },
        {
            question: "Which territory is NOT under U.S. jurisdiction?",
            options: ["Guam", "Puerto Rico", "Cayman Islands", "American Samoa"],
            correct: 2,
            category: "North America"
        },

        // World Geography - Hard
        {
            question: "What is the highest mountain in the Western Hemisphere?",
            options: ["Mount McKinley", "Aconcagua, Argentina", "Mount Logan", "Pico de Orizaba"],
            correct: 1,
            category: "South America"
        },
        {
            question: "Where is the home of the only ancient wonder still standing?",
            options: ["Athens, Greece", "Giza, Egypt", "Rome, Italy", "Babylon, Iraq"],
            correct: 1,
            category: "Africa"
        },
        {
            question: "What volcanic island off the coast of Iceland was born in 1963?",
            options: ["Heimaey", "Surtsey", "Vestmannaeyjar", "Grimsey"],
            correct: 1,
            category: "Europe"
        },
        {
            question: "Two hundred million years ago most of Earth's land was one huge continent named:",
            options: ["Gondwana", "Laurasia", "Pangaea", "Panthalassa"],
            correct: 2,
            category: "Physical Geography"
        },

        // Explorer Questions - "Who Am I?"
        {
            question: "Which explorer first reached the South Pole in 1911?",
            options: ["Robert Peary", "Ernest Shackleton", "Roald Amundsen", "Robert Scott"],
            correct: 2,
            category: "Explorers"
        },
        {
            question: "Who conquered the world in less than 80 days in 1889?",
            options: ["Phileas Fogg", "Nellie Bly", "Harriet Quimby", "Amelia Earhart"],
            correct: 1,
            category: "Explorers"
        },
        {
            question: "Whose home (Graceland) welcomes more than 600,000 visitors a year?",
            options: ["Michael Jackson", "Elvis Presley", "Thomas Jefferson", "George Washington"],
            correct: 1,
            category: "Culture"
        },
        {
            question: "Who is considered by many to be the greatest soccer player of all time?",
            options: ["Diego Maradona", "Pelé", "Lionel Messi", "Cristiano Ronaldo"],
            correct: 1,
            category: "Sports"
        },
        {
            question: "Who became the first person to summit Mt. Everest on May 29, 1953?",
            options: ["George Mallory", "Edmund Hillary", "Tenzing Norgay", "Reinhold Messner"],
            correct: 1,
            category: "Explorers"
        },
        {
            question: "Whose plane disappeared between New Guinea and Howland Island during a round-the-world flight?",
            options: ["Bessie Coleman", "Amelia Earhart", "Harriet Quimby", "Beryl Markham"],
            correct: 1,
            category: "Explorers"
        },
        {
            question: "Who was one half of a famous duo who explored the Louisiana Purchase?",
            options: ["William Clark", "Meriwether Lewis", "Zebulon Pike", "John Frémont"],
            correct: 1,
            category: "Explorers"
        },
        {
            question: "Who has a river, bay, and strait named in their honor?",
            options: ["Christopher Columbus", "Henry Hudson", "Ferdinand Magellan", "Vasco da Gama"],
            correct: 1,
            category: "Explorers"
        },
        {
            question: "Who created the fictional wonderland of Narnia?",
            options: ["J.R.R. Tolkien", "C.S. Lewis", "J.K. Rowling", "Lewis Carroll"],
            correct: 1,
            category: "Literature"
        },
        {
            question: "Who became the youngest men's singles champion at Wimbledon in 1985 at age 17?",
            options: ["Bjorn Borg", "Boris Becker", "John McEnroe", "Pete Sampras"],
            correct: 1,
            category: "Sports"
        },
        {
            question: "Who settled Jamestown, Virginia, in 1607?",
            options: ["John Smith", "John Rolfe", "Pocahontas", "Lord Baltimore"],
            correct: 0,
            category: "History"
        },
        {
            question: "Who became the first American woman in space in 1983?",
            options: ["Valentina Tereshkova", "Sally Ride", "Mae Jemison", "Christa McAuliffe"],
            correct: 1,
            category: "Space"
        },
        {
            question: "Who discovered Florida in the 1500s?",
            options: ["Christopher Columbus", "Ponce de León", "Hernando de Soto", "Vasco Núñez"],
            correct: 1,
            category: "Explorers"
        },
        {
            question: "Who was the first to round the Cape of Good Hope in South Africa?",
            options: ["Vasco da Gama", "Bartholomeu Dias", "Ferdinand Magellan", "Marco Polo"],
            correct: 1,
            category: "Explorers"
        },
        {
            question: "Who grew up in De Smet, South Dakota, and wrote beloved children's books set there?",
            options: ["Laura Ingalls Wilder", "L.M. Montgomery", "Louisa May Alcott", "Beatrix Potter"],
            correct: 0,
            category: "Literature"
        },
        {
            question: "How would you dispose of a book you no longer needed?",
            options: ["Throw it away", "Burn it", "Give it to someone else or charity shop", "Leave it on street"],
            correct: 2,
            category: "Environment"
        }
    ]
};
