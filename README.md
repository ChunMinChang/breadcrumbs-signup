# breadcrumbs-signup

Sample code of breadcrumbs navigation for sign-up procedure

## Introduction

This ..



## How to Use

To better understand how to use, please see following explain with the breadcrumbs-signup.html

- Use ```<ul>``` and ```<li>``` tag as your slide menu list

- In ```<li>``` tag, insert your slide-menu-class and breadcrumbs-menu-class

  ``` <li class="slide-menu-class breadcrumbs-menu-class"><a>Privacy</a></li> ```

  (In sample code, slide-menu-class = 'slideshow-menu' and breadcrumbs-menu-class = 'breadcrumbs-li')

- In ```html <div id="slideshow-container">```, insert slide contents div with your own slideshow-content-class. 

``` 
<div id="slideshow-container">

	<div class="slideshow-content-class"> 
	</div> 
	<div class="slideshow-content-class"> 
	</div> 
	.
	.
	.
	
</div>
```

    (In sample code, your-slideshow-content-here = 'slideshow-content')

- Button Setting
    Set two buttons with two diffrerent ids

``` 
<button id="bottunLeftId" class="slideshow-button">Back</button>
<button id="bottunRightId" class="slideshow-button">Next</button>
```

- Write your own function triggered when user finish this procedure

```
function signUp(){
				
	console.log("Yo!! name : " + $("#name").val()
		+ ", email : " + $("#email").val()
		+ ", gender : " + $("input[name='gender']:checked").val()
	);

}
```

- Call the function 'initSlide' when browser is loading html file

``` 

//Initualize the web view and setting
$(document).ready(function(){
				
	//Initualize Breadcrumbs-slideshow setting
	initSlide('slide-menu-class','slideshow-content-class','breadcrumbs-menu-class','breadcrumbs-menu-class-hover','breadcrumbs-menu-class-active','bottunLeftId','bottunRightId','bottunRight_first_slide_value','bottunRight_last_slide_value','functionName');
				
});

``` 

1. ***slide-menu-class*** : class name of slide manu
2. ***slideshow-content-class*** : class name of slide content
3. ***breadcrumbs-menu-class*** : class name of breadcrumbs menu
4. ***breadcrumbs-menu-class-hover*** : name of the breadcrumbs menu class when mouser hover the breadcrumbs menu
5. ***breadcrumbs-menu-class-active*** : name of the breadcrumbs menu class after mouser clicked the breadcrumbs menu
6. ***bottunLeftId*** : left button's id
7. ***bottunRightId*** : right button's id
8. ***bottunRight_first_slide_value*** : the text value of right button shown at the first slide
9. ***bottunRight_last_slide_value*** : the text value of right button shown at the last slide
10. ***functionName*** : name of the function which is triggered when user finish this procedure



