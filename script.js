// Populate Copyright year
document.querySelector("#year").innerHTML = new Date().getFullYear();

/////// Letter typing effect for site Title ///////
const mainTitle = document.querySelector(".home-title h1");
const replayButton = document.querySelector("#replay");

function wait(ms = 0) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
  
function getRandomBetween(min = 20, max = 150, randomNumber = Math.random()) {
    return Math.floor(randomNumber * (max - min) + min);
}

async function draw(el) {
    replayButton.style.opacity = 0;
    const text = el.textContent;
    let soFar = '';
    for (const letter of text) {
      soFar += letter;
      el.textContent = soFar;
      // wait for some amount of time before restarting loop
      const { typeMin, typeMax } = el.dataset;
      const amountOfTimeToWait = getRandomBetween(typeMin, typeMax);
      await wait(amountOfTimeToWait);
    }
    replayButton.style.opacity = 1;
}

draw(mainTitle);

replayButton.addEventListener("click", () => {
    draw(mainTitle);
});