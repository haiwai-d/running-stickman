const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const img1 = document.createElement("img");
img1.src = "img/1.png";

const img2 = document.createElement("img");
img2.src = "img/2.png";

const img3 = document.createElement("img");
img3.src = "img/3.png";

let counter = 0;
function showAnimation() {
    // 画面を削除
    context.clearRect(0, 0, 300, 300);

    // 棒人間を表示（カウンターを4で割ったときの余りで条件分岐）
    switch(counter % 4) {
        case 0:
            context.drawImage(img1, 0, 0);
            break;

        case 1:
            context.drawImage(img2, 0, 0);
            break;

        case 2:
            context.drawImage(img3, 0, 0);
            break;

        case 3:
            context.drawImage(img2, 0, 0);
            break;
    }
    counter++; // カウンターを1増やす
}

let timer;

function start() {
    timer = setInterval(showAnimation, 200);
}

function stop() {
    clearInterval(timer);
}