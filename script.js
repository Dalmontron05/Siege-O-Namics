// Main JavaScript file
// Operator icons found from here (goated website tbh): https://r6operators.marcopixel.eu/


const operators =
  [
    // Attackers
    {
      operatorName: "Sledge",
      operatorSpeed: 1, // Armor is calculated from speed
      operatorIcon: "./Assets/Operators/Icons/sledge.svg",
      operatorPortrait: "./Assets/Operators/Portraits/sledge.webp",
      operatorQuote: "\"Coming through!\"",
      operatorDescription: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum vitae ornare erat. Nam facilisis justo sed urna volutpat, quis tincidunt massa dignissim. Vestibulum justo enim, maximus vel porta et, luctus ac tellus. Quisque vulputate ac enim quis semper. Maecenas tincidunt justo ante, a cursus ligula tristique ut. Aliquam erat volutpat. Quisque convallis porta ipsum iaculis interdum. Maecenas mattis laoreet sem, vitae tempus dolor finibus nec.\n\nSed volutpat turpis mollis, varius tellus ac, porttitor ex. Vestibulum ultricies lobortis felis ullamcorper mattis. Proin eu luctus quam. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Proin porta rutrum est. Aliquam ut nisl sapien. Duis in lorem mi.\n\nProin interdum elementum lectus, at dignissim nisl pretium vitae. Donec ornare pulvinar quam eu blandit. Ut a sagittis risus. Cras sed nisi consequat lorem bibendum fermentum. Fusce velit velit, blandit at tellus non, condimentum iaculis lacus. Ut eget lacus sit amet urna laoreet ornare ornare at erat. Nunc id lacus scelerisque, luctus massa at, consequat risus. Sed bibendum nisi tellus, lacinia lobortis justo tempor sit amet. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Vestibulum faucibus dui vitae rhoncus consequat. Aliquam a vestibulum lorem, sit amet tempor turpis. In elementum urna condimentum massa tincidunt interdum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer eget ante congue, pharetra est rhoncus, euismod dui. Praesent finibus nunc est, non volutpat odio placerat a. Cras pretium neque sed dolor rutrum accumsan.\n\nCras ut justo tempus, euismod lacus tempus, cursus nulla. Proin efficitur quis neque sed mattis. Donec leo risus, imperdiet ut nunc molestie, placerat blandit lorem. Aenean malesuada eleifend mollis. Ut fringilla enim ut metus hendrerit, quis molestie tortor elementum. Ut vestibulum leo eget facilisis vestibulum. Nam non ante magna. Suspendisse finibus sapien nec ullamcorper bibendum. Donec sodales condimentum magna, nec sollicitudin lacus iaculis sit amet. Phasellus vulputate tristique arcu ut ornare. Sed a dictum leo, sit amet rhoncus est. In gravida nulla varius, rhoncus nibh a, facilisis lorem.\n\nFusce commodo felis a porta porta. Suspendisse imperdiet enim in dapibus elementum. Aliquam interdum laoreet dolor at fringilla. Sed turpis lectus, condimentum non vehicula at, gravida ut orci. In vel elit eget justo placerat maximus quis quis ex. Phasellus molestie nulla dui, maximus accumsan urna tempor vel. Fusce maximus vehicula ipsum ut aliquam. Maecenas orci leo, lacinia quis libero et, facilisis feugiat orci. Sed lobortis mi nec semper placerat. Ut aliquam ligula vel massa mollis fringilla. Aliquam fermentum pretium justo, at facilisis massa consectetur at. Donec sagittis, sem et maximus feugiat, ante ex venenatis quam, eget tristique libero ante vel nulla."
    },
    {
      operatorName: "Thatcher",
      operatorSpeed: 1,
      operatorIcon: "./Assets/Operators/Icons/thatcher.svg",
      operatorPortrait: "./Assets/Operators/Portraits/thatcher.webp",
      operatorQuote: "\“What you can feel, what you can touch – those are the things that are real. Everything else is just a distraction.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Ash",
      operatorSpeed: 3,
      operatorIcon: "./Assets/Operators/Icons/ash.svg",
      operatorPortrait: "./Assets/Operators/Portraits/ash.webp",
      operatorQuote: "\“You can never truly understand a conflict until you’ve been on both sides.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Thermite",
      operatorSpeed: 2,
      operatorIcon: "./Assets/Operators/Icons/thermite.svg",
      operatorPortrait: "./Assets/Operators/Portraits/thermite.webp",
      operatorQuote: "\“You see a wall, I see an opportunity.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Montagne",
      operatorSpeed: 1,
      operatorIcon: "./Assets/Operators/Icons/montagne.svg",
      operatorPortrait: "./Assets/Operators/Portraits/montagne.webp",
      operatorQuote: "\“Every conflict is an iteration upon the last. Every scar, a victory.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Twitch",
      operatorSpeed: 2,
      operatorIcon: "./Assets/Operators/Icons/twitch.svg",
      operatorPortrait: "./Assets/Operators/Portraits/twitch.webp",
      operatorQuote: "\“Machine learning and teamwork have one thing in common: Always lead by example.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Blitz",
      operatorSpeed: 2,
      operatorIcon: "./Assets/Operators/Icons/blitz.svg",
      operatorPortrait: "./Assets/Operators/Portraits/blitz.webp",
      operatorQuote: "\“I don’t like photos of myself. The lighting is always wrong.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Iq",
      operatorSpeed: 3,
      operatorIcon: "./Assets/Operators/Icons/iq.svg",
      operatorPortrait: "./Assets/Operators/Portraits/iq.webp",
      operatorQuote: "\“Life is the ultimate Rube Goldberg machine.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Fuze",
      operatorSpeed: 1,
      operatorIcon: "./Assets/Operators/Icons/fuze.svg",
      operatorPortrait: "./Assets/Operators/Portraits/fuze.webp",
      operatorQuote: "\“placeholder\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Glaz",
      operatorSpeed: 3,
      operatorIcon: "./Assets/Operators/Icons/glaz.svg",
      operatorPortrait: "./Assets/Operators/Portraits/glaz.webp",
      operatorQuote: "\“placeholder\”",
      operatorDescription: "placeholder"
    },


    // Defenders
    {
      operatorName: "Mute",
      operatorSpeed: 1,
      operatorIcon: "./Assets/Operators/Icons/mute.svg",
      operatorPortrait: "./Assets/Operators/Portraits/mute.webp",
      operatorQuote: "\"People think my codename is because I don’t like to talk. Maybe I just don’t like you.\"",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Smoke",
      operatorSpeed: 2,
      operatorIcon: "./Assets/Operators/Icons/smoke.svg",
      operatorPortrait: "./Assets/Operators/Portraits/smoke.webp",
      operatorQuote: "\"Sure, I care about the enviroment. Immediately around me, anyway.\"",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Castle",
      operatorSpeed: 2,
      operatorIcon: "./Assets/Operators/Icons/castle.svg",
      operatorPortrait: "./Assets/Operators/Portraits/castle.webp",
      operatorQuote: "\“Listen up, people: No one dies today. Any questions’ll just have to wait.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Pulse",
      operatorSpeed: 3,
      operatorIcon: "./Assets/Operators/Icons/pulse.svg",
      operatorPortrait: "./Assets/Operators/Portraits/pulse.webp",
      operatorQuote: "\“The heart is just a motor. Like any machine, it can be fine-tuned.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Doc",
      operatorSpeed: 1,
      operatorIcon: "./Assets/Operators/Icons/doc.svg",
      operatorPortrait: "./Assets/Operators/Portraits/doc.webp",
      operatorQuote: "\“My job is to keep you alive. Make it as hard as you like.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Rook",
      operatorSpeed: 1,
      operatorIcon: "./Assets/Operators/Icons/rook.svg",
      operatorPortrait: "./Assets/Operators/Portraits/rook.webp",
      operatorQuote: "\“If you're going to get shot, you may as well do it right.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Jäger",
      operatorSpeed: 2,
      operatorIcon: "./Assets/Operators/Icons/jager.svg",
      operatorPortrait: "./Assets/Operators/Portraits/jager.webp",
      operatorQuote: "\“Birthdays. Proposals. These should be surprises. No one wants a grenade to the face.\”",
      operatorDescription: "placeholder"
    },
    {
      operatorName: "Bandit",
      operatorSpeed: 3,
      operatorIcon: "./Assets/Operators/Icons/bandit.svg",
      operatorPortrait: "./Assets/Operators/Portraits/bandit.webp",
      operatorQuote: "\"Survival is all about timing. Nature doesn’t give second chances.\"",
      operatorDescription: "placeholder",
    },
    {
      operatorName: "Tachanka",
      operatorSpeed: 1,
      operatorIcon: "./Assets/Operators/Icons/tachanka.svg",
      operatorPortrait: "./Assets/Operators/Portraits/tachanka.webp",
      operatorQuote: "\"Rely on your senses, not your tech.\"",
      operatorDescription: "placeholder",
    },
    {
      operatorName: "Kapkan",
      operatorSpeed: 2,
      operatorIcon: "./Assets/Operators/Icons/kapkan.svg",
      operatorPortrait: "./Assets/Operators/Portraits/kapkan.webp",
      operatorQuote: "\"placeholder\"",
      operatorDescription: "placeholder",
    }
  ]


