$(document).ready(function() {

	var lanString = {
		nav: {
			home: "首页",
			whatWeDo: "服务",
			ourWork: "案例",
			aboutUs: "关于",
			news: "新闻",
			contactUs: "联系"
		}
	}

	$('#fullpage').fullpage({
        anchors: ['home', 'contact-us'],
        menu: '#menu'
	});

	$(".menu ul li").on("click", function(){
        var $general = $(".menu ul li");
		var $this = $(this);
		$general.removeClass("active");
		$this.addClass("active");
		if($this.hasClass("lan-eng")){
			translateMenu();
		}
	});

	function translateMenu(){
		$("#menu-home a").text(lanString.nav.home);
        $("#menu-whatwedo a").text(lanString.nav.whatWeDo);
        $("#menu-ourwork a").text(lanString.nav.ourWork);
        $("#menu-aboutus a").text(lanString.nav.aboutUs);
        $("#menu-news a").text(lanString.nav.news);
        $("#menu-contactus a").text(lanString.nav.contactUs);
	}

});