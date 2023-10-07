// Sample eclipse data, you can replace this with your content
const eclipseData = [
    "Eclipse 1 information...",
    "Eclipse 2 information...",
    "Eclipse 3 information...",
];

let currentIndex = 0;
const eclipseInfo = document.getElementById("eclipse-info");
const card = document.querySelector(".card");

function displayContent(index) {
    eclipseInfo.textContent = eclipseData[index];
}

function showNext() {
    if (currentIndex < eclipseData.length - 1) {
        currentIndex++;
        displayContent(currentIndex);
        appearRightCard(); // Trigger the animation
    }
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        displayContent(currentIndex);
        appearLeftCard(); // Trigger the animation
    }
}

document.querySelector(".right").addEventListener("click", showNext);
document.querySelector(".left").addEventListener("click", showPrev);

// Animations
function appearRightCard() {
    card.classList.remove("appearLeft"); // Remove the appearLeft class
    card.classList.remove("appearRight");
    card.offsetHeight; // Trigger reflow
    card.classList.add("appearRight"); // Add the appearRight class
}

function appearLeftCard() {
    card.classList.remove("appearRight"); // Remove the appearRight class
    card.classList.remove("appearLeft");
    card.offsetHeight; // Trigger reflow
    card.classList.add("appearLeft"); // Add the appearLeft class
}


// Initialize with the first information and make the card appear
displayContent(currentIndex);
appearRightCard();
