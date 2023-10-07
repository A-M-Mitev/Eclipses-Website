// Sample eclipse data, you can replace this with your content
const eclipseData = [
    "Eclipse 1 information...",
    "Eclipse 2 information...",
    "Eclipse 3 information...",
];

let currentIndex = 0;
const eclipseInfo = document.getElementById("eclipse-info");

function displayContent(index) {
    eclipseInfo.textContent = eclipseData[index];
}

function showNext() {
    if (currentIndex < eclipseData.length - 1) {
        currentIndex++;
        displayContent(currentIndex);
    }
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        displayContent(currentIndex);
    }
}

// Get the element with class "right" and add a click event listener
const rightElement = document.querySelector(".right");
rightElement.addEventListener("click", showNext);

// Get the element with class "left" and add a click event listener
const leftElement = document.querySelector(".left");
leftElement.addEventListener("click", showPrev);

// Initialize with the first eclipse information
displayContent(currentIndex);

