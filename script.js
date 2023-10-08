const eclipseData = [
    "Затъмнението е астрономично явление, при което небесно тяло става невидимо (напълно или частично) за земния наблюдател.",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
];

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

const otherEclipseData = [
    "Терминът затъмнение най-често се използва за описание или на слънчево или на лунно затъмнение, но той може да се отнася и за такива събития извън системата Земя-Луна.",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
];

const historyEclipseData = [
    "От древни времена се водят записи на слънчеви затъмнения. Датите на Eclipse могат да се използват за хронологично датиране на исторически записи.",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
];

const statisticsEclipseData = [
    "Цикли на затъмнението: Цикъл на затъмнение се осъществява, когато затъмненията в серия са разделени от определен интервал от време.",
    "Slide 2",
    "Slide 3",
    "Slide 4",
    "Slide 5",
];

const card = document.querySelector(".card");
let currentIndex = 0;
let arrayLength;
let eclipseInfo
const indexNow = document.getElementById("currentIndex");
const cardsTotal = document.getElementById("totalCards");
/* Checking which html is being used, in order to load the correct array of information */
var currentPageTitle = document.title;
if (currentPageTitle == "Solar eclipse") {
    eclipseInfo = document.getElementById("solar-eclipse-info");
    arrayLength = solarEclipseData.length;
} else if (currentPageTitle == "Lunar eclipse") {
        eclipseInfo = document.getElementById("lunar-eclipse-info");
        arrayLength = lunarEclipseData.length;
    } else if (currentPageTitle == "Other types of eclipse") {
            eclipseInfo = document.getElementById("other-eclipse-info");
            arrayLength = otherEclipseData.length;
        } else if (currentPageTitle == "History of eclipses") {
                eclipseInfo = document.getElementById("history-eclipse-info");
                arrayLength = historyEclipseData.length;
            } else if (currentPageTitle == "Statistics eclipses") {
                    eclipseInfo = document.getElementById("statistics-eclipse-info");
                    arrayLength = statisticsEclipseData.length;
                } else if (currentPageTitle == "Eclipse") {
                        eclipseInfo = document.getElementById("eclipse-info");
                        arrayLength = eclipseData.length;
                    }

// Set header content be the same as opened html title 
const headerParagraph = document.querySelector(".header-paragraph");
headerParagraph.textContent = document.title;

function displayContent(index) {
    if (currentPageTitle == "Solar eclipse") {
        eclipseInfo.textContent = solarEclipseData[index];
    } else if (currentPageTitle == "Lunar eclipse") {
            eclipseInfo.textContent = lunarEclipseData[index];
            } else if (currentPageTitle == "Other types of eclipse") {
                    eclipseInfo.textContent = otherEclipseData[index];
                    } else if (currentPageTitle == "History of eclipses") {
                            eclipseInfo.textContent = historyEclipseData[index];
                            } else if (currentPageTitle == "Statistics eclipses") {
                                    eclipseInfo.textContent = statisticsEclipseData[index];
                                    } else if (currentPageTitle == "Eclipse") {
                                            eclipseInfo.textContent = eclipseData[index];
                                            }
    indexNow.textContent = index + 1;
    cardsTotal.textContent = arrayLength;
}

function showNext() {
    if (currentIndex < arrayLength - 1) {
        currentIndex++;
        disappearLeftCard(() => {
            displayContent(currentIndex);
            appearRightCard(); // Trigger the animation after disappearLeft
        });
    }
    // Hide the "Next" button if currentIndex reaches arrayLength - 1
    if (currentIndex === arrayLength - 1) {
        document.querySelector(".right").style.display = "none";
    }
    // Show the "Previous" button when moving forward
    if (currentIndex > 0) {
        document.querySelector(".left").style.display = "block";
    } else {
        // Hide the "Previous" button if currentIndex is 0
        document.querySelector(".left").style.display = "none";
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
     // Hide the "Previous" button if currentIndex is 0
     if (currentIndex === 0) {
        document.querySelector(".left").style.display = "none";
    }

    // Show the "Next" button when moving backward
    if (currentIndex < arrayLength - 1) {
        document.querySelector(".right").style.display = "block";
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
