/*$( ".dropdown-menu > li:nth-child(0n+4)" ).after( "<div class=\"clear-fourth\"></div>" );
$( ".dropdown-menu > li:nth-child(0n+3)" ).after( "<div class=\"clear-third\"></div>" );*/

/*var $status = $('.pagingInfo');
var $slickElement = $('.slick-accueil');
$slickElement.on('init reInit afterChange', function(event, slick, currentSlide, nextSlide) {
  //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});*/

var $gallery = $('.slick-accueil');
var slideCount = null;
$( document ).ready(function() {
    $gallery.slick({
  	fade: true,
    infinite: true,
    speed:1000,
    autoplaySpeed: 4000,
    slidesToShow: 1,
    autoplay:true,
    pauseOnHover: false,
    pauseOnFocus: false,
    prevArrow: $('.prev-slide'),
    nextArrow: $('.next-slide'),
  });
  if ($('#c9137').length){
    $('#kesearch_results > a.display-block').click(function(e) {
      if($traitementLiens) {
          e.preventDefault();
      }
    });
  }
  
});
$( document ).ready( function() {
  // popovers initialization - on hover
     $( ".gymcalendarTooltip" ).each(function( index ) {
         var toolipid = $( this ).attr("data-id");
         $('#idMenu'+toolipid ).popover({
             html: true,
             trigger: 'manual',
             placement: 'top',
             content: function () {
                 return $("#toolTipIdMenu"+toolipid).html() ;
             }
         }).on("mouseenter", function () {
             var _this = this;
             $(this).popover("show");
             $(".popover").on("mouseleave", function () {
                 $(_this).popover('hide');
             });
         }).on("mouseleave", function () {
             var _this = this;
             setTimeout(function () {
                 if (!$(".popover:hover").length) {
                     $(_this).popover("hide");
                 }
             }, 300);
         });
 
 
     });
var $traitementLiens = true;

$( window ).on('load', function() {
  if ($('#c9137').length){
    var page_url = [location.protocol, '//', location.host, location.pathname].join('');
    $($(document).find('#kesearch_results > a.display-block')).each(function(){
      var anchor_link = $(this).attr('href');
      //console.log (anchor_link);
      $(this).attr("href", page_url + anchor_link);
    });
    $traitementLiens = false;
  }
});
// $gallery.on('init', function(event, slick){
$gallery.on('afterChange', function(event, slick){
  slideCount = slick.slideCount;
  setSlideCount();
  setCurrentSlideNumber(slick.currentSlide);
  $gallery.find('.slick-caption').addClass('playing');
});

$gallery.on('beforeChange', function(event, slick, currentSlide, nextSlide){
  setSlideCount();
  setCurrentSlideNumber(nextSlide);
  $gallery.find('.slick-caption').removeClass('playing');
});

$gallery.on('afterChange', function(event, slick, currentSlide, nextSlide){
	$gallery.find('.slick-caption').addClass('playing');
});


function setSlideCount() {

  var $el = $('.slick-accueil .pagingInfo').find('.total');
  $el.text(slideCount);
}

function setCurrentSlideNumber(currentSlide) {

  var $el = $('.slick-accueil .pagingInfo').find('.current');
  $el.text(currentSlide + 1);
}
});
