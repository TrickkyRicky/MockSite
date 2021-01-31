
// targets the class scroll and animates a scroll movement
// based on the offset
$(document).ready(function () {
	let scrollLink = $(".scroll");

	scrollLink.click(function (e) {
		e.preventDefault();
		$("body,html").animate(
			{
				scrollTop: $(this.hash).offset().top,
			},
			1200
		);
	});
});