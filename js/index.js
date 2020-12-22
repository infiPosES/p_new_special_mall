$(document).ready(function() {
	//item
	/*function tourItems(a,b,c,d) {
	this.a = a;
	this.b = b;
	this.c = c;
	this.d = d;
	this.e = function() {
	  //실행역할
	}
	}
	var item;
	var objBank = [];
	for(var i=0; i<item.length; i++) {
	objBank[i] = new tourItems(a[i],b[i],c[i],d[i]);
	}
	for(var i=0; i<item.length; i++) {
	objBank[i].e();
	}*/

	//===================== click =======================
	//popup
	$('.popup_close').click(function() {
		$('.popup').css('display','none');
	});

	/*
	//모바일 메뉴
	var burger = $('.menu-trigger');
	burger.each(function(index){
		var $this = $(this);
		$this.on('click', function(e){
			e.preventDefault();
			$(this).toggleClass('active-1');
			$('.m_gnb_menu').toggleClass('active');
			$('.m_languageBtn').toggleClass('active');
			$('.m_gnb').toggleClass('m_active');
			$('.m_home').toggleClass('m_active');
			$('.section').toggleClass('m_active');
		})
	});
	$('.wrap.m_active').click(function(){
	  $('.m_gnb_menu').toggleClass('active');
	  $('.m_languageBtn').toggleClass('active');
	  $('.m_gnb').toggleClass('m_active');
	  $('.m_home').toggleClass('m_active');
	  $('.section').toggleClass('m_active');
	});

	//mobile icon
	$('.icon').click(function(){
		$('.gnb').addClass('on');
	});
	$('.closeBtn').click(function(){
		$('.gnb').removeClass('on');
	});
	*/

	$('.bttBtn').click(function (e) {
		e.preventDefault();
		$('html, body').animate({scrollTop: 0}, 500);
	  });
	//================= scroll event ================
	let docHeight = document.body.offsetHeight;
	let onclassPos = docHeight / 3;
	let scrollPos;
	$(window).scroll(function() {
		scrollPos = $(document).scrollTop();
		scrollPos > onclassPos ? $('.bttBtn').fadeIn() : $('.bttBtn').fadeOut();
	});
	//================== 플러그인 ==================
	//$('.datepicker').datepicker();
	
	//아이디 찾기, 비밀번호 찾기
	$('.login-rad-input').click(function(e) {
		switch (e.target.id)
		{
			case "find_per_id01": 
				location.href = "./login_find_id_per.html";break;			
			case "find_per_id02": 
				location.href = "./login_find_id_fra.html";break;
			case "find_per_pw01": 
				location.href = "./login_find_pw_per.html";break;			
			case "find_per_pw02": 
				location.href = "./login_find_pw_fra.html";break;
		}
  });
  
  //
  $('.imgB-thumb-img').click(function(){
    let imgSrc = $(this).attr('src');
    $('.imgB-img-main').attr('src', imgSrc);
  });
});