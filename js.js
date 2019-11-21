// function splitScroll() {
//     const controller = new ScrollMagic.Controller();

//     new ScrollMagic.Scene({
//             duration: '300%',
//             triggerElement: '.right',
//             triggerHook: 0
//         })
//         .setPin('.left')
//         /*.addIndicators()*/
//         .addTo(controller);
// }

// splitScroll();


/* Taber  ----  ----  ----  ----  ----  ----  */

$("html").on("click", ".tab", function(evt) {
  var tab = $(evt.currentTarget);
  var x = evt.pageX - tab.offset().left;
  var y = evt.pageY - tab.offset().top;
  
  $("<span/>").appendTo(tab).css({
    left: x,
    top: y
  });
});
