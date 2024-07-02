let mineCard = document.querySelectorAll(".single-grid-el");
let mineCardBig = document.querySelectorAll(".single-grid-shadow");
const bet = new Audio('./images/sounds/bet.mp3');
const bomb = new Audio('./images/sounds/mines_bomb.mp3');
const gold = new Audio('./images/sounds/mines_win.mp3');
bomb.volume = 0.1;
gold.volume = 0.1;
let mineNum = document.querySelectorAll(".mine-num-con");
let playBtn = document.querySelector(".play-btn")
let mineValArr = [1, 3, 5, 10];
let mineVal = 3;
let num = getRandomNumbers(mineVal);

playBtn.addEventListener("click", () => {
    restartGame();
})

for (let i = 0; i < mineNum.length; i++) {
    mineNum[i].addEventListener("click", () => {
        console.log(i)
        for (let i = 0; i < mineNum.length; i++) {
            mineNum[i].classList.remove("mine-num-active")
        }
        mineNum[i].classList.add("mine-num-active");
        mineVal = mineValArr[i];
    })
}



for (let i = 0; i < mineCard.length; i++) {
    mineCard[i].addEventListener("mousedown", function () {
        mineCardBig[i].classList.add("down");
        mineCardBig[i].classList.remove("up");
    });
    mineCard[i].addEventListener("mouseup", function () {
        mineCardBig[i].classList.add("up");
        mineCardBig[i].classList.remove("down");
        mineCardBig[i].classList.add("animation");
        getMine(i);
        mineCard[i].classList.add("selected");
        setTimeout(() => {
            mineCardBig[i].classList.remove("up");
        }, 500);
    });
}

function getRandomNumbers(len) {
    const randomNumbers = [];
    for (let i = 0; i < len; i++) {
        const randomNumber = Math.floor(Math.random() * 25);
        randomNumbers.push(randomNumber);
    }
    return randomNumbers;
}



function getMine(i) {
    if (!num.includes(i)) {
        setTimeout(() => {
            playGold();
            mineCard[i].classList.add("hide");
            mineCardBig[i].innerHTML += `<img src="./images/gold.png" alt="" class="gold-img mine-img">`;
            mineCardBig[i].classList.remove("animation");
        }, 1);
    } else {
        openAll();
    }
}

function openAll() {
    playBomb();
    for (let i = 0; i < mineCard.length; i++) {
        console.log(!num.includes(i), "<-----------------------")
        if (!num.includes(i)) {
            mineCard[i].classList.add("hide");
            mineCardBig[i].innerHTML += `<img src="./images/gold.png" alt="" class="gold-img mine-img">`;
            mineCardBig[i].classList.remove("animation");
        } else {
            mineCard[i].classList.add("hide");
            mineCardBig[i].innerHTML += `<img src="./images/bomb.png" alt="" class="bomb-img mine-img">`;
            mineCardBig[i].classList.remove("animation");
        }
    }
}


function playGold() {
    gold.currentTime = 0;
    gold.play();
}
function playBomb() {
    bomb.currentTime = 0;
    bomb.play();
}

function restartGame() {
    playGold();
    let mineImgs = document.querySelectorAll(".mine-img");
    mineCard = document.querySelectorAll(".single-grid-el");
    mineCardBig = document.querySelectorAll(".single-grid-shadow");
    num = getRandomNumbers(mineVal);
    for (let i = 0; i < mineCard.length; i++) {
        mineCard[i].classList.remove("hide");
        mineCard[i].classList.remove("selected");
        // if (mineCardBig[i].childNodes.length == 4) {
        //     mineCardBig[i].removeChild(mineCardBig[i].childNodes[4]);
        // }
        // mineCardBig[i].classList.add("animation");
    }
    mineImgs.forEach(element => {
        element.parentNode.removeChild(element);
    });



    for (let i = 0; i < mineCard.length; i++) {
        mineCard[i].addEventListener("mousedown", function () {
            mineCardBig[i].classList.add("down");
            mineCardBig[i].classList.remove("up");
        });
        mineCard[i].addEventListener("mouseup", function () {
            mineCardBig[i].classList.add("up");
            mineCardBig[i].classList.remove("down");
            mineCardBig[i].classList.add("animation");
            getMine(i);
            mineCard[i].classList.add("selected");
            setTimeout(() => {
                mineCardBig[i].classList.remove("up");
            }, 500);
        });
    }


    // for (let i = 0; i < mineCard.length; i++) {
    //     mineCard[i].addEventListener("mousedown", function () {
    //         mineCardBig[i].classList.add("down");
    //         mineCardBig[i].classList.remove("up");
    //     });
    //     mineCard[i].addEventListener("mouseup", function () {
    //         mineCardBig[i].classList.add("up");
    //         mineCardBig[i].classList.remove("down");
    //         mineCardBig[i].classList.add("animation");
    //         getMine(i);
    //         mineCard[i].classList.add("selected");
    //         setTimeout(() => {
    //             mineCardBig[i].classList.remove("up");
    //         }, 500);
    //     });
    // }


}

// setTimeout(() => {
//     playBomb();
//     mineCard[i].classList.add("hide");
//     mineCardBig[i].innerHTML += `<img src="./assets/bomb.png" alt="" class="bomb-img">`;
//     mineCardBig[i].classList.remove("animation");
// }, 2);