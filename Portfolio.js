/* Tabs  ----  ----  ----  ----  ----  ---- */


function btnSplash(event) {
  const tab = event.currentTarget;

  const tabRect = tab.getBoundingClientRect();
  const x = event.pageX - (tabRect.left + window.scrollX);
  const y = event.pageY - (tabRect.top + window.scrollY);

  const span = document.createElement("span");
  span.style.left = x + "px";
  span.style.top = y + "px";

  tab.appendChild(span);      
}

const arrTabButtons = document.getElementsByClassName("tab");
for (let tabBtn of arrTabButtons) {
  tabBtn.addEventListener("click", btnSplash);
}



/* Swiper ---- ---- ---- ---- ---- ---- ----  */

var mySwiper = new Swiper ('.swiper-container', {
  // Optional parameters
  direction: 'horizontal',
  loop: true,
  simulateTouch: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});