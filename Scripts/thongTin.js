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