/* Ensure body and html take up the full height */
html, body {
  height: 100%;
  margin: 0;
  padding: 0;
  font-family: Arial, sans-serif;
  background-color: #d3d3d3;  /* Grey background */
  color: #333;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center;     /* Center vertically */
  overflow: hidden;        /* Prevent any overflow issues */
}

/* Main container styling */
main {
  width: 100%;
  max-width: 600px;
  background-color: #ffffff;
  padding: 2em;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 300px;
}

/* Start button section */
#startSection {
  text-align: center;
}

#startSection button {
  padding: 1em 2em;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  background-color: #4caf50;
  color: white;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

#startSection button:hover {
  background-color: #45a049;
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Hide question section and buttons initially */
#questionSection, #buttons {
  display: none;
}

/* Background styling */
body {
  background-image: url('path_to_your_movie_theater_keyart.jpg');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
}

/* Footer text styling */
#footer-text {
  font-size: 0.9em;
  color: #777;
  margin-top: 1.5em;
  text-align: center;
}

/* Style for the TikTok link */
#tiktok-link a {
  color: #1da1f2;
  text-decoration: none;
  font-weight: bold;
}

#tiktok-link a:hover {
  color: #00c2ff;
  text-decoration: underline;
}

/* Header styling */
header {
  margin-bottom: 1.5em;
  text-align: center;
}

header h1 {
  font-size: 2.5em;
  margin: 0;
}

header p {
  font-size: 1.2em;
  color: #555;
  margin: 0.5em 0 0;
}

/* Styling for the question image */
#question-image {
  max-width: 300px;
  width: 100%;
  height: auto;
  margin: 0 auto 1.5em auto;
  display: block;
  border-radius: 10px;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  object-fit: contain;
}

/* Question section styling */
#questionSection {
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

/* Buttons container styling */
#buttons {
  display: flex;
  justify-content: center;
  gap: 1em;
}

/* Button styling */
#buttons button {
  padding: 1em 2em;
  border: none;
  border-radius: 8px;
  font-size: 1.1em;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s ease, box-shadow 0.3s ease;
}

/* Green "Yes" button */
#buttons .yes-button {
  background-color: #4caf50;
  color: white;
}

#buttons .yes-button:hover {
  background-color: #45a049;
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

/* Red "No" button */
#buttons .no-button {
  background-color: #f44336;
  color: white;
}

#buttons .no-button:hover {
  background-color: #d32f2f;
  transform: translateY(-3px);
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}
