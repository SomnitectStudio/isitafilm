// V1.2
const flowchart = {
  start: { question: "Is The Rock in it?", yes: "movie", no: "michaelbay" },
  michaelbay: { question: "Does Michael Bay direct it?", yes: "movie", no: "film" },
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
