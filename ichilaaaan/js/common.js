// JavaScript Document
$(function(){
	$('.list-servise,.nav-service').hover(function(){
		$('.nav-service').show();
	},function(){
		$('.nav-service').hide();
	});
	$('.list-division,.nav-division').hover(function(){
		$('.nav-division').show();
	},function(){
		$('.nav-division').hide();
	});
	$('.list-date,.search-date').hover(function(){
		$('.search-date').show();
	},function(){
		$('.search-date').hide();
	});

	$('.thumb .page-title').hover(function(){
		$(this).closest('.page').addClass('fliped');
		setTimeout($.proxy(function(){
			$(this).closest('.thumb').next('.info').css('z-index','999');
		},this),300);
	});
	$('.turn').click(function(){
		$(this).closest('.page').removeClass('fliped');
		setTimeout($.proxy(function(){
			$(this).closest('.info').css('z-index','0');
		},this),300);
	});

	$(".setting").click(function(){
		$("body").append('<div class="modal-bg"></div>');
		modalResize();
		$(".modal-bg,.modal-main").fadeIn("slow");
		$(".modal-bg,.modal-close").click(function(){
			$(".modal-main,.modal-bg").fadeOut("slow",function(){
				$('.modal-bg').remove() ;
			});
		});
		$(window).resize(modalResize);
		function modalResize(){
			var w = $(window).width();
			var h = $(window).height();
			var cw = $(".modal-main").outerWidth();
			var ch = $(".modal-main").outerHeight();
			$(".modal-main").css({
				"left": ((w - cw)/2) + "px",
				"top": ((h - ch)/2) + "px"
			});
		}
	});

	$('.nav').delegate('input:checkbox','change',function(){
		var $lis = $('.page').hide();
		$('.page').removeClass('fliped').children('.info').css('z-index','0');
		$('input:checked').each(function(){
			$lis.filter('.'+$(this).attr('data-filter')).fadeIn().addClass('is-animated');
		});
	}).find('input:checkbox').change();
	
	
});