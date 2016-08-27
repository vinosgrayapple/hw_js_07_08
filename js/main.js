
$(function() {

	$("ul.tabsСaption li").on("click", function() {
		if (!$( this ).hasClass( "active" )) {

		$(this).siblings("li").removeClass("active").end().addClass("active");

		var indx = $("ul.tabsСaption li.active").index();
		$("div.tabs__content").removeClass("active").eq(indx).addClass("active");
		}
	});

});









































// (function($) {


// $(function() {

// 	$('ul.tabsСaption').on('click', 'li:not(.active)', function() {
// 		$(this).addClass('active').siblings().removeClass('active')
// 			.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
// 	});

// });


// })(jQuery);