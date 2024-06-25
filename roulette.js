const roulette = document.querySelector(".roulette-img");
const roulette2 = document.querySelector(".magnified-img");
const rouletteNums = [0, 32, 15, 19, 4, 21, 2, 25, 17, 34, 6, 27, 13, 36, 11, 30, 8, 23, 10, 5, 24, 16, 33, 1, 20, 14, 31, 9, 22, 18, 29, 7, 28, 12, 35, 3, 26]
let running = false;
rouletteNums.reverse();

setInterval(() => {
    rotateOnNum(Math.floor(Math.random() * 30));
}, 30000);


setTimeout(() => {
    rotateOnNum(Math.floor(Math.random() * 30));
}, 2000);
function rotateOnNum(num) {
    if (!running) {
        running = true;
        let angle = 0;
        let speed = 0.3;
        roulette.style.transform = `rotate(${angle}deg)`;
        roulette2.style.transform = `rotate(${angle}deg)`;
        const myInter = setInterval(rotate, 1);

        function rotate() {
            let r = (((360 / 37) * (37 * 5)) + ((360 / 37) * (rouletteNums.indexOf(num) + 1)));
            angle += speed;
            if (angle <= r) {
                angle += (speed);
                speed = (map(angle, 0, r, 1, 0.012))
            } else {
                speed = 0;
                running = false;
                clearInterval(myInter);
                return;
            }

            roulette.style.transform = `rotate(${angle}deg)`;
            roulette2.style.transform = `rotate(${angle}deg)`;
        }
    }
}


function map(value, start1, stop1, start2, stop2) {
    return (value - start1) / (stop1 - start1) * (stop2 - start2) + start2;
}