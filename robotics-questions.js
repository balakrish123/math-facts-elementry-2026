// Robotics questions organized by difficulty level
// Topics: Basic Concepts, Programming, Engineering Design, Real Platforms
// Perfect for Elementary (Grades 3-5)

const roboticsQuestions = {
    easy: [
        // ===== BASIC CONCEPTS & PARTS (Easy) =====
        {
            question: "What is a robot?",
            options: ["A machine that can sense, think, and act", "A toy that only plays music", "A computer game", "A video camera"],
            correct: 0,
            category: "Basic Concepts"
        },
        {
            question: "Which of these is a sensor?",
            options: ["A motor that makes things move", "A camera that can see", "A light bulb", "A battery"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "What does an actuator do?",
            options: ["Thinks and makes decisions", "Makes the robot move or do something", "Sends signals", "Stores power"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "A robot's 'brain' that makes decisions is called a",
            options: ["Motor", "Processor/Controller", "Sensor", "Wheel"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "What powers most robots?",
            options: ["Sunlight", "Batteries", "Wind", "Water"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "Which of these can a robot do?",
            options: ["Think about feelings", "Sense things like color and distance", "Dream about the future", "Eat food"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "A robot wheel is an example of what?",
            options: ["A sensor", "An actuator", "A processor", "A battery"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "Robots can be found in all of these places EXCEPT",
            options: ["Factories", "Hospitals", "Space", "The moon's atmosphere"],
            correct: 3,
            category: "Basic Concepts"
        },
        {
            question: "What must a robot have to move or pick things up?",
            options: ["More sensors", "A screen", "Motors or actuators", "Wheels only"],
            correct: 2,
            category: "Basic Concepts"
        },
        {
            question: "A robot's light sensor helps it",
            options: ["Make sounds", "Detect brightness and darkness", "Move faster", "Think better"],
            correct: 1,
            category: "Basic Concepts"
        },

        // ===== PROGRAMMING BASICS (Easy) =====
        {
            question: "What is a program for a robot?",
            options: ["A TV show", "A set of instructions telling the robot what to do", "A game", "A song"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "In programming, what does a 'loop' do?",
            options: ["Creates a sound", "Repeats the same actions over and over", "Connects wires", "Makes the robot spin"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "What is the correct order for programming a robot to draw a square?",
            options: ["Move, turn, repeat 4 times", "Turn, move, spin randomly", "Repeat all day", "Stop and rest"],
            correct: 0,
            category: "Programming"
        },
        {
            question: "If you want your robot to do something ONLY when it sees red color, you need",
            options: ["A faster motor", "An 'if' statement (condition)", "More batteries", "Bigger wheels"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "What happens if you tell a robot to move forward forever without stopping?",
            options: ["It will crash or get stuck", "It will be happy", "It will go to sleep", "It will turn around"],
            correct: 0,
            category: "Programming"
        },
        {
            question: "Scratch is a program used for",
            options: ["Scratching surfaces", "Making music only", "Creating visual programs and games", "Eating snacks"],
            correct: 2,
            category: "Programming"
        },
        {
            question: "In Scratch, what does the 'repeat' block do?",
            options: ["Stops the program", "Does something multiple times", "Changes the color", "Makes sound"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "What should you do if your robot's program doesn't work correctly?",
            options: ["Give up", "Test it and fix the mistakes (debug)", "Throw it away", "Never try again"],
            correct: 1,
            category: "Programming"
        },

        // ===== ENGINEERING DESIGN (Easy) =====
        {
            question: "What is the first step in the engineering design process?",
            options: ["Build immediately", "Identify the problem", "Give up", "Ask an adult"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "After you build your robot, what should you do next?",
            options: ["Stop and show it", "Test it and see if it works", "Leave it alone", "Paint it"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "If your robot doesn't work properly, what is the BEST thing to do?",
            options: ["Destroy it", "Try to improve it and test again", "Blame someone else", "Never build again"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "Drawing a plan BEFORE building is",
            options: ["A waste of time", "Not important", "A great way to plan and organize", "Never done"],
            correct: 2,
            category: "Engineering Design"
        },
        {
            question: "What does 'prototype' mean?",
            options: ["A final perfect robot", "The first version you build to test your ideas", "A broken robot", "A drawing"],
            correct: 1,
            category: "Engineering Design"
        },

        // ===== REAL ROBOTICS PLATFORMS (Easy) =====
        {
            question: "LEGO is used to build robots because it is",
            options: ["Difficult to use", "Easy to build with and modify", "Only for younger kids", "Doesn't work"],
            correct: 1,
            category: "Real Platforms"
        },
        {
            question: "VEX robots are commonly used in",
            options: ["Movie making", "Cooking competitions", "School robotics competitions", "Painting"],
            correct: 2,
            category: "Real Platforms"
        },
        {
            question: "What is a big advantage of using building blocks for robots?",
            options: ["They are expensive", "You can change and rebuild them easily", "They break easily", "No advantage"],
            correct: 1,
            category: "Real Platforms"
        },
    ],

    medium: [
        // ===== BASIC CONCEPTS & PARTS (Medium) =====
        {
            question: "A robot uses sensors to",
            options: ["Store energy", "Gather information about its environment", "Make noise", "Display colors only"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "Which component is responsible for making decisions in a robot?",
            options: ["Motor", "Microcontroller/CPU", "Battery", "Sensor"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "If a robot needs to know the distance to a wall, which sensor would be best?",
            options: ["Color sensor", "Ultrasonic distance sensor", "Sound sensor", "Temperature sensor"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "A robot's gripper or arm is an example of an",
            options: ["Sensor", "Processor", "Actuator", "Battery"],
            correct: 2,
            category: "Basic Concepts"
        },
        {
            question: "Why do robots need multiple sensors?",
            options: ["To make noise", "To sense different things and make better decisions", "To look cooler", "No reason"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "Which of these is NOT typically a robot sensor?",
            options: ["Camera", "Distance sensor", "Motor", "Temperature sensor"],
            correct: 2,
            category: "Basic Concepts"
        },
        {
            question: "A robot's power source (battery) is most similar to",
            options: ["Human brains", "Human muscles", "Human food energy", "Human eyes"],
            correct: 2,
            category: "Basic Concepts"
        },

        // ===== PROGRAMMING BASICS (Medium) =====
        {
            question: "What does 'algorithm' mean in robotics?",
            options: ["A dance move", "A step-by-step plan to solve a problem", "A type of robot", "A programming error"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "An 'IF-THEN-ELSE' statement in programming means",
            options: ["Repeat forever", "If condition is true do X, otherwise do Y", "Stop the robot", "Start the robot"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "What is 'debugging' in programming?",
            options: ["Adding more features", "Finding and fixing errors in code", "Rewriting everything", "Deleting files"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "A variable in programming is used to",
            options: ["Store and remember information", "Make the robot run faster", "Change colors", "Nothing important"],
            correct: 0,
            category: "Programming"
        },
        {
            question: "When programming a robot to follow a black line, you need",
            options: ["Only wheels", "A color sensor and logic to adjust movement", "More batteries", "No sensors"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "How many times will this program run? 'REPEAT 3 times: Move forward 1 step'",
            options: ["Once", "Twice", "3 times", "Forever"],
            correct: 2,
            category: "Programming"
        },

        // ===== ENGINEERING DESIGN (Medium) =====
        {
            question: "The engineering design process includes all of these EXCEPT",
            options: ["Plan", "Test", "Improve", "Give up and quit"],
            correct: 3,
            category: "Engineering Design"
        },
        {
            question: "Why is testing important in the design process?",
            options: ["It's boring", "It shows if your solution works and reveals problems", "It's not important", "To waste time"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "If test results show your robot isn't working well, this is",
            options: ["A complete failure", "A disaster", "Valuable information to improve your design", "The end"],
            correct: 2,
            category: "Engineering Design"
        },
        {
            question: "What should you document when testing your robot?",
            options: ["Nothing", "What it was supposed to do and what actually happened", "Only good results", "Only pictures"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "Before building, engineers usually make",
            options: ["Sandwiches", "Sketches and designs", "Music", "Lists of failures"],
            correct: 1,
            category: "Engineering Design"
        },

        // ===== REAL ROBOTICS PLATFORMS (Medium) =====
        {
            question: "What is a key feature of VEX Robotics kits?",
            options: ["They're very cheap", "They're designed for competitions with standardized parts", "They only work indoors", "They're only for adults"],
            correct: 1,
            category: "Real Platforms"
        },
        {
            question: "LEGO Mindstorms can be programmed with",
            options: ["Only Scratch", "Visual or code-based programming", "No programming", "Mathematics only"],
            correct: 1,
            category: "Real Platforms"
        },
        {
            question: "What is Arduino used for in robotics?",
            options: ["Cooking", "Processing sensor data and controlling motors", "Drawing", "Nothing"],
            correct: 1,
            category: "Real Platforms"
        },
    ],

    hard: [
        // ===== BASIC CONCEPTS & PARTS (Hard) =====
        {
            question: "In a feedback loop system, the robot uses sensor data to",
            options: ["Ignore problems", "Constantly adjust its behavior based on what it senses", "Stop working", "Make random decisions"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "Which type of motor is best for precise positioning in a robot arm?",
            options: ["DC motor", "Servo motor", "Loud motor", "Any motor"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "What is 'calibration' in robotics?",
            options: ["Painting the robot", "Adjusting sensors to ensure accurate readings", "Breaking something", "Unnecessary"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "A robot using computer vision typically has",
            options: ["Wheels only", "A camera and processing power to analyze images", "No sensors", "Sound only"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "What is 'dead reckoning' in robot navigation?",
            options: ["Robot navigation fails", "Moving and tracking position based on previous movement", "Getting lost", "Using only sensors"],
            correct: 1,
            category: "Basic Concepts"
        },

        // ===== PROGRAMMING BASICS (Hard) =====
        {
            question: "What is 'object-oriented programming' used for in robotics?",
            options: ["Making objects visible", "Organizing code into reusable components", "Making code faster", "Painting"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "A 'finite state machine' in robot programming is used to",
            options: ["Count machines", "Manage robot states and transitions between them", "Speed up the robot", "Nothing"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "What is the purpose of 'sensor fusion'?",
            options: ["Combining data from multiple sensors for better decisions", "Fusing wires together", "Making more sensors", "Ignoring data"],
            correct: 0,
            category: "Programming"
        },
        {
            question: "In PID (Proportional-Integral-Derivative) control, what is being managed?",
            options: ["Volume levels", "Error correction and system stability", "Color changes", "Speed only"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "What does 'real-time' programming mean for robots?",
            options: ["Programming on TV", "Code that responds immediately to sensor input", "Programming at night", "No meaning"],
            correct: 1,
            category: "Programming"
        },

        // ===== ENGINEERING DESIGN (Hard) =====
        {
            question: "What is 'iterative design' in engineering?",
            options: ["Building once", "Repeating the design-build-test cycle to improve", "Never changing anything", "Random testing"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "Why is trade-off analysis important in robot design?",
            options: ["It's not important", "To balance competing needs (speed vs accuracy, cost vs performance)", "To make the robot prettier", "To confuse people"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "What should be considered when designing a rescue robot?",
            options: ["Color only", "Speed, reliability, durability, and safety", "Nothing", "Cost only"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "How is 'failure analysis' used in robot engineering?",
            options: ["Ignoring problems", "Learning what went wrong to prevent future failures", "Giving up", "Only documenting successes"],
            correct: 1,
            category: "Engineering Design"
        },

        // ===== REAL ROBOTICS PLATFORMS (Hard) =====
        {
            question: "ROS (Robot Operating System) is primarily used for",
            options: ["Playing", "Managing robot hardware and software complexity", "Painting", "Nothing"],
            correct: 1,
            category: "Real Platforms"
        },
        {
            question: "What makes FIRST Robotics competitions unique?",
            options: ["No competition", "Student teams build and compete with engineering challenges", "Only for professionals", "No learning"],
            correct: 1,
            category: "Real Platforms"
        },
        {
            question: "Cobots (collaborative robots) are designed to",
            options: ["Work alone", "Work safely alongside humans", "Compete with humans", "Do nothing"],
            correct: 1,
            category: "Real Platforms"
        },
    ],

    expert: [
        // ===== ADVANCED CONCEPTS (Expert) =====
        {
            question: "In 'inverse kinematics' for a robot arm, the system must calculate",
            options: ["Only forward movement", "Joint angles needed to reach a target position", "Motor speed", "Wire connections"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "What is 'path planning' in autonomous robotics?",
            options: ["Making pretty designs", "Determining the optimal route from start to goal while avoiding obstacles", "Building paths with wood", "Following a fixed path"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "SLAM (Simultaneous Localization and Mapping) allows a robot to",
            options: ["Paint faster", "Create a map of its environment while tracking its own position", "Slam things", "Sleep better"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "What is the purpose of a 'compliant actuator' in robotic systems?",
            options: ["It always listens", "It provides flexibility and can absorb impacts safely", "It makes noise", "It only works once"],
            correct: 1,
            category: "Basic Concepts"
        },
        {
            question: "In robotics, 'backdrivability' refers to",
            options: ["Returning from a mission", "The ability to manually move a joint and have sensors detect the movement", "Backing up", "Breaking things"],
            correct: 1,
            category: "Basic Concepts"
        },

        // ===== ADVANCED PROGRAMMING (Expert) =====
        {
            question: "What does 'machine learning' in robotics allow?",
            options: ["Robots to learn from experience", "Only following pre-programmed instructions", "Making the robot learn to cook", "Robots to dream"],
            correct: 0,
            category: "Programming"
        },
        {
            question: "A 'behavior tree' in robot programming is used to",
            options: ["Grow plants", "Organize decision-making in a hierarchical structure", "Draw trees", "Nothing important"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "What is 'multi-threaded programming' in robotics?",
            options: ["Using multiple threads as decoration", "Running multiple processes simultaneously on different cores", "Sewing", "Only one task at a time"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "In 'control systems', what does 'stability' mean?",
            options: ["The robot is stable", "System returns to equilibrium after a disturbance", "The robot is stable", "No meaning"],
            correct: 1,
            category: "Programming"
        },
        {
            question: "'Reinforcement learning' in robotics trains robots by",
            options: ["Yelling at them", "Rewarding correct behaviors and penalizing wrong ones", "Showing them videos", "Giving them breaks"],
            correct: 1,
            category: "Programming"
        },

        // ===== ADVANCED ENGINEERING (Expert) =====
        {
            question: "What is 'systems engineering' in complex robotics projects?",
            options: ["Only coding", "Integrating all components to work together toward system goals", "Building shelves", "Organizing parts"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "'Stress testing' in robot design involves",
            options: ["Making the robot worried", "Pushing the robot to its limits to find failure points", "Scaring the robot", "Rest breaks"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "What is 'redundancy' in critical robotics systems?",
            options: ["Unnecessary repetition", "Having backup systems so robot can continue if one fails", "Duplicating everything", "Being repetitive"],
            correct: 1,
            category: "Engineering Design"
        },
        {
            question: "'Risk management' in robotics project planning includes",
            options: ["Taking all risks", "Identifying, analyzing, and mitigating potential problems", "Ignoring problems", "Hope for the best"],
            correct: 1,
            category: "Engineering Design"
        },

        // ===== ADVANCED PLATFORMS (Expert) =====
        {
            question: "What is the 'ROS middleware' architecture designed for?",
            options: ["Cooking food", "Enabling communication between different robot components and systems", "Making robots social", "Playing music"],
            correct: 1,
            category: "Real Platforms"
        },
        {
            question: "In 'drone/UAV' robotics, 'gimbal stabilization' provides",
            options: ["Better views", "Stable camera movement independent of drone orientation", "Gym equipment", "Spinning"],
            correct: 1,
            category: "Real Platforms"
        },
        {
            question: "'Swarm robotics' involves",
            options: ["Bees working together", "Multiple robots coordinating to solve complex problems", "Robots fighting", "One robot alone"],
            correct: 1,
            category: "Real Platforms"
        },
        {
            question: "What is 'teleoperation' in professional robotics?",
            options: ["Watching TV", "Remote control of a robot from a distance with sensory feedback", "Calling on the phone", "Television operation"],
            correct: 1,
            category: "Real Platforms"
        },
        {
            question: "'Neural networks' in robotics are used for",
            options: ["Brain surgery", "Pattern recognition and autonomous decision-making", "Networking computers", "Nothing"],
            correct: 1,
            category: "Real Platforms"
        },
    ]
};

// True/False questions for variety
const roboticsTrueOrFalse = {
    easy: [
        { question: "All robots have wheels.", answer: false, category: "Basic Concepts" },
        { question: "A robot needs a power source to work.", answer: true, category: "Basic Concepts" },
        { question: "Robots can think like humans do.", answer: false, category: "Basic Concepts" },
        { question: "Programming is the same as building a robot.", answer: false, category: "Programming" },
        { question: "You can change and rebuild things made with LEGO.", answer: true, category: "Real Platforms" },
    ],
    medium: [
        { question: "A robot sensor is like a human sense.", answer: true, category: "Basic Concepts" },
        { question: "Once you program a robot, you never need to change it.", answer: false, category: "Programming" },
        { question: "Testing is an important part of creating robots.", answer: true, category: "Engineering Design" },
        { question: "A robot can only have one sensor.", answer: false, category: "Basic Concepts" },
        { question: "An algorithm is a step-by-step solution to a problem.", answer: true, category: "Programming" },
    ],
    hard: [
        { question: "Feedback loops help robots correct their own mistakes.", answer: true, category: "Basic Concepts" },
        { question: "Sensor fusion means combining data from multiple sensors.", answer: true, category: "Programming" },
        { question: "Iterative design means building something only once.", answer: false, category: "Engineering Design" },
        { question: "Calibration helps ensure sensors give accurate readings.", answer: true, category: "Basic Concepts" },
        { question: "ROS is only used for toy robots.", answer: false, category: "Real Platforms" },
    ],
    expert: [
        { question: "SLAM allows robots to map their environment while tracking position.", answer: true, category: "Basic Concepts" },
        { question: "Inverse kinematics calculates how fast a robot should move.", answer: false, category: "Basic Concepts" },
        { question: "Machine learning allows robots to improve through experience.", answer: true, category: "Programming" },
        { question: "A behavior tree is used for organizing robot decision-making.", answer: true, category: "Programming" },
        { question: "Redundancy in robotics means having unnecessary duplicate parts.", answer: false, category: "Engineering Design" },
        { question: "Teleoperation means controlling a robot remotely with feedback.", answer: true, category: "Real Platforms" },
        { question: "Compliant actuators cannot absorb impacts.", answer: false, category: "Basic Concepts" },
        { question: "Swarm robotics involves multiple robots working together.", answer: true, category: "Real Platforms" },
    ]
};

// Matching questions - parts and their functions (with visual representations)
const roboticsMatching = {
    easy: [
        {
            question: "Match the robot PART to its FUNCTION",
            type: "parts",
            pairs: [
                { left: { emoji: "⚡", name: "Motor" }, right: "Makes the robot move" },
                { left: { emoji: "🔋", name: "Battery" }, right: "Provides power" },
                { left: { emoji: "📷", name: "Camera" }, right: "Helps the robot see" },
                { left: { emoji: "🔄", name: "Wheel" }, right: "Helps move across ground" }
            ],
            category: "Basic Concepts"
        },
        {
            question: "Match ROBOT COMPONENTS to their PURPOSE",
            type: "components",
            pairs: [
                { left: { emoji: "📡", name: "Remote Control" }, right: "Controls robot from distance" },
                { left: { emoji: "🟩", name: "Base Plate" }, right: "Holds all parts together" },
                { left: { emoji: "🔗", name: "Track/Belt" }, right: "Moves robot over rough terrain" },
                { left: { emoji: "━", name: "Line Sensor" }, right: "Detects black/white lines" }
            ],
            category: "Basic Concepts"
        }
    ],
    medium: [
        {
            question: "Match ROBOT PARTS to their FUNCTION",
            type: "components",
            pairs: [
                { left: { emoji: "🧠", name: "Microcontroller" }, right: "Processes information & controls robot" },
                { left: { emoji: "⚙️", name: "Servo Motor" }, right: "Precise rotational movement for arms" },
                { left: { emoji: "🔍", name: "Ultrasonic Sensor" }, right: "Measures distance to objects" },
                { left: { emoji: "🌈", name: "Color Sensor" }, right: "Detects and identifies colors" },
                { left: { emoji: "🟦", name: "Base Chassis" }, right: "Main structural frame" }
            ],
            category: "Basic Concepts"
        },
        {
            question: "Match PROGRAMMING TERMS to their MEANINGS",
            type: "programming",
            pairs: [
                { left: { emoji: "🔁", name: "Loop" }, right: "Repeats actions" },
                { left: { emoji: "❓", name: "Condition" }, right: "Tests if something is true" },
                { left: { emoji: "📦", name: "Variable" }, right: "Stores information" },
                { left: { emoji: "⚙️", name: "Function" }, right: "Group of instructions" }
            ],
            category: "Programming"
        },
        {
            question: "Match LEGO/VEX PARTS to their USE",
            type: "platform_parts",
            pairs: [
                { left: { emoji: "⬛", name: "Brick/Controller" }, right: "Main computer for the robot" },
                { left: { emoji: "⏱️", name: "Touch Sensor" }, right: "Detects when robot hits something" },
                { left: { emoji: "🔧", name: "Connector/Gear" }, right: "Links parts and transfers power" },
                { left: { emoji: "▭", name: "Beam/Strut" }, right: "Creates robot structure & frame" }
            ],
            category: "Real Platforms"
        }
    ],
    hard: [
        {
            question: "Match ADVANCED CONCEPTS to their DESCRIPTIONS",
            type: "advanced",
            pairs: [
                { left: { emoji: "📈", name: "PID Control" }, right: "Maintains stability and corrects errors" },
                { left: { emoji: "🔗", name: "Sensor Fusion" }, right: "Combines data from multiple sensors" },
                { left: { emoji: "🎮", name: "State Machine" }, right: "Manages different robot states" },
                { left: { emoji: "⚖️", name: "Calibration" }, right: "Adjusts sensors for accuracy" }
            ],
            category: "Programming"
        },
        {
            question: "Match ADVANCED PARTS to their APPLICATIONS",
            type: "advanced_parts",
            pairs: [
                { left: { emoji: "⚙️", name: "Pneumatic System" }, right: "Uses compressed air for powerful gripping" },
                { left: { emoji: "🎚️", name: "Potentiometer" }, right: "Measures arm angle/position" },
                { left: { emoji: "📊", name: "Gyroscope Sensor" }, right: "Detects robot rotation & tilt" },
                { left: { emoji: "🔴", name: "LED/Status Light" }, right: "Shows robot state & debug info" },
                { left: { emoji: "⚡", name: "Power Distribution" }, right: "Safely sends power to all parts" }
            ],
            category: "Real Platforms"
        }
    ],
    expert: [
        {
            question: "Match EXPERT CONCEPTS to their DEFINITIONS",
            type: "expert_concepts",
            pairs: [
                { left: { emoji: "🗺️", name: "SLAM" }, right: "Mapping environment while tracking position" },
                { left: { emoji: "🎮", name: "Inverse Kinematics" }, right: "Calculating joint angles for target position" },
                { left: { emoji: "🧠", name: "Machine Learning" }, right: "Robot learns from experience & data" },
                { left: { emoji: "🔄", name: "Behavior Tree" }, right: "Hierarchical decision-making structure" },
                { left: { emoji: "🌐", name: "Neural Network" }, right: "Pattern recognition & autonomous decisions" }
            ],
            category: "Programming"
        },
        {
            question: "Match ADVANCED TECH to its PURPOSE",
            type: "advanced_tech",
            pairs: [
                { left: { emoji: "🚁", name: "Gimbal Stabilization" }, right: "Keeps camera steady on moving platform" },
                { left: { emoji: "👥", name: "Swarm Robotics" }, right: "Multiple robots coordinating together" },
                { left: { emoji: "📡", name: "Teleoperation" }, right: "Remote control with sensory feedback" },
                { left: { emoji: "🛡️", name: "Redundancy" }, right: "Backup systems for safety & reliability" },
                { left: { emoji: "🔧", name: "Compliant Actuator" }, right: "Flexible joint that absorbs impacts" }
            ],
            category: "Real Platforms"
        }
    ]
};
