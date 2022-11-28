// cal mobile nav btn
const btnToggleMoble = document.querySelector('.click_user');

const handleMobileBtnClick = () => {
    const mobileNav = document.querySelector('.click-navigation');
    mobileNav.classList.toggle('active'); /*toggle(): Hiển thị và ẩn các thành phần */
}
//thêm sự kiện bấm vào cho element
btnToggleMoble.addEventListener('click', handleMobileBtnClick);
// cal mobile nav btn

//tim kiem