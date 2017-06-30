window.onload=AddJavascript;
var URL = location.pathname;

$(document).ready(function() {
	$('.favor_slider').slick({
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 1,
		vertical:true,
		verticalSwiping:true,
		arrows: true,
		prevArrow: $('.arrow_up'),
		nextArrow: $('.arrow_down'),
		responsive: [
		{
			breakpoint: 768,
			settings: {
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				arrows: false
			}
		}
		// You can unslick at a given breakpoint now by adding:
		// settings: "unslick"
		// instead of a settings object
		]
	});
	
	if(URL.indexOf("product")!=-1&&URL.indexOf("detail")!=-1){
		$('.product_detail_page_slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			fade: true,
			asNavFor: '.product_detail_page_slider_ctr'
		});
		$('.product_detail_page_slider_ctr').slick({
			slidesToShow: 5,
			slidesToScroll: 1,
			asNavFor: '.product_detail_page_slider',
			dots: false,
			arrows: true,
			centerMode: false,
			focusOnSelect: true,
			centerMode: true,
		});
		$('.product_detail_page_other_item').slick({
			infinite: false,
			slidesToShow: 9,
			slidesToScroll: 1,
			arrows: true,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
				}
			}
			]
		});
	}
	else if(URL.indexOf("store.html")!=-1){
		$('.kc-wrap').KillerCarousel({
			// Default natural width of carousel.
			width: 1000,
			// Item spacing in 3d (has CSS3 3d) mode.
			spacing3d: 400,
			// Item spacing in 2d (no CSS3 3d) mode. 
			spacing2d: 200,
			showShadow: true,
			showReflection: true,
			// Looping mode.
			infiniteLoop: true,
			// Scale at 75% of parent element.
			autoScale: 50
		});
	}
});

function AddJavascript(){
	$(function(){
		$(".back_top").click(function(){
			jQuery("html,body").animate({
				scrollTop:0
			},500);
		});
		
	});
	
	if(URL.indexOf("index")!=-1){
		$(function(){
			$('.index_page_product_item_slider').slick({
				slidesToShow: 5,
				slidesToScroll: 1,
				autoplay: true,
				autoplaySpeed: 2000,
			});
		});
	}
	else if(URL.indexOf("login")!=-1){
		$(function(){
			$(".login_a").click(function(){
				$(this).css({"background":"#FFF","color":"#000"});
				$(".register_a").css({"background":"#D6D6D6","color":"#000"});
				$("#login_container").removeClass("hidden-xs hidden-sm");
				$("#register_container").addClass("hidden-xs hidden-sm");
			});
			$(".register_a").click(function(){
				$(this).css({"background":"#D6D6D6","color":"#000"});
				$(".login_a").css({"background":"#FFF","color":"#000"});
				$("#login_container").addClass("hidden-xs hidden-sm");
				$("#register_container").removeClass("hidden-xs hidden-sm");
			});
		});
	}
	else if(URL.indexOf("m_reserve")!=-1){
		$(function(){
			$(".m_reserve_page_item_btn").click(function(){
				num=this.innerHTML+"_more";
				if(document.getElementById(num).style.display=="none"){
					document.getElementById(num).style.display="block";
				}
				else{
					document.getElementById(num).style.display="none";
				}
			});
		});
	}
	else if(URL.indexOf("product")!=-1&&URL.indexOf("detail")!=-1){
		function change_txt(num){
			if(num==1){
				$(".product_detail_page_item_txt_1").show();
				$(".product_detail_page_item_txt_2").hide();
				$(".product_detail_page_item_txt_3").hide();
				$(".product_detail_page_item_txt_titel_1").addClass("active");
				$(".product_detail_page_item_txt_titel_2").removeClass("active");
				$(".product_detail_page_item_txt_titel_3").removeClass("active");
			}
			else if(num==2){
				$(".product_detail_page_item_txt_1").hide();
				$(".product_detail_page_item_txt_2").show();
				$(".product_detail_page_item_txt_3").hide();
				$(".product_detail_page_item_txt_titel_1").removeClass("active");
				$(".product_detail_page_item_txt_titel_2").addClass("active");
				$(".product_detail_page_item_txt_titel_3").removeClass("active");
			}
			else{
				$(".product_detail_page_item_txt_1").hide();
				$(".product_detail_page_item_txt_2").hide();
				$(".product_detail_page_item_txt_3").show();
				$(".product_detail_page_item_txt_titel_1").removeClass("active");
				$(".product_detail_page_item_txt_titel_2").removeClass("active");
				$(".product_detail_page_item_txt_titel_3").addClass("active");
			}
		}
	}
	else if(URL.indexOf("store_detail")!=-1){
		$(function(){
			$(".a_tel").click(function(){
				if ( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
					$(this).attr("href","tel:07-5227108");
				}
				else {
					alert("僅限行動裝置使用!");
				}
			});
		});
	}
	else if(URL.indexOf("store_list")!=-1){
		$(function(){
			$('.btn').tooltip({title: "<h5>07-2221234</h5><h5>800 高雄市新興區50號</h3>", html: true, placement: "top"});
		});
	}
	else if(URL.indexOf("store")!=-1){
		$(function(){
			$('.btn').tooltip({title: "<h5>07-2221234</h5><h5>800 高雄市新興區50號</h3>", html: true, placement: "top"});
		});
	}
}