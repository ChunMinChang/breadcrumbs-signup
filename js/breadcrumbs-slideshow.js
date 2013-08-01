
/*
 * slideshow jquery example
 *
 * This file contains serveral functions of jquery slideshow
 *
 * Author 	: Chun-Min Chang
 *
 * Contact	: tangent7787@gmail.com
 *
 * Copyright @ All Rights Reserved
 */

//Global variables
var menuClass;
var contentClass;
var menuNormalClass;
var menuHoverClass;
var menuActiveClass;
var currentSlide = 0;
var slideWidth = 0;
var previousSlideBtn;
var nextSlideBtn;
var nextSlideBtnTxt;
var agreeTxt;
var submitTxt;
var submitFunction;


function initSlide(slideMenuClass,slideContentClass,normalClass,hoverClass,activeClass,previousBtn,nextBtn,agreeBtnTxt,submitBtnTxt,submitFunc){
	
	//Class setting
	menuClass = slideMenuClass;
	contentClass = slideContentClass;
	menuNormalClass = normalClass;
	menuHoverClass = hoverClass;
	menuActiveClass= activeClass;
	previousSlideBtn = previousBtn;
	nextSlideBtn = nextBtn;
	
	//Get the original button text
	nextSlideBtnTxt = $('#'+nextSlideBtn).html();
	agreeTxt = agreeBtnTxt;
	submitTxt = submitBtnTxt;
	
	//Get the function name
	submitFunction = submitFunc;//This function will be triggered when the submit button is pressed
	
	//Initualize slide content width
	slideWidth = $('.'+contentClass).width();
	
	//Open default slide content
	$('.'+contentClass).eq(0).css("display", "block");
	
	//Add the active class to the default choice
	$('li.'+menuClass).eq(0).removeClass(menuNormalClass);
	$('li.'+menuClass).eq(0).addClass(menuActiveClass);
	
	//Set the click/hover function of slide menu
	$('.'+menuClass).click(showSlide);
	$('.'+menuClass).hover(hoverMenu,hoverMenuOut);
	
	//Set the click function of next and previous button
	$('#'+previousSlideBtn).click(showPreviousSlide);
	$('#'+nextSlideBtn).click(showNextSlide);
	
	//Close the back button at first
	$('#'+previousSlideBtn).css("visibility","hidden");
	
	//Set the agree button text
	$('#'+nextSlideBtn).html(agreeTxt);
}

function hoverMenu()
{
	if( currentSlide==$('li.'+menuClass).index(this) ){
		//Do nothing
		return;
	}
	
	//Remove the normal class from the current hover
	$(this).removeClass(menuNormalClass);
	
	//Add the hover class to the current hover
	$(this).addClass(menuHoverClass);
}

function hoverMenuOut()
{
	//Remove the hover class from the current hover
	$(this).removeClass(menuHoverClass);
	
	//Add the normal class to the current hover
	$(this).addClass(menuNormalClass);
}

function showSlide()
{
	
	if( currentSlide==$(this).index() ){
		//Do nothing
		return;
	}else if( currentSlide<$(this).index() ){
		//Scroll from left to right
		scrollSlide(currentSlide,$(this).index(),"+");
	}else{
		//Scroll from right to left
		scrollSlide(currentSlide,$(this).index(),"-");
	}
	
	//Add the normal class to the previous choice
	$('li.'+menuClass).eq(currentSlide).addClass(menuNormalClass);
	
	//Remove active class from the previous choice
	$('li.'+menuClass).eq(currentSlide).removeClass(menuActiveClass);
	
	//Update current slide
	currentSlide = $(this).index();
	
	//Remove the normal class from the current choice
	$('li.'+menuClass).eq(currentSlide).removeClass(menuNormalClass);
	
	//Add the active class to the current choice
	$('li.'+menuClass).eq(currentSlide).addClass(menuActiveClass);
}


function scrollSlide(currentSlide,nextSlide,dir){
	
	
	//Close previous button at first and next button at last
	if( nextSlide == 0 ){
		$('#'+nextSlideBtn).html(agreeTxt);
		$('#'+previousSlideBtn).css("visibility","hidden");
	}else if( $('#'+previousSlideBtn).css("visibility")=="hidden" ){
		$('#'+previousSlideBtn).css("visibility","visible");
	}else if( nextSlide == $('li.'+menuClass).length-1 ){
		$('#'+nextSlideBtn).html(submitTxt);
		$('#'+nextSlideBtn).unbind("click").click(window[submitFunction]);
	}else if( (nextSlide !=0 )&&($('#'+nextSlideBtn).html()!=nextSlideBtnTxt) ){
		$('#'+nextSlideBtn).html(nextSlideBtnTxt);
		$('#'+nextSlideBtn).unbind("click").click(showNextSlide);
	}
	
	
	//Open this div
	switch(dir){
		case '+':
			$('.'+contentClass).eq(nextSlide).css("left", -slideWidth);
			break;
		case '-':
			$('.'+contentClass).eq(nextSlide).css("left", slideWidth);
			break;
		default:
			return;
	}
	
	$('.'+contentClass).eq(nextSlide).css("display", "block");
	
	//Animation
	var aniArgs = {};
	aniArgs["left"] = dir+"="+slideWidth+"px"; 
	
	$('.'+contentClass).eq(currentSlide).animate(aniArgs, 1000);
	$('.'+contentClass).eq(nextSlide).animate(aniArgs, 1000);
	
	//Close the previous div
	$('.'+contentClass).eq(currentSlide).css("left", 0);
	$('.'+contentClass).eq(currentSlide).css("display", "none");

}


function showNextSlide(){
	
	//Scroll from left to right
	scrollSlide(currentSlide,currentSlide+1,"+");
	
	//Add the normal class to the previous choice
	$('li.'+menuClass).eq(currentSlide).addClass(menuNormalClass);
	
	//Remove active class from the previous choice
	$('li.'+menuClass).eq(currentSlide).removeClass(menuActiveClass);
	
	//Update current slide
	currentSlide = currentSlide + 1;
	
	//Remove the normal class from the current choice
	$('li.'+menuClass).eq(currentSlide).removeClass(menuNormalClass);
	
	//Add the active class to the current choice
	$('li.'+menuClass).eq(currentSlide).addClass(menuActiveClass);
	
}

function showPreviousSlide(){
	
	//Scroll from right to left
	scrollSlide(currentSlide,currentSlide-1,"-");
	
	//Add the normal class to the previous choice
	$('li.'+menuClass).eq(currentSlide).addClass(menuNormalClass);
	
	//Remove active class from the previous choice
	$('li.'+menuClass).eq(currentSlide).removeClass(menuActiveClass);
	
	//Update current slide
	currentSlide = currentSlide - 1;
	
	//Remove the normal class from the current choice
	$('li.'+menuClass).eq(currentSlide).removeClass(menuNormalClass);
	
	//Add the active class to the current choice
	$('li.'+menuClass).eq(currentSlide).addClass(menuActiveClass);

}