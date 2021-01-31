$(function () {
	$(".multiple-items").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: ".left-arrow",
        nextArrow: ".right-arrow",
        responsive: [
            {
              breakpoint: 1150,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                infinite: true,
                arrows: false,
                autoplay: true,
                autoplaySpeed: 2000,
              }
            },
        ]
	});
});
