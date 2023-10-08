// Sample eclipse data, you can replace this with your content
const solarEclipseData = [
    "Различни затъмнения:Терминът затъмнение най-често се използва за описание или наслънчево или на лунно затъмнение, но той може да се отнася и затакива събития извън системата Земя-Луна.kогато се наблюдава в точки в пространството, различни отповърхността на Земята, Слънцето може да бъде затъмнено от тела",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
];

const lunarEclipseData = [
    "Лунно затъмнение настъпва при засенчване на Луната от Земята и се наблюдава при пълнолуние от места, за които Луната е надхоризонта.",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
];

const card = document.querySelector(".card");
let currentIndex = 0;
let arrayLength;
let eclipseInfo
/* Checking which html is being used, in order to load the correct array of information */
var currentPageTitle = document.title;
if (currentPageTitle == "Solar eclipse") {
    eclipseInfo = document.getElementById("solar-eclipse-info");
    arrayLength = solarEclipseData.length;
}else if (currentPageTitle == "Lunar eclipse") {
        eclipseInfo = document.getElementById("lunar-eclipse-info");
        arrayLength = lunarEclipseData.length;
    }



function displayContent(index) {
    if (currentPageTitle == "Solar eclipse") {
        eclipseInfo.textContent = solarEclipseData[index];
    }else if (currentPageTitle == "Lunar eclipse") {
        eclipseInfo.textContent = lunarEclipseData[index];
        }
}

function showNext() {
    if (currentIndex < arrayLength - 1) {
        currentIndex++;
        disappearLeftCard(() => {
            displayContent(currentIndex);
            appearRightCard(); // Trigger the animation after disappearLeft
        });
    }
}

function showPrev() {
    if (currentIndex > 0) {
        currentIndex--;
        disappearRightCard(() => {
            displayContent(currentIndex);
            appearLeftCard(); // Trigger the animation after disappearRight
        });
    }
}

document.querySelector(".right").addEventListener("click", showNext);
document.querySelector(".left").addEventListener("click", showPrev);

// Animations
function appearRightCard(callback) {
    card.classList.remove("disappearLeft", "appearLeft"); // Remove the disappearLeft and appearLeft classes
    card.style.left = "100%"; // Move the card off-screen to the right
    card.offsetHeight; // Trigger reflow
    card.classList.add("appearRight"); // Add the appearRight class

    card.addEventListener("animationend", function animationEndHandler() {
        card.removeEventListener("animationend", animationEndHandler);
        card.classList.remove("appearRight"); // Remove the appearRight class
        card.style.left = "50%"; // Adjust the left property to center the card
        card.style.opacity = "1"; // Ensure the card is fully visible
        if (callback) callback(); // Execute the callback
    });
}

function appearLeftCard(callback) {
    card.classList.remove("disappearRight", "appearRight"); // Remove the disappearRight and appearRight classes
    card.style.left = "0"; // Move the card off-screen to the left
    card.offsetHeight; // Trigger reflow
    card.classList.add("appearLeft"); // Add the appearLeft class

    card.addEventListener("animationend", function animationEndHandler() {
        card.removeEventListener("animationend", animationEndHandler);
        card.classList.remove("appearLeft"); // Remove the appearLeft class
        card.style.left = "50%"; // Adjust the left property to center the card
        card.style.opacity = "1"; // Ensure the card is fully visible
        if (callback) callback(); // Execute the callback
    });
}

function disappearLeftCard(callback) {
    card.classList.remove("appearRight", "appearLeft"); // Remove the appearRight and appearLeft classes
    card.style.transition = "left 0.5s ease-in-out, opacity 0.5s ease-in-out"; // Match the animation duration
    card.style.left = "0"; // Move the card off-screen to the left
    card.style.opacity = "0"; // Set opacity to 0

    card.addEventListener("transitionend", function transitionEndHandler() {
        card.removeEventListener("transitionend", transitionEndHandler);
        card.classList.remove("disappearLeft"); // Remove the disappearLeft class
        if (callback) callback(); // Execute the callback
    });
}

function disappearRightCard(callback) {
    card.classList.remove("appearLeft", "appearRight"); // Remove the appearLeft and appearRight classes
    card.style.transition = "left 0.5s ease-in-out, opacity 0.5s ease-in-out"; // Match the animation duration
    card.style.left = "100%"; // Move the card off-screen to the right
    card.style.opacity = "0"; // Set opacity to 0

    card.addEventListener("transitionend", function transitionEndHandler() {
        card.removeEventListener("transitionend", transitionEndHandler);
        card.classList.remove("disappearRight"); // Remove the disappearRight class
        if (callback) callback(); // Execute the callback
    });
}



// Initialize with the first information and make the card appear
displayContent(currentIndex);
appearRightCard();
