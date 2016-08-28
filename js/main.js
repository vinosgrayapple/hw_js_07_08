
$(function() {

/*======1=======*/ 


	$("ul.tabsСaption li").on("click", function() {
		if (!$( this ).hasClass("active")) {

		$(this).siblings("li").removeClass("active").end().addClass("active");

		var indx = $("ul.tabsСaption li.active").index();
		$("div.tabs__content").removeClass("active").eq(indx).addClass("active");
		}
	});

/*======2=======*/ 

var titles = $("input[title]").each(function(){
	var title =  $(this).attr("title");
	$(this).removeAttr("title").parent().append("<span>" + title + "</span>");

	$(this).siblings("span")
	.css({
		"background": "rgba(255,255,255,0.7)",
		"padding": "5px",
		"border": "1px solid #ddd",
		"border-radius": "4px",
		"box-shadow": "1px 1px 8px rgba(0,0,0,0.5)"
	})
	.addClass("tooltip")
	.hide();
});
$("input").on("mouseenter click focus",function() {
	$(this).next("span").fadeIn();
});

$("input").on("mouseleave focusout",function() {
	$(this).next("span").fadeOut();
});


$("#button").on("click", function() {
	$("span.tooltip").fadeIn( 2000 ).delay( 600 ).fadeOut( 2000 );
});


});

