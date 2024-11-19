// Flowchart structure
const flowchart = {
  start: { question: "Is The Rock in it?", yes: "michaelBay", no: "movie" },
  michaelBay: { question: "Did Michael Bay direct it?", yes: "movie", no: "film" },
  film: { result: "It is a FILM!" },
  movie: { result: "It is just a MOVIE." }
};

let currentStep = "start"; // Start with the first question

// Function to handle user answers
function handleAnswer(answer) {
  const step = flowchart[currentStep]; // Get the current step

  // If it's a result, display it and hide the buttons
  if (step.result) {
    document.getElementById("question").textContent = step.result;
    document.getElementById("buttons").style.display = "none"; // Hide the buttons
    return;
  }

  // Move to the next step based on the answer
  currentStep = step[answer];
  if (flowchart[currentStep]) {
    document.getElementById("question").textContent = flowchart[currentStep].question;
  } else {
    console.error("Invalid step:", currentStep); // Debugging in case of errors
  }
}
