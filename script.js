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
    // List of quiz questions and possible answers
    const questions = [
      { 
        question: "Is there a car chase?", 
        answers: ["Yes", "No"], 
        correctAnswer: "Yes", 
        followUp: null, 
        customMessage: "Vroom! A car chase always adds excitement!"
      },
      { 
        question: "Does the movie have explosions?", 
        answers: ["Yes", "No"], 
        correctAnswer: "Yes", 
        followUp: "Is the explosion big and dramatic?" 
      },
      { 
        question: "Is the movie in color or black-and-white?", 
        answers: ["Color", "Black-and-white"], 
        correctAnswer: "Color", 
        followUp: null
      },
      { 
        question: "Does the movie explore complex philosophical themes?", 
        answers: ["Yes", "No"], 
        correctAnswer: "No", 
        followUp: null
      }
    ];

    // Function to shuffle the questions array
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Swap elements
      }
    }

    // Shuffle the questions to randomize the order at the start
    shuffleArray(questions);

    let currentQuestionIndex = 0;
    let userAnswers = [];

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

      // Store the answer
      userAnswers.push({ question: question.question, answer: answer });

      // Check if the answer is correct
      if (answer === question.correctAnswer) {
        result.textContent = "Correct answer!";
        
        // Display custom message if the answer is correct
        if (question.customMessage) {
          result.textContent += ` ${question.customMessage}`;
        }

        // Move to the next question or end quiz
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
          displayQuestion();
        } else {
          result.textContent += " Quiz finished!";
          document.getElementById("question-container").innerHTML = "";
          document.querySelector("button").style.display = "none"; // Hide "Next Question" button
        }
      } else {
        result.textContent = "Incorrect answer! Redirecting to a random question.";

        // Get a random question index, but exclude the current question
        const remainingQuestions = questions.filter((q, index) => index !== currentQuestionIndex);
        const randomQuestionIndex = Math.floor(Math.random() * remainingQuestions.length);
        const randomQuestion = remainingQuestions[randomQuestionIndex];

        // Find the index of the random question in the original array
        currentQuestionIndex = questions.indexOf(randomQuestion);

        // Display the random question
        displayQuestion();
      }
    }

    // Initial call to display the first question
    displayQuestion();
  </script>

</body>
</html>
