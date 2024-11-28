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
    correctAnswer: "No", 
    image: "https://watercoolerhq.co/wp-content/uploads/2021/07/Rock-khaki-collage-e1627672868830-768x421.jpg",
    endQuizOnAnswer: { 
      answer: "Yes", 
      message: "Oof, sorry, this is definitely just a movie. Please tell me you didn't pay for this!" 
    } // Custom message for ending the quiz early
  },
  { 
    question: "Does the movie have explosions?", 
    answers: ["Yes", "No"], 
    correctAnswer: "Yes", 
    endQuizOnAnswer: { 
      answer: "No", 
      message: "Quiz ended early! No explosions, no fun!" 
    }  // Custom message for ending the quiz early
  },
  { 
    question: "Is it a black and white movie?", 
    answers: ["Yes", "No"], 
    correctAnswer: "No", 
    image: "path_to_image_black_and_white.jpg"
  },
  { 
    question: "Does the movie explore deep philosophical themes?", 
    answers: ["Yes", "No"], 
    correctAnswer: "No", 
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

  // Display answer options
  const answersContainer = document.getElementById("answers");
  answersContainer.innerHTML = '';  // Clear any previous answers

  question.answers.forEach(answer => {
    const button = document.createElement("button");
    button.textContent = answer;
    button.onclick = () => handleAnswer(answer);
    answersContainer.appendChild(button);
  });
}

// Function to handle the user's answer
function handleAnswer(answer) {
  const question = questions[currentQuestionIndex];
  const result = document.getElementById("result");

  // Store the answer
  userAnswers.push({ question: question.question, answer: answer });

  // Check if the answer should end the quiz immediately with a custom message
  if (question.endQuizOnAnswer && answer === question.endQuizOnAnswer.answer) {
    result.textContent = question.endQuizOnAnswer.message;  // Show the custom end message
    setTimeout(showFinalResult, 1000);  // Call function to show the final result after 1 second
    return;  // Skip the rest of the logic, ending the quiz immediately
  }

  // Check if the answer is correct
  if (answer === question.correctAnswer) {
    result.textContent = "Correct answer!";
  } else {
    result.textContent = `Incorrect answer! ${question.incorrectText || ''}`;
  }

  // Proceed to the next question or finish the quiz
  setTimeout(() => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      // Display next question
      displayQuestion();
    } else {
      // End of quiz
      result.textContent += " Quiz completed! Here's your result:";
      showFinalResult();
    }
  }, 1000);  // Delay before moving to the next question
}

// Function to show final result
function showFinalResult() {
  const result = document.getElementById("result");

  // Calculate score
  let score = userAnswers.filter(answer => {
    const question = questions.find(q => q.question === answer.question);
    return answer.answer === question.correctAnswer;
  }).length;

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
