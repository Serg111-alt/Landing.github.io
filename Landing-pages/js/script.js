
$(document).ready(function(){
	var offset = 200; // РєРѕРѕСЂРґРёРЅР°С‚Р° СЃРґРІРёРіР° РїРѕ РѕСЃРё Y
	var duration = 300; //РІСЂРµРјСЏ РІС‹РїРѕР»РЅРµРЅРёСЏ
	$('#totop').fadeOut(0);	

 /* Р”РѕР±Р°РІРёС‚СЊ РїР»Р°РІРЅС‹Р№ СЃРєСЂРѕР»Р»РёРЅРі РєРѕ РІСЃРµРј СЏРєРѕСЂРЅС‹Рј СЃСЃС‹Р»РєР°Рј*/
  $("a[href^='#']").on('click', function(event) {
    //this.hash - Р°С‚СЂРёР±СѓС‚ 'href' СЃСЃС‹Р»РєРё
	if (this.hash !== "") {//РїСЂРѕРІРµСЂСЏРµРј, РЅРµ РїСѓСЃС‚РѕРµ Р»Рё РїРѕР»Рµ 'href'	   
		
		var hash = this.hash;//СЃРѕС…СЂР°РЅСЏРµРј Р°С‚СЂРёР±СѓС‚
		
		// РСЃРїРѕР»СЊР·СѓРµРј РјРµС‚РѕРґ jQuery animate(), С‡С‚РѕР±С‹ РґРѕР±Р°РІРёС‚СЊ РїР»Р°РІРЅС‹Р№ СЃРєСЂРѕР»Р»РёРЅРі
		$('html, body').animate({
		  scrollTop: $(hash).offset().top // СѓСЃС‚Р°РЅР°РІР»РёРІР°РµРј РЅРѕРІРѕРµ РїРѕР»РѕР¶РµРЅРёРµ РґРѕРєСѓРјРµРЅС‚Р° РїРѕ СЏРєРѕСЂСЋ
		}, 900, function(){ //900-С‡РёСЃР»Рѕ РјРёР»РёСЃРёРєСѓРЅРґ - РІСЂРµРјСЏ Р°РЅРёРјР°С†РёРё
		
		window.location.hash = hash; //РґРѕР±Р°РІР»СЏРµРј РЅСѓР¶РЅСѓСЋ Р»РѕРєР°С†РёСЋ Рє РѕРєРЅСѓ Р±СЂР°СѓР·РµСЂР°
	  });
	}
  });
  $(window).scroll(function() { // РµСЃР»Рё РїСЂРѕРёСЃС…РѕРґРёС‚ СЃРєСЂРѕР»Р»РёРЅРі
	  $(".slideanim").each(function(){ // РґР»СЏ РєР°Р¶РґРѕРіРѕ Р±Р»РѕРєР° СЃ РєР»Р°СЃСЃРѕРј slideanim
		var pos = $(this).offset().top; // СЃС‡РёС‚С‹РІР°РµРј РµРіРѕ РєРѕРѕСЂРґРёРЅР°С‚Сѓ РїРѕ РѕСЃРё Y РІ РѕРєРЅРµ Р±СЂР°СѓР·РµСЂР°

		var winTop = $(window).scrollTop(); // С‚РµРєСѓС‰СѓСЋ РІРµСЂС…РЅСЋСЋ РєРѕРѕСЂРґРёРЅР°С‚Сѓ РѕРєРЅР° Р±СЂР°СѓР·РµСЂР° (РІРµСЂС… СЃС‚СЂР°РЅРёС†С‹)

		if (pos < winTop + 500) { //РµСЃР»Рё РґРѕ РІРµСЂС…Р° СЃС‚СЂР°РЅРёС†С‹ РѕСЃС‚Р°РµС‚СЃСЏ 500px, 
		  $(this).addClass("slide"); //РґРѕР±Р°РІР»СЏРµРј Рє Р±Р»РѕРєСѓ РєР»Р°СЃСЃ slide СЃ Р°РЅРёРјС†РёРµР№
		}
	  });
	  
	  if ($(this).scrollTop() > offset) { 
			$('#totop').css("opacity", "0.8"); // РІРѕР·РІСЂР°С‰Р°РµРј РїСЂРѕР·СЂР°С‡РЅРѕСЃС‚СЊ 
			$('#totop').fadeIn(duration); // С„СѓРЅРєС†РёСЏ РїР»Р°РІРЅРѕ РёСЃС‡РµР·Р°РµС‚
		} else {  
			$('#totop').fadeOut(duration); // С„СѓРЅРєС†РёСЏ РїР»Р°РІРЅРѕ РїРѕСЏРІР»СЏРµС‚СЃСЏ
		}
		if ($(this).scrollTop() > offset) {
			$('#leaf').removeClass('logo');
			$('#leaf').addClass('logosmall');
		}
		else{
			$('#leaf').removeClass('logosmall');
			$('#leaf').addClass('logo');
	}
	/* РЎРєСЂРѕР»Р»РёСЂРѕРІР°С‚СЊ С„РѕРЅРѕРІС‹Рµ СЃР»РѕРё СЃ СЂР°Р·РЅРѕР№ СЃРєРѕСЂРѕСЃС‚СЊСЋ */
		var winTop = $(window).scrollTop();
		$('.jumbotron').css('background-position','center '+ -(winTop*.5)+'px');

		$('.mov_slideInRight').each(function(){// РґР»СЏ РєР°Р¶РґРѕРіРѕ Р±Р»РѕРєР° СЃ РєР»Р°СЃСЃРѕРј mov_slideInRight
		  var pos = $(this).offset().top;// СЃС‡РёС‚С‹РІР°РµРј РµРіРѕ РєРѕРѕСЂРґРёРЅР°С‚Сѓ РїРѕ РѕСЃРё Y РІ РѕРєРЅРµ Р±СЂР°СѓР·РµСЂР°
		  if (pos < winTop + 600) { //РµСЃР»Рё РґРѕ РІРµСЂС…Р° СЃС‚СЂР°РЅРёС†С‹ РѕСЃС‚Р°РµС‚СЃСЏ 600px,
			$(this).addClass('slideInRight'); //РґРѕР±Р°РІР»СЏРµРј Рє Р±Р»РѕРєСѓ РєР»Р°СЃСЃ СЃ Р°РЅРёРјС†РёРµР№ slideInRight
		  }
		});
	});

})