// Flowchart structure
const flowchart = {
  start: { question: "Is The Rock in it?", yes: "movie", no: "michaelbay" },
  michaelbay: { question: "Did Michael Bay direct it?", yes: "movie", no: "film" },
  film: { result: "It is a FILM!" },
  movie: { result: "It is just a MOVIE." }
};

let currentStep = "start"; // Start at the first question

// Function to handle answers
function handleAnswer(answer) {
  const step = flowchart[currentStep]; // Get the current step 

  if (step.result) {
    // If the step has a result, display it and stop the flowchart
    document.getElementById("question").textContent = step.result;
    document.getElementById("buttons").style.display = "none"; // Hide buttons when the flow ends
    return;
  }

  // Move to the next step based on the answer
  currentStep = step[answer];

  // Check if the next step has a question or result
  if (flowchart[currentStep]) {
    // If it’s a question, update the question text
    if (flowchart[currentStep].question) {
      document.getElementById("question").textContent = flowchart[currentStep].question;
    }
  } else {
    console.error("Invalid step:", currentStep);
  }
}
