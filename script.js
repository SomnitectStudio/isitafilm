// Flowchart structure
const flowchart = {
  start: { question: "Is The Rock in it?", yes: "movie", no: "michaelbay" },
  michaelbay: { question: "Did Michael Bay direct it?", yes: "movie", no: "film" },
  film: { result: "It is a FILM!" },
  movie: { result: "It is just a MOVIE." }
};

let currentStep = "start"; // Start at the first question

// Function to handle the start of the flow
function startFlow() {
  // Hide the "Start" button and show the question and answer buttons
  document.getElementById("startSection").style.display = "none";
  document.getElementById("questionSection").style.display = "block";
  document.getElementById("buttons").style.display = "flex";  // Show the buttons

  // Set the initial question
  updateQuestion();
}

// Function to handle answers (Yes/No)
function handleAnswer(answer) {
  const step = flowchart[currentStep]; // Get the current step

  if (step.result) {
    // If the step has a result, display it and stop the flowchart
    document.getElementById("question").textContent = step.result;
    document.getElementById("buttons").style.display = "none"; // Hide buttons when the flow ends

    // Hide the title and description
    document.getElementById("title").style.display = "none";
    document.getElementById("description").style.display = "none";

    return;
  }

  // Move to the next step based on the answer
  currentStep = step[answer];

  // Update the question or result
  updateQuestion();
}

// Function to update the question
function updateQuestion() {
  const step = flowchart[currentStep]; // Get the current step

  if (step) {
    // If it's a question, update the question text
    if (step.question) {
      document.getElementById("question").textContent = step.question;
    }
  } else {
    console.error("Invalid step:", currentStep);
  }
}
