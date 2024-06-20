const pianoKey = document.querySelectorAll(".p-key");
const keyboardCon = document.querySelector(".keyboard-con");
const keyboardSec = document.querySelectorAll(".keyboard-sec")
console.log(keyboardSec.length)
const audioElements = [];
const keyLenArr = [16, 15, 15, 14, 14, 10];

let arr = ["Escape", "F1", "F2", "F3", "F4", "F5", "F6", "F8", "F9", "F10", "F11", "F12", "", "", "", "",
    "`", "1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "-", "=", "Backspace","PageUp",
    "Tab", "q", "w", "e", "r", "t", "y", "u", "i", "o", "p", "[", "]", "\\", "PageDown",
    "CapsLock", "a", "s", "d", "f", "g", "h", "j", "k", "l", ";", "'", "Enter", "Home",
    "Shift", "z", "x", "c", "v", "b", "n", "m", ",", ".", "/", "", "ArrowUp", "End",
    "Control", "Meta", "Alt", " ", "", "", "", "ArrowLeft", "ArrowDown", "ArrowRight"
];
let str = "";

document.addEventListener("keyup", function (event) {
    console.log("You pressed:", event.key);
    if (!arr.includes(event.key)) {
        str += '"' + event.key + '"' + ", ";
        console.log(str)
    }
});

window.addEventListener("scroll", (event) => {
    const scrollY = window.scrollY;
    if (window.scrollY > 276) {
        document.addEventListener("keyup", function (event) {
            console.log("You pressed:", event.key);
            if (arr.includes(event.key)) {
                removeAllClicked();
                addClick(arr.indexOf(event.key));
            }
        });
    }
});
function removeAllClicked() {
    const allKeys = document.querySelectorAll(".keyboard-key");
    if (allKeys.length)
        allKeys.forEach(element => {
            element.classList.remove("active")
        });
}

function addClick(i) {
    const allKeys = document.querySelectorAll(".keyboard-key");
    if (allKeys.length)
        allKeys[i].classList.add("clicked");

    setTimeout(() => {
        allKeys[i].classList.remove("clicked");
    }, 100);
}
for (let g = 0; g < 6; g++) {

    for (let i = 0; i < keyLenArr[g]; i++) {



        if (g == 1 && i == 13) keyboardSec[g].innerHTML += `<div class="keyboard-key span-2"></div>`;
        else {
            if (g == 2) {
                if (i == 0 || i == 13) keyboardSec[g].innerHTML += `<div class="keyboard-key span-6"></div>`;
                else keyboardSec[g].innerHTML += `<div class="keyboard-key span-4"></div>`;
            }
            else if (g == 3) {
                if (i == 0) keyboardSec[g].innerHTML += `<div class="keyboard-key span-7"></div>`;
                else if (i == 12) keyboardSec[g].innerHTML += `<div class="keyboard-key span-9"></div>`;
                else keyboardSec[g].innerHTML += `<div class="keyboard-key span-4"></div>`;

            }
            else if (g == 4) {
                if (i == 0) keyboardSec[g].innerHTML += `<div class="keyboard-key span-9"></div>`;
                else if (i == 11) keyboardSec[g].innerHTML += `<div class="keyboard-key span-7"></div>`;
                else keyboardSec[g].innerHTML += `<div class="keyboard-key span-4"></div>`;

            }
            else if (g == 5) {
                if (i == 3) keyboardSec[g].innerHTML += `<div class="keyboard-key span-12"></div>`;
                else keyboardSec[g].innerHTML += `<div class="keyboard-key span-4"></div>`;

            }

            else keyboardSec[g].innerHTML += `<div class="keyboard-key"></div>`;
        }
    }
}

for (let i = 1; i < 13; i++) {
    const audio = new Audio("./sound/" + i + ".mp3");
    audioElements.push(audio);
}


for (let i = 0; i < pianoKey.length; i++) {
    pianoKey[i].addEventListener("click", () => {
        if (audioElements[i].paused) {
            audioElements[i].play();
        } else {
            console.log("I' here")
            audioElements[i].pause();
            audioElements[i].currentTime = 0;
            audioElements[i].play();
        }
    })
}