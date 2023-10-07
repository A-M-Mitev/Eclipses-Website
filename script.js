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

document.querySelector(".card").addEventListener("click", function (event) {
    // Determine if the click was on the left or right half of the card
    const clickX = event.clientX - event.target.getBoundingClientRect().left;
    const cardWidth = event.target.clientWidth;

    if (clickX < cardWidth / 2) {
        // left half
        showPrev();
    } else {
        // right half
        showNext();
    }
});

// Initialize with the first eclipse information
displayContent(currentIndex);
