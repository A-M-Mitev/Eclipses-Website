const eclipseData = [
    "Затъмнението е астрономично явление, при което небесно тяло става невидимо (напълно или частично) за земния наблюдател.",
    "Поради неравнинните и некръговите разлики в орбитите затъмненията не са често срещано събитие. Източникът на светлина на звездите е фотосферата.",
    "Система Земя-Луна: Затъмнение, включващо Слънцето, Земята и Луната, може да се случи само когато те са почти в права линия, което позволява едно да бъде скрито зад друго, гледано от третата.", 
    "Терминът произлиза от древногръцкото съществително ékleipsis, което означава „изоставяне“, „падане“ или „потъмняване на небесно тяло“.",
];

const solarEclipseData = [
    "Слънчево затъмнение настъпва, когато Луната закрива Слънцето. Наблюдава се при новолуние в ивица от земната повърхност с широчина до 270 km (за пълно затъмнение) и до 3500 km (за частично затъмнение) и с дължина до 15 000 km.",
    "Слънчевото затъмнение продължава до 7,5 min (за пълно затъмнение) и до 2 h (за частично затъмнение). Но слънчевите затъмнения, особено пълните затъмнения, случващи се във всяка една конкретна точка на повърхността на Земята, са редки събития, които могат да бъдат през десетилетия.",
    "Видът на събитието слънчево затъмнение зависи от разстоянието на Луната от Земята по време на събитието. Пълно слънчево затъмнение настъпва, когато Земята пресича частта от сянка на Луната.",
    "Когато сянката не достига повърхността на Земята, Слънцето е само частично окултирано, което води до пръстеновидно затъмнение. Частичните слънчеви затъмнения се случват, когато зрителят е вътре в полусянката.",
    "При най-благоприятни обстоятелства пълното слънчево затъмнение може да продължи 7 минути, 31 секунди и може да се наблюдава по пътека, която е широка до 250 км. Регионът, където може да се наблюдава частично затъмнение, обаче е много по-голям. Сянката на Луната ще се придвижва на изток със скорост от 1700 км/ч, докато вече не пресича земната повърхност.",
];

const lunarEclipseData = [
    "Лунно затъмнение настъпва при засенчване на Луната от Земята и се наблюдава при пълнолуние от места, за които Луната е над хоризонта. Лунното затъмнение продължава до 1,75 h (за пълно затъмнение) и до 3,75 h (за частично затъмнение).",
    "Едно лунно затъмнение продължава по-дълго, отнема няколко часа, за да завърши, като самото затъмнение обикновено е средно от около 30 минути до повече от час. Лунните затъмнения могат да се наблюдават от цялата нощна половина на Земята.",
    "Има три вида лунни затъмнения: полусянка, когато Луната пресича само полусянката на Земята; частично, когато Луната пресича частично земната сянка; и общо, когато Луната пресича изцяло сянката на Земята.",
    "Дори по време на пълно лунно затъмнение Луната не е напълно тъмна. Слънчевата светлина, пречупена през земната атмосфера, осигурява слабо осветление.", 
    "Подобно на залеза, атмосферата има склонност към по-силно разпръскване на светлина с по-къси дължини на вълната, така че осветяването на Луната от пречупена светлина има червен оттенък, поради което фразата „кървава луна“ често се среща в описанията на такива лунни събития са записани още като затъмнения.",
];

const otherEclipseData = [
    "Терминът затъмнение най-често се използва за описание или на слънчево или на лунно затъмнение, но той може да се отнася и за такива събития извън системата Земя-Луна.",
    "Когато се наблюдава в точки в пространството, различни от повърхността на Земята, Слънцето може да бъде затъмнено от тела, различни от Луната.", 
    "Два примера включват, когато екипажът на Аполо 12 наблюдава как Земята затъмнява Слънцето през 1969 г. и когато сондата Касини наблюдава Сатурн да затъмнява Слънцето през 2006 г.",
    "Транзитът на Фобос(спътник) през Слънцето , както се вижда от Марс, се осъществява, когато Фобос преминава директно между Слънцето и точка на повърхността на Марс, закривайки голяма част от слънчевия диск за наблюдател на Марс.", 
    "По време на транзит Фобос може да се види от Марс като голям черен диск, който бързо се движи по лицето на Слънцето.",
    "Транзит на Деймос(по-малкият и по-отдалечен от двата спътника на Марс) през Слънцето, както се вижда от Марс, възниква, когато Деймос преминава директно между Слънцето и точка наповърхността на Марс, закривайки малка част от слънчевия диск за наблюдател на Марс.", 
    "По време на транзит Деймос може да се види от Марс като малко тъмно петно, което бързо се движи по лицето на Слънцето.",
];

const historyEclipseData = [
    "От древни времена се водят записи на слънчеви затъмнения. Датите на Eclipse могат да се използват за хронологично датиране на исторически записи.", 
    "Сирийска глинена плочка на угаритски език записва слънчево затъмнение, настъпило на 5 март 1223 г. пр. н. е. Камък в Ирландия записва затъмнение на 30 ноември 3340 г. пр. н. е.",
    "Позиция на класическата епохата, използвана от астрономите на вавилонски записи на затъмнения най-вече от 13-ти век пр. н. е. осигурява осъществимо и математически последователно обяснение за гръцкото намиране на лунни движения.",
    "Китайските исторически записи за слънчеви затъмнения датират от преди повече от 3000 години и са били използвани за измерване на промените в скоростта на въртене на Земята.",
    "Първият човек, който дава научно обяснение на затъмненията, е Анаксагор(гръцки философ). Той твърди, че луната свети от отразена светлина от Слънцето.",
    "През 5 век сл. н. е. слънчевите и лунните затъмнения са научно обяснени от Арябхата(математик-астроном). Той заявява, че Луната и планетите светят от отразената слънчева светлина и обяснявазатъмненията по отношение на сенките, хвърлени от и падащи върху Земята.", 
    "Aryabhata предоставя изчислението и размера на затъмнената част по време на затъмнение. До 1600 г. европейските астрономи публикуват книги с диаграми, обясняващи как се случват лунните и слънчевите затъмнения.",
];

const statisticsEclipseData = [
    "Цикли на затъмнението: Цикъл на затъмнение се осъществява, когато затъмненията в серия са разделени от определен интервал от време. Това се случва, когато орбиталните движения на телата образуват повтарящи се хармонични модели.", 
    "Конкретен пример е саросът , който води до повторение на слънчево или лунно затъмнение на всеки 6 585,3 дни, или малко повече от 18 години.", 
    "Може да има от четири до седем затъмнения в една календарна година, които се повтарят според различни цикли на затъмнение, като при примера - сарос",
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
