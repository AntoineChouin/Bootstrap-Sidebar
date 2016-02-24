   $("#menu-toggle").click(function (e) {
      e.preventDefault();
      $("#wrapper").toggleClass("toggled");
   });

   $(function () {
      $('#sidebar-wrapper').css({
         'height': ($(document).height()) + 'px'
      });
      $(window).resize(function () {
         $('#sidebar-wrapper').css({
            'height': ($(document).height()) + 'px'
         });
      });
   });

//   $("#menu-toggle").click(function () {
//      $('#menu-toggle i').removeClass("fa-caret-square-o-right");
//      $("#menu-toggle i").addClass("fa-caret-square-o-left");
//   });
 $("#menu-toggle").click(function () {
      $('#menu-toggle i').toggleClass("fa-caret-square-o-right fa-caret-square-o-left");
//      $("#menu-toggle i").addClass("");
   });


