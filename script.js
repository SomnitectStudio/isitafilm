<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Movie or Film Quiz</title>
  <style>
    .question-container {
      margin: 20px;
    }
    .result {
      margin-top: 20px;
      font-size: 20px;
    }
  </style>
</head>
<body>

  <div id="quiz">
    <div class="question-container" id="question-container"></div>
    <button onclick="nextQuestion()">Next Question</button>
    <div class="result" id="result"></div>
  </div>

  <script>
   <script>
    // List of quiz questions and possible answers
    const questions = [
      { 
        question: "Is there a car chase?", 
        answers: ["Yes", "No"], 
        correctAnswer: "Yes", 
        followUp: null // No follow-up for this one
      },
      { 
        question: "Does the movie have explosions?", 
        answers: ["Yes", "No"], 
        correctAnswer: "Yes", 
        followUp: "Is the explosion big and dramatic?" // Follow-up if "Yes"
      },
      { 
        question: "Is there any other type of action?", 
        answers: ["Yes", "No"], 
        correctAnswer: "No", 
        followUp: null // No follow-up for this one
      },
      { 
        question: "Is the movie in color or black-and-white?", 
        answers: ["Color", "Black-and-white"], 
        correctAnswer: "Color", 
        followUp: null // No follow-up for this one
      },
      { 
        question: "Does the movie explore complex philosophical themes?", 
        answers: ["Yes", "No"], 
        correctAnswer: "No", 
        followUp: null // No follow-up for this one
      },
    ];

    // Function to shuffle the questions array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
    }

    // Shuffle the questions
    shuffleArray(questions);

    let currentQuestionIndex = 0;

    // Function to display the next question
    function displayQuestion() {
      const question = questions[currentQuestionIndex];
      const container = document.getElementById("question-container");

      // Clear previous result
      document.getElementById("result").textContent = "";

      container.innerHTML = `
        <p><strong>${question.question}</strong></p>
        <button onclick="answerQuestion('${question.answers[0]}')">${question.answers[0]}</button>
        <button onclick="answerQuestion('${question.answers[1]}')">${question.answers[1]}</button>
      `;
    }

    // Function to handle answers and move to next question
    function answerQuestion(answer) {
      const question = questions[currentQuestionIndex];
      const result = document.getElementById("result");

      // Check if the answer is correct
      if (answer === question.correctAnswer) {
        result.textContent = "Correct answer!";
      } else {
        result.textContent = "Incorrect answer!";
      }

      // Move to the next question
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        displayQuestion();
      } else {
        result.textContent += " Quiz finished!";
        document.getElementById("question-container").innerHTML = "";
        document.querySelector("button").style.display = "none"; // Hide "Next Question" button
      }
    }

    // Initial call to display the first question
    displayQuestion();
  </script>

</body>
</html>
