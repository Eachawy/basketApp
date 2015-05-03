$(window).load(function () {
                  $('#carousel').flexslider({
                      animation: "slide",
                      controlNav: false,
                      animationLoop: true,
                      slideshow: true,
                      itemWidth: 210,
                      itemMargin: 5,
                      asNavFor: '#slider'
                  });

                  $('#slider').flexslider({
                      animation: "slide",
                      controlNav: false,
                      animationLoop: true,
                      slideshow: true,
                      sync: "#carousel",
                      start: function (slider) {
                          $('body').removeClass('loading');
                      }
                  });
              });

$(function(){
  var toggles = $('.toggle a'),
      codes = $('.code');
  
  toggles.on("click", function(event){
    event.preventDefault();
    var $this = $(this);
    
    if (!$this.hasClass("active")) {
      toggles.removeClass("active");
      $this.addClass("active");
      codes.hide().filter(this.hash).show();
    }
  });
  toggles.first().click();
});