// Create a variable to store the current operator index
let currentOperator = 0; //? what's the difference between let and var? block-scope like wtf is that


// function to update the operator info
function updateOperatorInfo() {
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
  if (operators[currentOperator].operatorSpeed == 1) {
    speedDot1.classList.add("filled");
    speedDot2.classList.remove("filled");
    speedDot3.classList.remove("filled");

    armorDot1.classList.add("filled");
    armorDot2.classList.add("filled");
    armorDot3.classList.add("filled");
  }
  else if (operators[currentOperator].operatorSpeed == 2) {
    speedDot1.classList.add("filled");
    speedDot2.classList.add("filled");
    speedDot3.classList.remove("filled");

    armorDot1.classList.add("filled");
    armorDot2.classList.add("filled");
    armorDot3.classList.remove("filled");
  }
  else {
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
document.getElementById("next").addEventListener("click", function () {
  // Keeps array from going out of bounds
  if (currentOperator >= (operators.length - 1)) {
    return;
  }
  else {
    // Increment the current operator index
    currentOperator++;

    // Update
    updateOperatorInfo();
  };
});


// event listener for previous button
document.getElementById("previous").addEventListener("click", function () {
  // Keeps array from going out of bounds
  if (currentOperator <= 0) {
    return;
  }
  else {
    // Decrement the current operator index
    currentOperator--;

    // Update
    updateOperatorInfo();
  }
});

