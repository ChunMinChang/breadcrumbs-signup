/*
 *
 * Author 	: Chun-Min Chang
 *
 * Contact	: tangent7787@gmail.com
 *
 * Copyright @ All Rights Reserved
 */


breadcrumbs-signup
==================

Sample code of breadcrumbs navigation for sign-up procedure

This ....


*  How to Use?

1) Call the function 'initSlide' at first

function initSlide(slideMenuClass,slideContentClass,normalClass,hoverClass,activeClass,previousBtn,nextBtn,agreeBtnTxt,submitBtnTxt,submitFunc)

initSlide('slideshow-menu','slideshow-content','breadcrumbs-li','breadcrumbs-li-hover','breadcrumbs-li-active','bottunBack','bottunNext','Agree','Sign Up','signUp');

2) Use <ul> and <li> tag as your slide menu list

3) In <li> tag, insert your slide-menu-class and breadcrumbs-menu-class
Ex:
<li class="slide-menu-class breadcrumbs-menu-class"><a>Privacy</a></li>
(In sample code, slide-menu-class = 'slideshow-menu' and breadcrumbs-menu-class = 'breadcrumbs-li')

4) In <div id="slideshow-container">, you can design your own slide content. 
Ex:
<div class="your-slideshow-content-here">
(In sample code, your-slideshow-content-here = 'slideshow-content')

5) 
<button id="bottunBack" class="slideshow-button">Back</button>
<button id="bottunNext" class="slideshow-button">Next</button>


