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

/* --- */

function emailObfuscator() { 
  //http://www.jottings.com/obfuscator/
  const coded = "LNHsb_nf6@MbfLnNq.HbL";
  const key = "ZUDQLugMCfzbqaPec8RO9kWwpFrA5EITjXnSBH3xivy4Km7shGtJol12d0VY6N";
  const shift = coded.length;
  let link = "";
  for (i=0; i<coded.length; i++) {
    if (key.indexOf(coded.charAt(i))==-1) {
      let ltr = coded.charAt(i);
      link += (ltr);
    }
    else {     
      let ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length;
      link += (key.charAt(ltr));
    }
  }
  link = "mailto:" + link;

  const email = document.createElement("a");
  email.setAttribute('href', link);
  email.setAttribute("id", "emailLink");
  email.appendChild(document.createTextNode("E-Mail"));
  document.getElementById("myEmail").appendChild(email);

  const icon = document.createElement("i");
  icon.setAttribute("class", "fas fa-envelope");
  document.getElementById("emailLink").insertAdjacentElement('afterbegin', icon);
}

emailObfuscator();