const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const mostRecentScore = localStorage.getItem("mostRecentScore");
const finalScore = document.getElementById("finalScore");

const highScores = JSON.parse(localStorage.getItem("highScores")) || [];
console.log(highScores);

const MAX_HIGH_SCORES = 5;

finalScore.innerText = mostRecentScore;



username.addEventListener("keyup", () =>{
    saveScoreBtn.disabled = !username.value;
}); 

saveHighScore = (e) => {
    console.log("clicked the save button!");
    e.preventDefault();

    const score = {
        score: mostRecentScore,
        name: username.value
    };

    highScores.push(score);
    highScores.sort((a,b) => b.score - a.score);
    highScores.splice(5);
    console.log(highScores);

    localStorage.setItem("highScores", JSON.stringify(highScores));

    window.location.assign("index.html");
};