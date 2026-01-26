// Science questions organized by difficulty level
// Questions sourced from Grade 4 Science Test and Science Trivia for Kids

const scienceQuestions = {
    easy: [
        // Biology Questions (Easy)
        {
            question: "Biology is the study of what?",
            options: ["Dead things", "Earth", "Living things", "Plants"],
            correct: 2,
            category: "Biology"
        },
        {
            question: "What are considered the basic building blocks of all living things?",
            options: ["Cells", "Atoms", "Electrons", "Organisms"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "Which scientist is called the Father of Biology?",
            options: ["Galileo", "Einstein", "Newton", "Aristotle"],
            correct: 3,
            category: "Biology"
        },
        {
            question: "Plant cells have a cell wall while animal cells do not.",
            options: ["True", "False"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "Which animal has wings?",
            options: ["bird", "frog", "mouse", "rabbit"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "The main purpose of a plant's flower is to",
            options: ["soak up water", "produce seeds", "provide shelter", "support the plant"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "Humans have hair and nails that are always growing. What provides the energy needed for this growth?",
            options: ["wind", "food", "water", "soil"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "Which body structure provides camouflage for a polar bear in its snowy environment?",
            options: ["rough tongue", "strong legs", "short tail", "white fur"],
            correct: 3,
            category: "Biology"
        },
        {
            question: "An eagle has captured a rabbit for food. The rabbit is an example of a",
            options: ["decomposer", "predator", "prey", "producer"],
            correct: 2,
            category: "Biology"
        },
        {
            question: "Frogs eat crickets. If the population of crickets in an area decreases, the number of frogs in the area will most likely",
            options: ["decrease", "increase", "remain the same"],
            correct: 0,
            category: "Biology"
        },

        // Earth Science Questions (Easy)
        {
            question: "Frozen water is called",
            options: ["fog", "ice", "steam", "vapor"],
            correct: 1,
            category: "Earth Science"
        },
        {
            question: "Which of the following is NOT a layer of the Earth?",
            options: ["Crust", "Plate", "Mantle", "Outer core"],
            correct: 1,
            category: "Geology"
        },
        {
            question: "What are igneous rocks made out of?",
            options: ["Smaller rocks", "Salt", "Crystals", "Sand"],
            correct: 2,
            category: "Geology"
        },
        {
            question: "The mantle is the thickest layer of the Earth.",
            options: ["True", "False"],
            correct: 0,
            category: "Geology"
        },

        // Astronomy Questions (Easy)
        {
            question: "What is the galaxy you live in called?",
            options: ["The Milky Way", "Orion's Belt", "Andromeda", "Triangulum"],
            correct: 0,
            category: "Astronomy"
        },
        {
            question: "Everything that exists anywhere is in the universe.",
            options: ["True", "False"],
            correct: 0,
            category: "Astronomy"
        },
        {
            question: "There are eight planets in your solar system.",
            options: ["True", "False"],
            correct: 0,
            category: "Astronomy"
        },
        {
            question: "How long does it take Earth to revolve around the Sun?",
            options: ["one year", "one month", "one week", "one day"],
            correct: 0,
            category: "Astronomy"
        },

        // Physical Science (Easy)
        {
            question: "Which example of matter has no definite shape and no definite volume?",
            options: ["air", "clay", "rock", "milk"],
            correct: 0,
            category: "Physical Science"
        },
        {
            question: "Which form of energy is produced when a person claps his hands?",
            options: ["chemical", "electrical", "light", "sound"],
            correct: 3,
            category: "Physical Science"
        },
        {
            question: "Which force pulls objects toward the center of Earth?",
            options: ["gravity", "friction", "magnetism", "electricity"],
            correct: 0,
            category: "Physical Science"
        },
        {
            question: "A person using a pulley to lift a box is using",
            options: ["an inclined plane", "a magnet", "a pulley", "a lever"],
            correct: 2,
            category: "Physical Science"
        },
        {
            question: "A spring scale is being used to measure a rock's",
            options: ["temperature", "weight", "length", "volume"],
            correct: 1,
            category: "Physical Science"
        },
        {
            question: "Which unit should be used to measure the length of a desk with a metric ruler?",
            options: ["degree Celsius (°C)", "gram (g)", "milliliter (mL)", "centimeter (cm)"],
            correct: 3,
            category: "Physical Science"
        }
    ],

    medium: [
        // Biology Questions (Medium)
        {
            question: "Which life process is common to all living things?",
            options: ["reproduction", "germination", "hunting for food", "pollinating flowers"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "A skunk's odor is unpleasant to other animals. A monarch butterfly's coloration warns birds of its bitter taste. These adaptations help these animals to",
            options: ["find water", "find prey", "seek shelter", "avoid predators"],
            correct: 3,
            category: "Biology"
        },
        {
            question: "When the food supply in an area decreases, many of the deer living there will",
            options: ["move to a new habitat", "change their color", "hibernate", "reproduce"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "A prairie dog whistles loudly when it senses danger. Which sense helps the other prairie dogs receive this warning?",
            options: ["hearing", "sight", "smell", "taste"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "When was the first microscope invented?",
            options: ["1600s", "1900s", "2000s", "1200s"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "An arctic bird appears bigger in winter than in summer. What does this observation suggest?",
            options: ["It has fewer feathers", "It changes color", "It is storing fat", "It has a longer neck"],
            correct: 2,
            category: "Biology"
        },
        {
            question: "The diagram shows the growth of an oak tree from acorn to seedling to sapling to adult tree. This diagram shows a",
            options: ["life span", "life cycle", "food chain", "food supply"],
            correct: 1,
            category: "Biology"
        },

        // Earth Science Questions (Medium)
        {
            question: "What provides the source of energy for the water cycle?",
            options: ["rain", "soil", "the Sun", "the Moon"],
            correct: 2,
            category: "Earth Science"
        },
        {
            question: "Which human activity has a helpful effect on the environment?",
            options: ["littering", "polluting", "recycling", "smoking"],
            correct: 2,
            category: "Environmental Science"
        },
        {
            question: "When taller trees in a forest are cut down for wood, how can this change be helpful to plants on the ground?",
            options: ["Water erodes the soil", "Animals have more food", "Humans build new houses", "More sunlight reaches the ground"],
            correct: 3,
            category: "Environmental Science"
        },
        {
            question: "Which type of map shows the physical appearance of a land area?",
            options: ["Topographic", "Marine", "Thematic", "Road"],
            correct: 0,
            category: "Geology"
        },
        {
            question: "What is stratigraphy the study of?",
            options: ["Clouds", "Layer of the Earth", "Rock layers", "The stratosphere"],
            correct: 2,
            category: "Geology"
        },
        {
            question: "Geology is the study of rocks.",
            options: ["True", "False"],
            correct: 0,
            category: "Geology"
        },

        // Meteorology Questions (Medium)
        {
            question: "Which instrument measures air pressure?",
            options: ["Barometer", "Thermometer", "Anemometer", "Hygrometer"],
            correct: 0,
            category: "Meteorology"
        },
        {
            question: "Which of these is most responsible for the weather on Earth?",
            options: ["The moon", "The sun", "People", "Oceans"],
            correct: 1,
            category: "Meteorology"
        },
        {
            question: "The troposphere is the lowest part of the Earth's atmosphere.",
            options: ["True", "False"],
            correct: 0,
            category: "Meteorology"
        },
        {
            question: "Which two conditions are forms of precipitation?",
            options: ["cloudy and partly sunny", "snow and partly sunny", "snow and rain", "cloudy and rain"],
            correct: 2,
            category: "Meteorology"
        },

        // Physical Science (Medium)
        {
            question: "A student crumpled up a flat sheet of paper into a round ball. Which property of the paper changed?",
            options: ["hardness", "color", "mass", "shape"],
            correct: 3,
            category: "Physical Science"
        },
        {
            question: "Which property of a mirror makes it possible for a student to see her image in it?",
            options: ["volume", "magnetism", "reflectiveness", "conductivity"],
            correct: 2,
            category: "Physical Science"
        },
        {
            question: "Which type of energy needs to be removed from liquid water to change the liquid water to solid water?",
            options: ["light", "heat", "sound", "chemical"],
            correct: 1,
            category: "Physical Science"
        },
        {
            question: "Which unit should be used when a student uses a metric ruler to measure the length of a desk?",
            options: ["degree Celsius (°C)", "gram (g)", "milliliter (mL)", "centimeter (cm)"],
            correct: 3,
            category: "Physical Science"
        },
        {
            question: "A student rubs her hands together. Her hands will feel warmer due to heat produced by",
            options: ["erosion", "friction", "gravity", "sunlight"],
            correct: 1,
            category: "Physical Science"
        },
        {
            question: "An object in the sky was observed showing different phases throughout September (crescent, half, full, crescent again). The object being observed was most likely",
            options: ["the Sun", "the Moon", "a star", "a planet"],
            correct: 1,
            category: "Astronomy"
        }
    ],

    hard: [
        // Biology Questions (Hard)
        {
            question: "An autotrophic organism eats other things.",
            options: ["True", "False"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "An organism can exist without a nucleus.",
            options: ["True", "False"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "A microbiologist studies the largest living things in the world.",
            options: ["True", "False"],
            correct: 1,
            category: "Biology"
        },

        // Geology Questions (Hard)
        {
            question: "There are five different types of rock in the world.",
            options: ["True", "False"],
            correct: 1,
            category: "Geology"
        },
        {
            question: "The only difference between a diamond and pencil lead is the pattern of the crystals that make them.",
            options: ["True", "False"],
            correct: 0,
            category: "Geology"
        },
        {
            question: "Which two processes are occurring when rock particles are carried over the cliff by a waterfall and then settle in another area?",
            options: ["evaporation and condensation", "deposition and evaporation", "condensation and erosion", "erosion and deposition"],
            correct: 3,
            category: "Geology"
        },

        // Meteorology Questions (Hard)
        {
            question: "What is the name of the type of calendar that uses weather and astronomical data to forecast?",
            options: ["Almanac", "Lunar calendar", "Gregorian", "Dreamspell"],
            correct: 0,
            category: "Meteorology"
        },
        {
            question: "Which is NOT a type of meteorologist?",
            options: ["Climatologist", "Synoptic", "Environmental", "Hydrologist"],
            correct: 3,
            category: "Meteorology"
        },
        {
            question: "The earth's atmosphere is made up of three layers.",
            options: ["True", "False"],
            correct: 1,
            category: "Meteorology"
        },
        {
            question: "A tornado watch is worse than a tornado warning.",
            options: ["True", "False"],
            correct: 1,
            category: "Meteorology"
        },
        {
            question: "Temperature can be measured on two different scales.",
            options: ["True", "False"],
            correct: 1,
            category: "Meteorology"
        },

        // Astronomy Questions (Hard)
        {
            question: "Astronomy is the study of what?",
            options: ["The Milky Way", "The Planets", "Air", "All objects outside Earth's atmosphere"],
            correct: 3,
            category: "Astronomy"
        },
        {
            question: "Which is NOT a type of astronomer?",
            options: ["Stellar", "Galactic", "Solar", "Astrological"],
            correct: 3,
            category: "Astronomy"
        },
        {
            question: "Which is NOT a tool used in astronomy?",
            options: ["Spectrometer", "Scale", "Telescope", "Neutrino detector"],
            correct: 1,
            category: "Astronomy"
        },
        {
            question: "Large objects have greater gravity than small objects.",
            options: ["True", "False"],
            correct: 0,
            category: "Astronomy"
        },
        {
            question: "The sun is about 15 trillion years old.",
            options: ["True", "False"],
            correct: 1,
            category: "Astronomy"
        },

        // General Science Questions (Hard)
        {
            question: "Which of the following is NOT part of the scientific method?",
            options: ["Hypothesis", "Analysis", "Experimentation", "Manipulation"],
            correct: 3,
            category: "General Science"
        },
        {
            question: "The word 'scientist' was first used in what time period?",
            options: ["1800s", "1900s", "2000s", "1200s"],
            correct: 0,
            category: "General Science"
        },
        {
            question: "Which is NOT a branch of science?",
            options: ["Physical science", "Earth science", "Emotional science", "Life science"],
            correct: 2,
            category: "General Science"
        },
        {
            question: "The word 'science' actually means?",
            options: ["Study", "Knowledge", "Experiment", "Alive"],
            correct: 1,
            category: "General Science"
        },
        {
            question: "The main difference between a theory and a law is that the police deal with laws.",
            options: ["True", "False"],
            correct: 1,
            category: "General Science"
        },
        {
            question: "All types of science explore the natural world.",
            options: ["True", "False"],
            correct: 0,
            category: "General Science"
        },
        {
            question: "All scientists work in laboratories.",
            options: ["True", "False"],
            correct: 1,
            category: "General Science"
        },
        {
            question: "Kids who collect and analyze data to help professional scientists are called citizen scientists.",
            options: ["True", "False"],
            correct: 0,
            category: "General Science"
        },

        // Physical Science (Hard)
        {
            question: "Which action allows electrical energy to change to another form of energy?",
            options: ["sleeping in a cold room", "turning on a light in a dark room", "cooking food on an open campfire", "playing a violin in a music group"],
            correct: 1,
            category: "Physical Science"
        },

        // Critical Thinking Questions (Hard)
        {
            question: "Which statement about frogs is an example of an opinion?",
            options: ["Frogs lay eggs", "Frogs live in all 50 states", "Frogs are very unusual animals", "There are over 4,000 kinds of frogs"],
            correct: 2,
            category: "Scientific Thinking"
        },
        {
            question: "A sea turtle uses its back flippers to dig holes for eggs, its eyes to see predators, its beak to eat and drink, and its front flippers to swim. Which body structure does it use to swim in water?",
            options: ["back flippers", "eyes", "beak", "front flippers"],
            correct: 3,
            category: "Biology"
        },
        {
            question: "In an electrical circuit with a battery, bell, and wires, the bell does not make sound because the circuit is not complete. What needs to be done so the bell will make a sound?",
            options: ["Remove the battery", "Cut one of the wires", "Connect all wires to complete the circuit", "Add more bells"],
            correct: 2,
            category: "Physical Science"
        },
        {
            question: "A student observes a rock that is black, has no odor, is round, and is smooth. Using the sense of touch, which characteristic can be observed?",
            options: ["black", "no odor", "round", "smooth"],
            correct: 3,
            category: "Scientific Thinking"
        },
        {
            question: "A campfire produces different types of energy. The heat from the fire can keep you warm, and the light helps you see in the dark. These are examples of how energy from a fire is",
            options: ["wasted", "helpful", "dangerous", "invisible"],
            correct: 1,
            category: "Physical Science"
        },
        {
            question: "A magnet was able to pick up only some paper clips on a table. What is one reason why?",
            options: ["Some clips were too far away", "Some clips were made of plastic", "The magnet was too strong", "All clips should have been picked up"],
            correct: 0,
            category: "Physical Science"
        },
        {
            question: "A forest area was affected by fire. Animals that remained after the fire may have been negatively affected by",
            options: ["more sunlight", "loss of shelter and food", "cleaner air", "more space to run"],
            correct: 1,
            category: "Environmental Science"
        },
        {
            question: "When a shirt becomes wet, its appearance changes because",
            options: ["it becomes darker in color", "it becomes lighter in color", "it changes shape completely", "it stays exactly the same"],
            correct: 0,
            category: "Physical Science"
        }
    ]
};
