  
	 /*  NAVBAR */
	  
  $(document).ready(function() {

	"use strict";
	/* 
 
	1. Vars and Inits

	*/

	var header = $('.header');
	var hamburger = $('.hamburger_container');
	var menu = $('.hamburger_menu');
	var menuActive = false;
	var hamburgerClose = $('.hamburger_close');
	var fsOverlay = $('.fs_menu_overlay');

	setHeader();

	$(window).on('resize', function()
	{
		initFixProductBorder();
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initMenu();
	initTimer();
	initFavorite();
	initFixProductBorder();
	initIsotopeFiltering();
	initSlider();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if(window.innerWidth < 992)
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'top':"0"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		else
		{
			if($(window).scrollTop() > 100)
			{
				header.css({'top':"-5px"});
			}
			else
			{
				header.css({'top':"0"});
			}
		}
		if(window.innerWidth > 991 && menuActive)
		{
			closeMenu();
		}
	}

	/* 

	3. Init Menu

	*/

	function initMenu()
	{
		if(hamburger.length)
		{
			hamburger.on('click', function()
			{
				if(!menuActive)
				{
					openMenu();
				}
			});
		}

		if(fsOverlay.length)
		{
			fsOverlay.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if(hamburgerClose.length)
		{
			hamburgerClose.on('click', function()
			{
				if(menuActive)
				{
					closeMenu();
				}
			});
		}

		if($('.menu_item').length)
		{
			var items = document.getElementsByClassName('menu_item');
			var i;

			for(i = 0; i < items.length; i++)
			{
				if(items[i].classList.contains("has-children"))
				{
					items[i].onclick = function()
					{
						this.classList.toggle("active");
						var panel = this.children[1];
					    if(panel.style.maxHeight)
					    {
					    	panel.style.maxHeight = null;
					    }
					    else
					    {
					    	panel.style.maxHeight = panel.scrollHeight + "px";
					    }
					}
				}	
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		// menu.css('right', "0");
		fsOverlay.css('pointer-events', "auto");
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		fsOverlay.css('pointer-events', "none");
		menuActive = false;
	}

	

    /* 

	6. Init Fix Product Border

	*/

    function initFixProductBorder()
    {
    	if($('.product_filter').length)
    	{
			var products = $('.product_filter:visible');
    		var wdth = window.innerWidth;

    		// reset border
    		products.each(function()
    		{
    			$(this).css('border-right', 'solid 1px #e9e9e9');
    		});

    		// if window width is 991px or less

    		if(wdth < 480)
			{
				for(var i = 0; i < products.length; i++)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

    		else if(wdth < 576)
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 1; i < products.length; i+=2)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

    		else if(wdth < 768)
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 2; i < products.length; i+=3)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

    		else if(wdth < 992)
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 3; i < products.length; i+=4)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}

			//if window width is larger than 991px
			else
			{
				if(products.length < 5)
				{
					var product = $(products[products.length - 1]);
					product.css('border-right', 'none');
				}
				for(var i = 4; i < products.length; i+=5)
				{
					var product = $(products[i]);
					product.css('border-right', 'none');
				}
			}	
    	}
	}

});
	
    /* NAVBAR END*/
	

/* PRODUCT DETAIL */
$('#thumbs img').click(function(){
    $('#largeImage').attr('src',$(this).attr('src').replace('thumb','large'));
    $('#description').html($(this).attr('alt'));
});
/* PRODUCT DETAIL END */


/* PIECE */
var count = 0;
function arttir(){
	count+=1;
	document.getElementById("piece").innerHTML = count;
  
   } 

   function azalt(){
	count-=1;
	if(count<0){
		count=0;
		document.getElementById("piece").innerHTML = count;      	
	 }else{
		document.getElementById("piece").innerHTML = count;
	 }
	
  
   } 

/* PIECE END */

   



/* MY-CART */


$(document).ready(function() {
	
	/* MY-CART NEXT-BACK BUTTON */

	$('.s-next').click(function() {
		var _this = $(this).parent().next().attr("id");
		$('.nav-tabs a[href="#' +  _this + '"]').tab('show');
		$('#s-' + _this).addClass('step-active');
	});
	
	$('.s-back').click(function() {
		$('.nav-tabs a[href="#'+ $(this).parent().prev().attr("id") +'"]').tab('show');
		$('#s-'+$(this).parent().attr("id")).removeClass('step-active');
	});
	
	/* MY-CART NEXT-BACK BUTTON END */

	/*SIMILAR PRODUCT SLİDER  */
	var owl = $("#owl-demo");
	owl.owlCarousel({
	autoPlay: 3500,
	items : 4, //10 items above 1000px browser width
	itemsDesktop : [1000,4], //5 items between 1000px and 901px
	itemsDesktopSmall : [900,2], // 3 items betweem 900px and 601px
	itemsTablet: [600,2], //2 items between 600 and 0;
	itemsMobile : false, // itemsMobile disabled - inherit from itemsTablet option
	pagination:false
	});
	$(".next").click(function(){
		owl.trigger('owl.next');
	})
	$(".prev").click(function(){
		owl.trigger('owl.prev');
	})
  /*SIMILAR PRODUCT SLİDER END */
  
}); 





/* Payment */
$('form').card({
	// a selector or DOM element for the container
	// where you want the card to appear
	container: '.card-wrapper', // *required*
	// all of the other options from above
// number formatting
formatting: true,

// selectors
formSelectors: {
numberInput: 'input[name="number"]',
expiryInput: 'input[name="expiry"]',
cvcInput: 'input[name="cvc"]',
nameInput: 'input[name="name"]'
},
cardSelectors: {
cardContainer: '.jp-card-container',
card: '.jp-card',
numberDisplay: '.jp-card-number',
expiryDisplay: '.jp-card-expiry',
cvcDisplay: '.jp-card-cvc',
nameDisplay: '.jp-card-name'
},

// custom messages
messages: {
validDate: 'valid\nthru',
monthYear: 'month/year'
},

// custom placeholders
placeholders: {
number: '&bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull; &bull;&bull;&bull;&bull;',
cvc: '&bull;&bull;&bull;',
expiry: '&bull;&bull;/&bull;&bull;',
name: 'Full Name'
},

// enable input masking 
masks: {
cardNumber: false
},

// valid/invalid CSS classes
classes: {
valid: 'jp-card-valid',
invalid: 'jp-card-invalid'
},

// debug mode
debug: false

});

/* Payment end */


/* MY-CART END */

	 

	


  
