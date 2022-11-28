const nhac = document.getElementById('nhac');
const playBtn = document.querySelector('.play-inner');
const prevBtn = document.querySelector('.nut-lui');
const nextBtn = document.querySelector('.nut-tien');
const durationTime = document.querySelector('.thoigian-Baihat');
const remainingTime = document.querySelector('.thoigian-Conlai');
const range = document.querySelector('.range');
const nhacName = document.querySelector('.music-name')
const nhacImg = document.querySelector('.music-img img');
const nhacImgquay = document.querySelector('.music-img');
const tennghesi = document.querySelector('.ten');
const playLapLai = document.querySelector('.lap-lai');
const playRandom = document.querySelector('.ngau-nhien');
const nutTym = document.querySelector('.nut-tym');
const tai = document.querySelector('.nut-down');
//
let isPlaying = true;
let indexNhac = 0;
let lapLainhac = false;
let random = false;
let laplaiCount = 0;
let nutTymLove = false;
let timer;

//tải xuống
tai.addEventListener("click", function () {
    let link = document.createElement("a");
    link.setAttribute("download", document.getElementById('name').textContent);
    var name = document.getElementById('nhac').src;
    link.href = name; //loi ngay day 
    document.body.appendChild(link);
    link.click();
    link.remove();
})
// nut Tym
nutTym.addEventListener("click", function () {
    if (nutTymLove) {
        nutTymLove = false;
        nutTym.removeAttribute("style");
    }
    else {
        nutTymLove = true;
        nutTym.style.color = "#1b9fe6";
    }
})
// nhan vao se\~ lap lai nhac
playLapLai.addEventListener("click", function () {

    if (lapLainhac) {
        lapLainhac = false;
        playLapLai.removeAttribute("style");
    }
    else {
        lapLainhac = true;
        playLapLai.style.color = "#1b9fe6";
    }
});
playRandom.addEventListener("click", function () {
    if (random) {
        random = false;
        playRandom.removeAttribute("style");
    }
    else {
        random = true;
        playRandom.style.color = "rgb(76 27 136)";
        let musicIndex = Math.floor((Math.random() * musics.length) + 1);
        init(musicIndex);
        playPause();
    }
});

//Chuyen nhac
nextBtn.addEventListener('click', function () {
    changeNhac(1);
});
prevBtn.addEventListener('click', function () {
    changeNhac(-1);
});

// nhac chạy xong .chuyển bài 
nhac.addEventListener('ended', handleEndedSong);
function handleEndedSong() {
    laplaiCount++;
    if (lapLainhac && laplaiCount === 1) {
        isPlaying = true;
        playPause();
    }
    else {
        changeNhac(1);
    }
}
// end chuyển bài 

function changeNhac(dir) {
    if (dir === 1) {
        //next
        playRandom.removeAttribute("style");
        indexNhac++;
        if (indexNhac >= musics.length) {
            indexNhac = 0;
        }
        isPlaying = true;
    } else if (dir === -1) {
        //prev
        indexNhac--;
        if (indexNhac < 0) {
            indexNhac = musics.length - 1;
        }
        isPlaying = true;
    }
    init(indexNhac);
    playPause();
}

playBtn.addEventListener('click', playPause);
function playPause() {
    if (isPlaying) {
        nhac.play();
        nhacImg.style.borderRadius = "50%";
        nhacImg.style.boxShadow = "0 0 0 5px #ffff ,0 0 0 10px #1b9fe6"
        nhacImgquay.classList.add("play-inner");
        playBtn.innerHTML = `<i class="fa-solid play fa-pause"></i>`;
        isPlaying = false;
        timer = setInterval(displayTimer1, 500);
    }
    else {
        nhac.pause();
        nhacImg.removeAttribute("style");
        nhacImgquay.classList.remove("play-inner");
        playBtn.innerHTML = ` <i class="fa-solid play fa-play"></i>`;
        isPlaying = true;
        clearInterval(timer);
    }
}

/// thoi gian nhac
function displayTimer1() {
    const { duration, currentTime } = nhac;
    /*thanh chay nhac */
    range.max = duration;
    range.value = currentTime;
    /*end thanh chay nhac */
    remainingTime.textContent = formatTimer(currentTime);
    if (!duration) {
        durationTime.textContent = "00:00";
    } else {
        durationTime.textContent = formatTimer(duration);
    }
}
function formatTimer(number) {
    const minutes = Math.floor(number / 60);
    const seconds = Math.floor(number - minutes * 60);
    return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;

}

// end thoi gian nhac
range.addEventListener('change', handleChange);
function handleChange() {
    nhac.currentTime = range.value;
}

//nhét dữ liệu vào thẻ
function init(indexNhac) {
    displayTimer1();
    nhac.setAttribute("src", `${musics[indexNhac].link}`);
    nhacImg.setAttribute("src", musics[indexNhac].imgSong);
    nhacName.textContent = musics[indexNhac].tenSong;
    tennghesi.textContent = musics[indexNhac].ngheDanh;
}
displayTimer1();
init(indexNhac);