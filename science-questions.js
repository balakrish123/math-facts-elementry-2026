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
        },

        // Human Body - Skeletal System (Easy)
        {
            question: "How many bones does the adult human body have?",
            options: ["210", "206", "180", "126"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "Which bone is the longest and strongest bone in the human body?",
            options: ["Cranium", "Femur", "Tibia", "Radius"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "Tendons hold muscle to bone.",
            options: ["True", "False"],
            correct: 0,
            category: "Human Body"
        },
        {
            question: "Ligaments hold bone to bone.",
            options: ["True", "False"],
            correct: 0,
            category: "Human Body"
        },
        {
            question: "The sternum is a very important bone that protects the",
            options: ["Brain", "Heart", "Liver", "Stomach"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "Of the following, which is a basic need of all living things?",
            options: ["Oxygen gas", "Light", "Hydrogen gas", "Water"],
            correct: 3,
            category: "Biology"
        },
        {
            question: "The adult human of average age and size has approximately how many quarts of blood?",
            options: ["4", "6", "8", "10"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "The larval form of butterflies and moths is more commonly known as what?",
            options: ["Pupa", "Caterpillar", "Chrysalis", "Nymph"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "A virus must do what to reproduce?",
            options: ["Form a latent virus", "Undergo transformation", "Infect a cell", "Conjugate"],
            correct: 2,
            category: "Biology"
        },

        // Body Parts (Easy)
        {
            question: "A chair has four of these. You have two.",
            options: ["Arms", "Legs", "Feet", "Hands"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "You have 32 of these and you use them to eat.",
            options: ["Teeth", "Taste buds", "Muscles", "Bones"],
            correct: 0,
            category: "Human Body"
        },
        {
            question: "You use this part of the body to taste things.",
            options: ["Lips", "Teeth", "Tongue", "Throat"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "This part sends blood around your body.",
            options: ["Lungs", "Brain", "Heart", "Liver"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "Without these you can't breathe.",
            options: ["Heart", "Lungs", "Stomach", "Kidneys"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "These are usually brown, blue, green or hazel.",
            options: ["Hair", "Nails", "Eyes", "Teeth"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "You use this to talk, eat and smile.",
            options: ["Nose", "Mouth", "Ears", "Eyes"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "You have one on your face. You use it to smell.",
            options: ["Mouth", "Chin", "Nose", "Forehead"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "You put shoes on these.",
            options: ["Hands", "Feet", "Legs", "Ankles"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "As children, we have 20 baby teeth that fall out, making way for how many permanent adult teeth?",
            options: ["24", "28", "32", "36"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "Canines are pointed teeth for gripping and tearing.",
            options: ["True", "False"],
            correct: 0,
            category: "Human Body"
        },
        {
            question: "You should aim to drink how many glasses of water every day?",
            options: ["2-3", "4-5", "6-8", "10-12"],
            correct: 2,
            category: "Health"
        },
        {
            question: "When it starts to get dark, your brain releases a chemical to make you feel sleepy. This chemical is called",
            options: ["Dopamine", "Serotonin", "Melatonin", "Adrenaline"],
            correct: 2,
            category: "Human Body"
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
        },

        // Human Body - Skeletal System (Medium)
        {
            question: "The Axial skeleton is comprised of how many bones?",
            options: ["90", "126", "60", "80"],
            correct: 3,
            category: "Human Body"
        },
        {
            question: "How many bones make up the human spine?",
            options: ["7", "33", "20", "25"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "The Appendicular skeleton is comprised of how many bones?",
            options: ["126", "100", "80", "110"],
            correct: 0,
            category: "Human Body"
        },
        {
            question: "Which of the following bones is an example of a short bone?",
            options: ["Femur", "Cranium", "Carpals", "Radius"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "The smallest of the formed elements of the blood are the",
            options: ["White cells", "Red cells", "Platelets", "Plasma"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "What is the primary function of platelets in human blood?",
            options: ["Carry oxygen", "Fight infection", "Clotting", "Transport nutrients"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "Surplus red blood cells, needed to meet an emergency, are mainly stored in what organ?",
            options: ["Pancreas", "Spleen", "Liver", "Kidneys"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "In the human brain, body temperature, metabolism, heart rate, and sleep are influenced by this region",
            options: ["Hypothalamus", "Midbrain", "Corpus callosum", "Cerebellum"],
            correct: 0,
            category: "Human Body"
        },
        {
            question: "Digestion of carbohydrates begins where?",
            options: ["Small intestines", "Colon", "Mouth", "Stomach"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "Digestion of proteins begins in which of the following human organs?",
            options: ["Small intestines", "Colon", "Mouth", "Stomach"],
            correct: 3,
            category: "Human Body"
        },
        {
            question: "Bile has what function in digestion?",
            options: ["Emulsify lipids", "Digest proteins", "Store glucose", "Digest carbohydrates"],
            correct: 0,
            category: "Human Body"
        },

        // Body Parts (Medium)
        {
            question: "People often get these pierced.",
            options: ["Nose", "Ears", "Eyebrows", "Lips"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "A belt usually goes around this.",
            options: ["Neck", "Chest", "Waist", "Hips"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "You can put a watch on this part of the body.",
            options: ["Ankle", "Wrist", "Finger", "Neck"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "They are halfway down your legs.",
            options: ["Ankles", "Thighs", "Knees", "Shins"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "The part of your body where food is digested after you've eaten it.",
            options: ["Intestines", "Stomach", "Liver", "Esophagus"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "There are five of these on each foot.",
            options: ["Bones", "Muscles", "Toes", "Joints"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "People who lift weights and workout a lot have big ones.",
            options: ["Bones", "Muscles", "Organs", "Joints"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "You can put a ring on this.",
            options: ["Toe", "Finger", "Ear", "Nose"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "This helps your arm to bend.",
            options: ["Shoulder", "Wrist", "Elbow", "Knuckle"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "You have one on each hand. They are short and fat.",
            options: ["Fingers", "Thumbs", "Knuckles", "Palms"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "This connects your head to your body.",
            options: ["Spine", "Shoulders", "Neck", "Collarbone"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "How many different types of bacteria live in our mouths?",
            options: ["Around 100", "Around 300", "Around 700", "Around 1000"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "How long is the small intestine?",
            options: ["Around 6 metres", "Around 8 metres", "Around 10 metres", "Around 12 metres"],
            correct: 0,
            category: "Human Body"
        },
        {
            question: "Some human blood is blue.",
            options: ["True", "False"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "Premolars are the largest human teeth.",
            options: ["True", "False"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "Starchy carbohydrate foods include pasta, potatoes, bread and cheese.",
            options: ["True", "False"],
            correct: 1,
            category: "Health"
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
        },

        // Human Body - Skeletal System (Hard)
        {
            question: "The human vertebrae are classified as which type of bone?",
            options: ["Long", "Irregular", "Flat", "Short"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "The ribs, sternum and scapulae are all what type of bone?",
            options: ["Long", "Flat", "Short", "Irregular"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "Which of the following bones is an example of a long bone?",
            options: ["Ribs", "Ulna", "Phalanges", "Mandible"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "Once erythrocytes (red blood cells) enter the blood in humans, they have an average lifetime of how many days?",
            options: ["10 days", "120 days", "200 days", "360 days"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "The several types of white blood cells are sometimes collectively referred to as",
            options: ["Erythrocytes", "Leukocytes", "Erythroblasts", "Thrombocytes"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "Lengthening of long bones in humans occurs in which area of the bone?",
            options: ["Medullary canal", "Cancellous bone", "Periosteum", "Epiphysis"],
            correct: 3,
            category: "Human Body"
        },
        {
            question: "All cells of an organism find their lineage from a single fertilized cell called what?",
            options: ["Gamete", "Zygote", "Embryo", "Blastocyst"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "Name the clear watery liquid that surrounds the brain and spinal cord",
            options: ["Plasma", "Lymph", "Cerebrospinal fluid", "Synovial fluid"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "The physical appearance and properties of an organism which is the expression of the genetic makeup is called the",
            options: ["Phenotype", "Pangenesis", "Parental trait", "Genotype"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "During the final stage of cell division, the chromosomes become attenuated and the nuclear membrane is reconstituted. This phase is known as",
            options: ["Prophase", "Metaphase", "Anaphase", "Telophase"],
            correct: 3,
            category: "Biology"
        },
        {
            question: "A layer of dead skin cells is found in the",
            options: ["Subcutaneous tissue", "Dermis", "Epidermis", "Hypodermis"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "The nervous system develops from which germ layer?",
            options: ["Ectoderm", "Mesoderm", "Endoderm", "Blastoderm"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "During inspiration, the diaphragm moves",
            options: ["Down by contraction", "Down by relaxation", "Up by contraction", "Up by relaxation"],
            correct: 0,
            category: "Human Body"
        },
        {
            question: "Which of the following is NOT a function of the kidney?",
            options: ["Excretion of urea", "Regulation of fluids", "Elimination of toxins", "Defecation"],
            correct: 3,
            category: "Human Body"
        },
        {
            question: "The chromosomes of a eukaryotic cell are located in the",
            options: ["Mitochondria", "Nucleus", "Ribosome", "Endoplasm"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "Organisms with cells containing two sets of parental chromosomes are called",
            options: ["Diploid", "Bisomal", "Haploid", "Autosomal"],
            correct: 0,
            category: "Biology"
        },
        {
            question: "Which of the following statements is TRUE of insulin?",
            options: ["Secreted by pancreas", "A protein", "Involved in glucose metabolism", "All of the above"],
            correct: 3,
            category: "Human Body"
        },
        {
            question: "Costal cartilage functions to",
            options: ["Attach ribs to sternum", "Cover ends of femur", "Form ear structure", "Form vertebral disks"],
            correct: 0,
            category: "Human Body"
        },

        // Body Parts (Hard)
        {
            question: "It can be straight, curly or wavy.",
            options: ["Eyelashes", "Eyebrows", "Hair", "Fingernails"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "Women often paint these.",
            options: ["Lips", "Eyelids", "Nails", "Cheeks"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "The part of your body with your hair, eyes, nose, mouth and ears on.",
            options: ["Face", "Head", "Skull", "Cranium"],
            correct: 1,
            category: "Human Body"
        },
        {
            question: "This part of the body is between your eyebrows and hair.",
            options: ["Scalp", "Temple", "Forehead", "Crown"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "You usually lie down on this.",
            options: ["Stomach", "Side", "Back", "Chest"],
            correct: 2,
            category: "Human Body"
        },
        {
            question: "Identical twins have identical fingerprints.",
            options: ["True", "False"],
            correct: 1,
            category: "Biology"
        },
        {
            question: "If you have 5 cups of orange juice in a day, that counts as your 5 daily portions of fruit and vegetables.",
            options: ["True", "False"],
            correct: 1,
            category: "Health"
        },
        {
            question: "Nicotine is a drug found in energy drinks.",
            options: ["True", "False"],
            correct: 1,
            category: "Health"
        },
        {
            question: "Identical twins come from just one egg and one sperm.",
            options: ["True", "False"],
            correct: 0,
            category: "Biology"
        }
    ]
};
