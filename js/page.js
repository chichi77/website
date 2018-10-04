var URL = location.pathname;

//觸發slick
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

//聯絡表單換頁
function ChangeContactForm(Form_num){
	var state=document.getElementsByClassName('contact_page_form').item(Form_num).style.display;
	
	$('.contact_page_form').hide();
	$('.contact_menu>li').removeClass('active');
	document.getElementsByClassName('contact_page_form').item(Form_num).style.display='block';
	$('.contact_menu>li').eq(Form_num).addClass('active');
}

$(function(){
	//共用區塊
	//滑動到頂部
	$(".back_top").click(function(){
		jQuery("html,body").animate({
			scrollTop:0
		},500);
	});

	//svg處理
	$('.menu_right ul li img').addClass('svg');
	$('.m_page_left_menu_item img').addClass('svg');
	jQuery('img.svg').each(function(){
	    var $img = jQuery(this);
	    var imgID = $img.attr('id');
	    var imgClass = $img.attr('class');
	    var imgURL = $img.attr('src');

	    jQuery.get(imgURL, function(data) {
	        // Get the SVG tag, ignore the rest
	        var $svg = jQuery(data).find('svg');

	        // Add replaced image's ID to the new SVG
	        if(typeof imgID !== 'undefined') {
	            $svg = $svg.attr('id', imgID);
	        }
	        // Add replaced image's classes to the new SVG
	        if(typeof imgClass !== 'undefined') {
	            $svg = $svg.attr('class', imgClass+' replaced-svg');
	        }

	        // Remove any invalid XML tags as per http://validator.w3.org
	        $svg = $svg.removeAttr('xmlns:a');

	        // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
	        if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
	            $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
	        }

	        // Replace image with new SVG
	        $img.replaceWith($svg);

	    }, 'xml');

	});

	//右邊浮動選單
	for(let i=0;i<$('.menu_right ul li').length;i++){
		var reserve_num=parseInt($('.menu_right ul li').eq(1).text());
		if(reserve_num>0){
			$('.menu_right ul li').eq(1).addClass('org');
			
		}
		else{
			$('.menu_right ul li').eq(1).removeClass('org');
		}
	}


	//首頁
	$('.index_page_product_item_slider').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		autoplay: true,
		autoplaySpeed: 2000,
	});

	//登入頁
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

	//門市頁面縣市選擇手機板目錄
	$('.shop_list_area_menu_title').click(function(){
		if($('.shop_list_area_menu').css('display')=="none"){
			$('.shop_list_area_menu').slideDown();
		}
		else{
			$('.shop_list_area_menu').slideUp();
		}
	})

	//會員頁
	//會員預約查詢點擊可查看明細
	$(".m_reserve_page_item_btn").click(function(){
		num=this.innerHTML+"_more";
		if(document.getElementById(num).style.display=="none"){
			document.getElementById(num).style.display="block";
		}
		else{
			document.getElementById(num).style.display="none";
		}
	});


	//購物車頁面
	/*$('.deliver_way').hide();
			
	$('.reserve_2_page_table input[name="deliver"]').click(function(e) {
		$('.deliver_way').hide();
        var deliver_way=$('.reserve_2_page_table input[name="deliver"]').index(this);
		console.log("deliver_way"+deliver_way);
		if(deliver_way==0){
			$('.deliver_way.store').show();
		}
		else if(deliver_way==1){
			$('.deliver_way.online').show();
		}
    });*/
})