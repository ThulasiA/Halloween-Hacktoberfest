let allFacts;

// Fetches the file, and stores the facts in the allFacts variable
let readFile = (file) => {
    fetch(file)
      .then(response => response.text())
      .then((data) => {
        allFacts = data.split("\n");
      });
}

readFile('../txt/facts.txt');
// Took "onclick" action away from HTML button; "Separation of Concerns"
const factButton = document.getElementById('fact-button');

let factText = document.getElementById("fact");

// Initialise fact text variables
let fact = "";
let prevFact = "";

// Changes the current fact with a random new one
const newFact = () => {

  while (fact === prevFact) {
    fact = allFacts[Math.floor(Math.random() * (allFacts.length - 1))];
  }
  // Then record the last fact we successfully generated
  prevFact = fact;

  // DOM text assignment changed from use of 'innerHTML' to avoid "bad practice"
  factText.textContent = fact;
}

factButton.addEventListener('click', newFact);
