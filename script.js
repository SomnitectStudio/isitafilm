// Example flowchart
const flowchart = {
  start: { question: "Is it in black and white?", yes: "artistic", no: "popular" },
  artistic: { question: "Does it involve deep symbolism?", yes: "film", no: "movie" },
  popular: { question: "Does it star The Rock?", yes: "movie", no: "film" },
  film: { result: "It's a FILM!" },
  movie: { result: "It's just a MOVIE!" }
};

let currentStep = "start";

function handleAnswer(answer) {
  const step = flowchart[currentStep];
  if (step.result) {
    document.getElementById("question").textContent = step.result;
    document.getElementById("buttons").style.display = "none";
    return;
  }
  currentStep = step[answer];
  document.getElementById("question").textContent = flowchart[currentStep].question;
}
