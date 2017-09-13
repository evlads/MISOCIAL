$(document).ready(function () {
    svg4everybody({});

    $(".js-nav-icon").on('click', function(){
    	if ($(this).hasClass("mobile-nav-icon--active")) {
    		$(this).removeClass("mobile-nav-icon--active");
    		$(".header-nav-list").removeClass("js-header-nav-list");
    	} else {
    		$(".header-nav-list").addClass("js-header-nav-list");
    		$(".js-nav-icon").addClass("mobile-nav-icon--active")
    	}
    });
});