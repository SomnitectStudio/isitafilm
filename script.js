// Flowchart structure
const flowchart = {
  start: {
    question: "Is The Rock in it?",
    yes: "movie",
    no: "michaelbay",
    image: "path-to-your-image.jpg" // Add the image path here
  },
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
    document.getElementById("question-image").style.display = "none"; // Hide the image
    document.getElementById("buttons").style.display = "none"; // Hide buttons when the flow ends
    return;
  }

  // Move to the next step based on the answer
  currentStep = step[answer];

  // Update the question text and image
  const nextStep = flowchart[currentStep];
  const questionElement = document.getElementById("question");
  const imageElement = document.getElementById("question-image");

  if (nextStep.question) {
    questionElement.textContent = nextStep.question;

    if (nextStep.image) {
      imageElement.src = nextStep.image;
      imageElement.style.display = "block";
    } else {
      imageElement.style.display = "none"; // Hide the image if not provided
    }
  } else {
    console.error("Invalid step:", currentStep);
  }
}

// Initialize the first question
function initializeFlowchart() {
  const startStep = flowchart.start;
  const questionElement = document.getElementById("question");
  const imageElement = document.getElementById("question-image");

  questionElement.textContent = startStep.question;

  if (startStep.image) {
    imageElement.src = startStep.image;
    imageElement.style.display = "block";
  } else {
    imageElement.style.display = "none";
  }
}

initializeFlowchart();
