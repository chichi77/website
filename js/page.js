window.onload=AddJavascript;
var URL = location.pathname;

$(document).ready(function() {
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
			slidesToShow: 6,
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
		$('.favor_slider').slick({
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 1,
			arrows: true,
			responsive: [
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
					infinite: true,
					arrows: false,
					vertical:true,
					verticalSwiping:true,
				}
			}
			// You can unslick at a given breakpoint now by adding:
			// settings: "unslick"
			// instead of a settings object
			]
		});
	}
	else{
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
		if(URL.indexOf("store.html")!=-1){
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
	}
});

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
			//$('.btn').tooltip({title: "<h5>07-2221234</h5><h5>800 高雄市新興區50號</h3>", html: true, placement: "top"});
			$('.shop_list_area_menu_title').click(function(){
				if($('.shop_list_area_menu').css('display')=="none"){
					$('.shop_list_area_menu').slideDown();
				}
				else{
					$('.shop_list_area_menu').slideUp();
				}
			})
		});
	}
	else if(URL.indexOf("store")!=-1){
		$(function(){
			//$('.btn').tooltip({title: "<h5>07-2221234</h5><h5>800 高雄市新興區50號</h3>", html: true, placement: "top"});
		});
	}
}

function ChangeContactForm(Form_num){
	var state=document.getElementsByClassName('contact_page_form').item(Form_num).style.display;
	
	$('.contact_page_form').hide();
	$('.contact_menu>li').removeClass('active');
	document.getElementsByClassName('contact_page_form').item(Form_num).style.display='block';
	$('.contact_menu>li').eq(Form_num).addClass('active');
}

var $data_notify_default = "必填",
	$data_notify_mail = "信箱錯誤",
	$data_notify_pass = "請檢查密碼設定";
	
function check_submit(object) //FORM_CHECK
{
	
	reEmail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/; 
	object.find(".required").each(function() {
        if($(this).val()==""){
			$(this).addClass("invalid").next(".notify").remove();
			if($(this).attr("data-notify")){
				$(this).after("<span class='notify'>"+$(this).attr("data-notify")+"</span>");
			}else{
				$(this).after("<span class='notify'>"+$data_notify_default+"</span>");
			}
		}else if($(this).hasClass("mail_check")){ //E-mail Check
			if($(this).val().search(reEmail) == "-1"){
				$(this).addClass("invalid").next(".notify").remove();
				$(this).after("<span class='notify'>"+$data_notify_mail+"</span>");
			}else{
				$(this).removeClass("invalid");
				$(this).next(".notify").remove();
			}
		}else if($(this).hasClass("pw_check")){ //Password Check
			if(!$(this).hasClass("pw_db_check")){
				var $db_check = $(this).parents("form").find("input.pw_db_check");
				if($(this).val().length < 6 || $(this).val().length > 12){
					$(this).addClass("invalid").next(".notify").remove();
					$(this).after("<span class='notify'>"+$data_notify_pass+"</span>");
				}else{
					$(this).removeClass("invalid");
					$(this).next(".notify").remove();
					//do pw db check
					if($(this).val() != $db_check.val()){
						$db_check.addClass("invalid").next(".notify").remove();
						$db_check.after("<span class='notify'>"+$data_notify_pass+"</span>");
						return false;
					}

				}
			}else{ //if it's db_check_input
				if($(this).val().length < 6 || $(this).val().length > 12){
					$(this).addClass("invalid").next(".notify").remove();
					$(this).after("<span class='notify'>"+$data_notify_pass+"</span>");
				}else{
					$(this).removeClass("invalid");
					$(this).next(".notify").remove();
				}
			}
			
		}else{
			$(this).removeClass("invalid");
			$(this).next(".notify").remove();
		}
    });
	
	if (object.find("*").hasClass("invalid")){
		return false;
	}else{
		return true;
	};
}

$(function(){
	$(".contact_page_form.service").submit(function(){
		if (check_submit($(this))){
			$(this).submit();
		}else{
			$(this).find(".invalid").eq(0).focus();
			return false;
		};
	});
	$(".contact_page_form.offer").submit(function(){
		if (check_submit($(this))){
			$(this).submit();
		}else{
			$(this).find(".invalid").eq(0).focus();
			return false;
		};
	});
	$(".contact_page_form.cooperation").submit(function(){
		if (check_submit($(this))){
			$(this).submit();
		}else{
			$(this).find(".invalid").eq(0).focus();
			return false;
		};
	});
})