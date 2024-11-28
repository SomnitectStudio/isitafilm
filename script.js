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
