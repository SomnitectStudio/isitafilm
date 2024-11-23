// Fisher-Yates Shuffle function to randomize the order of the questions
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
}

// Array of questions and answers
const questions = [
  { 
    question: "Is The Rock in it?", 
    answers: ["Yes", "No"], 
    correctAnswer: "Yes", 
    followUp: "Does he do his own stunts?", 
    image: "https://watercoolerhq.co/wp-content/uploads/2021/07/Rock-khaki-collage-e1627672868830-768x421.jpg",
    incorrectText: "Oof. Sorry, this is definetely just a movie. Smell what I'm cooking?"
  },
  { 
    question: "Does the movie have explosions?", 
    answers: ["Yes", "No"], 
    correctAnswer: "Yes", 
    followUp: "Did Michael Bay direct it", 
    coorectAnswer: "No",
    incorrectText: "Yeah, no. This man is to cinema what slaughterhouses are to cute animals"
  },
  { 
    question: "Is it a black and white movie?", 
    answers: ["Yes", "No"], 
    correctAnswer: "No", 
    followUp: "Does the movie have a modern feel?", 
    image: "path_to_image_black_and_white.jpg"
  },
  { 
    question: "Does the movie explore deep philosophical themes?", 
    answers: ["Yes", "No"], 
    correctAnswer: "No", 
    followUp: "Does it have a plot twist?", 
    image: "path_to_image_philosophical.jpg"
  }
];

let currentQuestionIndex = 0;
let userAnswers = [];

// Function to start the quiz
function startFlow() {
  console.log("startFlow() called");

  // Shuffle the questions before starting the quiz
  shuffleArray(questions);

  // Hide the start section
  document.getElementById("startSection").style.display = "none";

  // Show the question section and answer buttons
  document.getElementById("questionSection").style.display = "block";
  document.getElementById("buttons").style.display = "block";

  // Display the first question
  displayQuestion();
}

// Function to display a question
function displayQuestion() {
  const question = questions[currentQuestionIndex];

  // Update question text
  document.getElementById("question").textContent = question.question;

  // Update question image
  const questionImage = document.getElementById("question-image");
  if (question.image) {
    questionImage.src = question.image;
    questionImage.style.display = "block";  // Show the image
  } else {
    questionImage.style.display = "none";  // Hide if no image
  }
}

// Function to handle the user's answer
function handleAnswer(answer) {
  const question = questions[currentQuestionIndex];
  const result = document.getElementById("result");

  // Store the answer
  userAnswers.push({ question: question.question, answer: answer });

  // Check if the answer is correct
  if (answer === question.correctAnswer) {
    result.textContent = "Correct answer!";
  } else {
    result.textContent = "Incorrect answer!";
  }

  // Proceed to the next question or finish the quiz
  currentQuestionIndex++;

  if (currentQuestionIndex < questions.length) {
    // Display next question
    displayQuestion();
  } else {
    // End of quiz
    result.textContent += " Quiz completed! Here's your result:";
    showFinalResult();
  }
}

// Function to show final result (you can customize this part)
function showFinalResult() {
  const result = document.getElementById("result");

  // Here you can analyze the user's answers and give them a final result.
  let score = userAnswers.filter(answer => answer.answer === questions[userAnswers.indexOf(answer)].correctAnswer).length;
  result.textContent += ` You answered ${score} out of ${questions.length} correctly.`;

  // Optionally display some custom message based on score
  if (score === questions.length) {
    result.textContent += " Congratulations, you know your films!";
  } else {
    result.textContent += " Looks like you need to watch more films!";
  }

  // Hide the question and answer buttons
  document.getElementById("questionSection").style.display = "none";
  document.getElementById("buttons").style.display = "none";
}
