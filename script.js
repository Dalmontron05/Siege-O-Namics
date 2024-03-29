// Main JavaScript file



const operators =
[
    // Defenders
    {
        operatorName: "Mute",
        operatorSpeed: 1, // Armor is calculated from speed
        operatorQuote: "\"People think my codename is because I don’t like to talk. Maybe I just don’t like you.\"",
        operatorDescription: "TEMPORARY Mute is best used as an anchor. He passively denies attackers drones. He also has a shotgun that's relatively good at site setup",
        operatorPortrait: "./Assets/Operators/Portraits/mute-portrait.webp",
        operatorIcon: "./Assets/Operators/Icons/mute-icon.png"
    },
    {
        operatorName: "Smoke",
        operatorSpeed: 2,
        operatorQuote: "\"Sure, I care about the enviroment. Immediately around me, anyway.\"",
        operatorDescription: "Smokes description placeholder",
        operatorPortrait: "./Assets/Operators/Portraits/smoke-portrait.webp",
        operatorIcon: "./Assets/Operators/Icons/smoke-icon.png"
    },
    {
        operatorName: "Bandit",
        operatorSpeed: 3,
        operatorQuote: "\"Survival is all about timing. Nature doesn’t give second chances.\"",
        operatorDescription: "Bandits placeholder description",
        operatorPortrait: "./Assets/Operators/Portraits/bandit-portrait.webp",
        operatorIcon: "./Assets/Operators/Icons/bandit-icon.png"
    }
]


// Create a variable to store the current operator index
let currentOperator = 0; //? what's the difference between let and var? block-scope like wtf is that


// function to update the operator info
function updateOperatorInfo()
{
    // Updates operator name
    document.getElementById("operator-name").innerHTML = operators[currentOperator].operatorName;


    // Updates operator portrait
    document.getElementById("operator-portrait").src = operators[currentOperator].operatorPortrait;


    // Updates operator icon
    document.getElementById("operator-icon").src = operators[currentOperator].operatorIcon;


    // Saves HTML dot-rating elements as variables
    let speedDot1 = document.getElementById("speed-dot1");
    let speedDot2 = document.getElementById("speed-dot2");
    let speedDot3 = document.getElementById("speed-dot3");
    let armorDot1 = document.getElementById("armor-dot1");
    let armorDot2 = document.getElementById("armor-dot2");
    let armorDot3 = document.getElementById("armor-dot3");

    
    // Updates operator speed AND armor
    if (operators[currentOperator].operatorSpeed == 1)
    {
        speedDot1.classList.add("filled");
        speedDot2.classList.remove("filled");
        speedDot3.classList.remove("filled");

        armorDot1.classList.add("filled");
        armorDot2.classList.add("filled");
        armorDot3.classList.add("filled");
    }
    else if (operators[currentOperator].operatorSpeed == 2)
    {
        speedDot1.classList.add("filled");
        speedDot2.classList.add("filled");
        speedDot3.classList.remove("filled");

        armorDot1.classList.add("filled");
        armorDot2.classList.add("filled");
        armorDot3.classList.remove("filled");
    }
    else
    {
        speedDot1.classList.add("filled");
        speedDot2.classList.add("filled");
        speedDot3.classList.add("filled");

        armorDot1.classList.remove("filled");
        armorDot2.classList.remove("filled");
        armorDot3.classList.add("filled");
    }


    // Updates operator quote
    document.getElementById("operator-quote").innerHTML = operators[currentOperator].operatorQuote;


    // Updates operator description
    document.getElementById("operator-description").innerHTML = operators[currentOperator].operatorDescription;
}


//* THIS IS TEMPORARY until you've given proper operator 'template' info within html itself
// init first operator
updateOperatorInfo();


// event listener for next button
document.getElementById("next").addEventListener("click", function()
{
    // Keeps array from going out of bounds
    if (currentOperator >= (operators.length - 1))
    {
        return;
    }
    else
    {
        // Increment the current operator index
        currentOperator++;

        // Update
        updateOperatorInfo();
    };
});


// event listener for previous button
document.getElementById("previous").addEventListener("click", function()
{
    // Keeps array from going out of bounds
    if (currentOperator <= 0)
    {
        return;
    }
    else
    {
        // Decrement the current operator index
        currentOperator--;
        
        // Update
        updateOperatorInfo();
    }
});

