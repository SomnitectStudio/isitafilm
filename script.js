// Flowchart of questions and results
const flowchart = {
  start: { question: "Is it in black and white?", yes: "artistic", no: "popular" },
  artistic: { question: "Does it involve deep symbolism?", yes: "film", no: "movie" },
  popular: { question: "Does it star The Rock?", yes: "movie", no: "film" },
  film: { result: "It's a FILM!" },
  movie: { result: "It's just a MOVIE!" }
};

let currentStep = "start";

// Handle user's answer
function handleAnswer(answer) {
  const step = flowchart[currentStep];
  if (step.result) {
    // Display the final result
    document.getElementById("question").textContent = step.result;
    document.getElementById("buttons").style.display = "none"; // Hide buttons
    return;
  }
  // Move to the next question
  currentStep = step[answer];
  document.getElementById("question").textContent = flowchart[currentStep].question;
}
