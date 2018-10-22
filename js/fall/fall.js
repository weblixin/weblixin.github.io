// $(function(){
window.onload=function(){


	var pic = $('.pic');
	var defaultPic = 'img/site/default.png';


	$.each(clsInfo,function(i,v){
		i=i%4;
		var n=Math.ceil(i/4);
		var S = $(document).scrollTop();
		var d = document.createElement('div');
		var img = document.createElement("img");
		var t = 1;
		d.className='tml';
		img.src = v.Url;
		img.alt = v.txt;
		d.append(img);
		
		// switch (i){
			// case 0:
				// setTimeout(function(){
					// pic.eq(0).prepend(d);
				// }, t*200);
				// break;
			// case 1:
				// setTimeout(function(){
					// pic.eq(1).prepend(d);
				// }, t*200);
				// break;
			// case 2:
				// setTimeout(function(){
					// pic.eq(2).prepend(d);
				// }, t*200);
				// break;
			// case 3:
				// setTimeout(function(){
					// pic.eq(3).prepend(d);
				// }, t*200);
				// break;
		// }

		pic.eq(i).append(d);

		var timeOut = setTimeout(function(){
			$(d).css({
				'opacity': 1,
				'-webkit-transform': 'translateY(0px)',
				'transform': 'translateY(0px)'
			});
		}, t*700);

		t++;
	});
	

	/*图片加载失败时*/
	$('.pic,.scale').find('img').error(function() {
		$(this).attr('src',defaultPic);
	});

	/*点击小图出现大图*/
	$('.pic').delegate('img', 'click', function() {
		var src = $(this).attr('src');
		var txt = $(this).attr('alt');
		var h = $(this).height();
		var w = $(this).width();
		var H = 500*h/w;
		$('body').addClass('ov');
		$('.scale').fadeIn();
		$('.scale').find('div').css('height',H+50+'px');
		$('.scale').find('img').attr('src',src);
		$('.scale').find('span').text(txt);
	});

	$('.scale').click(function(){
		$('body').removeClass('ov')
		$(this).fadeOut();
	})

// })
}