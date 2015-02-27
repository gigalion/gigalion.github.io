// JavaScript Document

/*$(function(){
	$("#home").animate({"opacity":"0"});
});*/

$(function(){
	$('#loopslider').each(function(){
		var loopsliderWidth = $(this).width();
		var loopsliderHeight = $(this).height();
		$(this).children('ul').wrapAll('<div id="loopslider_wrap"></div>');

		var listWidth = $('#loopslider_wrap').children('ul').children('li').width();
		var listCount = $('#loopslider_wrap').children('ul').children('li').length;

		var loopWidth = (listWidth)*(listCount);

		$('#loopslider_wrap').css({
			top: '0',
			left: '0',
			width: ((loopWidth) * 2),
			height: (loopsliderHeight),
			overflow: 'hidden',
			position: 'absolute'
		});

		$('#loopslider_wrap ul').css({
			width: (loopWidth)
		});
		loopsliderPosition();

		function loopsliderPosition(){
			$('#loopslider_wrap').css({left:'0'});
			$('#loopslider_wrap').stop().animate({left:'-' + (loopWidth) + 'px'},50000,'linear');
			setTimeout(function(){
				loopsliderPosition();
			},50000);
		};

		$('#loopslider_wrap ul').clone().appendTo('#loopslider_wrap');
	});
});




$(function(){
	$('#loopslider02').each(function(){
		var loopslider02Width = $(this).width();
		var loopslider02Height = $(this).height();
		$(this).children('ul').wrapAll('<div id="loopslider02_wrap"></div>');

		var listWidth = $('#loopslider02_wrap').children('ul').children('li').width();
		var listCount = $('#loopslider02_wrap').children('ul').children('li').length;

		var loopWidth = (listWidth)*(listCount);

		$('#loopslider02_wrap').css({
			top: '0',
			left: '0',
			width: ((loopWidth) * 2),
			height: (loopslider02Height),
			overflow: 'hidden',
			position: 'absolute'
		});

		$('#loopslider02_wrap ul').css({
			width: (loopWidth)
		});
		loopslider02Position();

		function loopslider02Position(){
			$('#loopslider02_wrap').css({left:'0'});
			$('#loopslider02_wrap').stop().animate({left:'-' + (loopWidth) + 'px'},50000,'linear');
			setTimeout(function(){
				loopslider02Position();
			},50000);
		};

		$('#loopslider02_wrap ul').clone().appendTo('#loopslider02_wrap');
	});
});
