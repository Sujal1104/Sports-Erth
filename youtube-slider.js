/* var $st = $(".pagination");
var $slickEl = $(".center");

$slickEl.on(
  "init reInit afterChange",
  function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $st.text(i + " of " + slick.slideCount);
  }
);

$slickEl.slick({
  centerMode: true,
  centerPadding: "100px",
  slidesToShow: 3,
  focusOnSelect: true,
  dots: true,
  infinite: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: "40px",
        slidesToShow: 1,
      },
    },
  ],
});
 */