
$(function() {



	$("ul.tabsСaption li").on("click", function() {
		if (!$( this ).hasClass("active")) {

		$(this).siblings("li").removeClass("active").end().addClass("active");

		var indx = $("ul.tabsСaption li.active").index();
		$("div.tabs__content").removeClass("active").eq(indx).addClass("active");
		}
	});




// var titels = 

var titles = $("input[title]").map(function(){
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
	.show();

	return title;
}).get();
console.log(titles);









});









































// (function($) {


// $(function() {

// 	$('ul.tabsСaption').on('click', 'li:not(.active)', function() {
// 		$(this).addClass('active').siblings().removeClass('active')
// 			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
// 	});

// });


// })(jQuery);