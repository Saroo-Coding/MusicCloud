const prevBtn = document.querySelector('.btn.previ');
const nextBtn = document.querySelector('.btn.next');
const slides = document.querySelectorAll('.slide');

let activeIndex = 0;

slides[activeIndex].classList.add('active');

function changeSlide(page) {
    slides[activeIndex].classList.remove('active');
    activeIndex = activeIndex + page;
    // lùi từ 0 về 5
    if (activeIndex === -1) {
        activeIndex = slides.length - 1;
    }
    if (activeIndex === slides.length) {
        activeIndex = 0;
    }
    //
    slides[activeIndex].classList.add('active');
}
// nút lùi <
prevBtn.addEventListener('click', function () {
    changeSlide(-1);
});
// nút tiếp >
nextBtn.addEventListener('click', function () {
    changeSlide(1);
});
// tự chạy qua ảnh
setInterval(function () {
    changeSlide(1);
}, 2000);



//lấy element ra
const tabBtns = document.querySelectorAll('.tabs li');
const tabContent = document.querySelectorAll('.tab-content');
const handleTabBtnClick = (tab) => {
    tabContent.forEach((p) => {
        p.classList.remove('active');
    })
    tabBtns.forEach((li) => {
        li.classList.remove('active'); /* xóa các class  có active */
    });

    tab.classList.add('active');

    const target = tab.getAttribute('data-target');

    const activeTab = document.querySelector(target);
    activeTab.classList.add('active');
    // console.log('clicked', event.target);
    // event.target.classList.add('active');
}
tabBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        handleTabBtnClick(btn);
    })
})
