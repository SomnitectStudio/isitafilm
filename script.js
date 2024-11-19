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
    document.getElementById("question-image").style.display = "none"; // Hide image when the flow ends
    return;
  }

  // Move to the next step based on the answer
  currentStep = step[answer];

  // Check if the next step has a question or result
  if (flowchart[currentStep]) {
    // If it’s a question, update the question text
    if (flowchart[currentStep].question) {
      document.getElementById("question").textContent = flowchart[currentStep].question;
      // Update the image for each question
      updateImage(currentStep);
    }
  } else {
    console.error("Invalid step:", currentStep);
  }
}

// Function to update the image based on the current question
function updateImage(step) {
  const image = document.getElementById("question-image");
  if (step === 'start') {
    image.src = 'https://media.gq.com/photos/5ac5149c4fc1b06e2da54653/1:1/w_1295,h_1295,c_limit/ROck.jpg'; // Image for question 1
  } else if (step === 'michaelbay') {
    image.src = 'https://media.gq.com/photos/594af29ece4edb0907ff4001/16:9/w_2560%2Cc_limit/michael-bay.jpg'; // Image for question 2
  } else if (step === 'film') {
    image.src = 'https://www.example.com/path/to/film_image.jpg'; // Image for the "film" result
  } else if (step === 'movie') {
    image.src = 'https://www.example.com/path/to/movie_image.jpg'; // Image for the "movie" result
  }
}
