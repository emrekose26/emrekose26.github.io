$(function(){

	//fakeloader
	$(".fakeloader").fakeLoader({
		bgColor:"#fff",
		imagePath:'http://www.iranyellowpages.ir/images/UpdateGif/gear.gif'
	});

	//menu hover properties
	$('.profile').hover(function(){
		$('.profile img').attr('src','app/img/profile.gif');
	},function(){
		$('.profile img').attr('src','app/img/profile.png');
	});
	$('.resume').hover(function(){
		$('.resume img').attr('src','app/img/resume.gif');
	},function(){
		$('.resume img').attr('src','app/img/resume.png');
	});

	$('.portfolio').hover(function(){
		$('.portfolio img').attr('src','app/img/portfolio.gif');
	},function(){
		$('.portfolio img').attr('src','app/img/portfolio.png');
	});

	$('.blog').hover(function(){
		$('.blog img').attr('src','app/img/blog.gif');
	},function(){
		$('.blog img').attr('src','app/img/blog.png');
	});

	$('.contact').hover(function(){
		$('.contact img').attr('src','app/img/contact.gif');
	},function(){
		$('.contact img').attr('src','app/img/contact.png');
	});
});