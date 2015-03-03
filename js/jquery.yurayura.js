jQuery( function() {
	jQuery.fn.yurayura = function( config ){
		var obj = this;
		var i = 0;
		var defaults = {
			'move' : -5,			// 蜍輔￥驥
			'duration' : 1000,	// 遘ｻ蜍輔↓縺九￠繧区凾髢
			'delay' : 0			// 荳｡遶ｯ縺ｧ蛛懈ｭ｢縺吶ｋ譎る俣
		};
		var setting = jQuery.extend( defaults, config );
		( function move() {
			i = i > 0 ? -1 : 1;
			var p = obj.position().top;
			jQuery( obj )
				.delay( setting.delay )
				.animate( { top : p + i * setting.move }, { 
					duration : setting.duration,
					complete : move
				});
		})();
	};
});