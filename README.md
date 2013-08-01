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

- Call the function 'initSlide' at first when loading html file

``` 

//Initualize the web view and setting
$(document).ready(function(){
				
	//Initualize Breadcrumbs-slideshow setting
	initSlide('slide-menu-class','slideshow-content-class','breadcrumbs-menu-class','breadcrumbs-menu-class-hover','breadcrumbs-menu-class-active','bottunLeftId','bottunRightId','bottunRight_first_slide_value','bottunRight_last_slide_value','functionName');
				
});

``` 