main();

function main() {
	loadStuff();
	setUpStuff();
}

function setUpStuff() {
		setBackgroundImg();
}

function loadStuff() {
	$("#top-nav").load("/docs/pages/top-nav.html");
}

function setBackgroundImg() {
	imgWidth = $("meta[name='bg-img-width']").attr("content");
	$("#background").css({
		"min-height" : "100%",
		"min-width" : imgWidth,
		"width" : "100%",
		"height" : "auto",
		"position" : "fixed",
		"top" : "0"
	});
	$("style").append("@media screen and (max-width: " + imgWidth +") {#background{left: 50%; margin-left: " +String(parseInt(imgWidth, 10) / 2 * -1) + "px}}");
}

function switchTopNav() {
	if ($("#top-nav #links").hasClass("open")) {
		$("#top-nav #links").addClass("close").removeClass("open");
	} else {
		$("#top-nav #links").addClass("open").removeClass("close");
	}
}
