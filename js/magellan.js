/*===================================================
	Title: magellan.js
	Authors: Tiffany
	Description: Describes how to maneuver the site
	Last modified: 7/9/2018
=====================================================*/

// For navigation to next screenshot
// Read necessary elements from the DOM once
 var box = document.querySelector('.simbox');
/*
 var next = box.querySelector('.next');
var prev = box.querySelector('.prev'); */

// Define the global imgidx, the items and the 
// current item 
var imgidx = 0;
var imgsall = box.querySelectorAll('.content li');
var imgslength = imgsall.length;
var currentPos = imgsall[0];

box.classList.add('active');

// For congrats magnifier
var native_width = 0;
var native_height = 0;

const navigate = (navidx) => {

	// ====== MOVE TO NEXT SCREENSHOT ====================
	// hide the old current list items: removes the 'current' class 
    currentPos.classList.remove('current');
    $(".controls").hide();
	
    // calculate the new position
	//imgidx = navidx;
	if (navidx == -1) {
		imgidx = (imgidx >= imgslength-1) ? 0: imgidx - navidx;
	} else {
		imgidx = navidx;
	}

	// ====== HIGHLIGHT RELEVANT NAVBAR ICON ====================
	// depending on what image is currently active, set which value on the left menu is active
	switch (imgidx) {
		case 0:
			$(".nav").find(".active").removeClass("active");
			$(".n1").addClass("active"); 
			break;
		case 5: 
			$(".nav").find(".active").removeClass("active");
			$(".n2").addClass("active"); 
			break;
		case 6: 
			$(".nav").find(".active").removeClass("active");
			$(".n3").addClass("active"); 
			break;
		case 7: 
			$(".nav").find(".active").removeClass("active");
			$(".n4").addClass("active"); 
			break;
		case 13: 
			$(".nav").find(".active").removeClass("active");
			$(".n5").addClass("active"); 
			$(".n7").addClass("active"); 
			break;
		case 14:
			$(".nav").find(".active").removeClass("active");
			$(".n7").addClass("active"); 
			break;
		case 15: 
			$(".nav").find(".active").removeClass("active");
			$(".n9").addClass("active"); 
			break;
		case 17:
			$(".controls").show(); //Show controls graphic
			$(".controls a").show();
			$(".nav").find(".active").removeClass("active");
			$(".n10").addClass("active"); 
			break;
		case 21: 
			$(".nav").find(".active").removeClass("active");
			$(".n11").addClass("active"); 
			break;
		case 25:
			$(".controls").show(); //Show controls graphic
			$(".controls a").show();
		case 27: 
			$(".nav").find(".active").removeClass("active");
			$(".n12").addClass("active"); 
			break;
		case 31: 
			$(".nav").find(".active").removeClass("active");
			$(".n13").addClass("active"); 
			break;
		// ====== CONGRATS MAGNIFIER  ====================
		case 35:
			//Now the mousemove function
			$(".magnify").mousemove(function(e){
				//When the user hovers on the image, the script will first calculate
				//the native dimensions if they don't exist. Only after the native dimensions
				//are available, the script will show the zoomed version.
				if(!native_width && !native_height)
				{
					//This will create a new image object with the same image as that in .small
					//We cannot directly get the dimensions from .small because of the 
					//width specified to 200px in the html. To get the actual dimensions we have
					//created this image object.
					var image_object = new Image();
					image_object.src = $(".small").attr("src");
					
					//This code is wrapped in the .load function which is important.
					//width and height of the object would return 0 if accessed before 
					//the image gets loaded.
					native_width = image_object.width;
					native_height = image_object.height;
				}
				else
				{
					//x/y coordinates of the mouse
					//This is the position of .magnify with respect to the document.
					var magnify_offset = $(this).offset();
					//We will deduct the positions of .magnify from the mouse positions with
					//respect to the document to get the mouse positions with respect to the 
					//container(.magnify)
					var mx = e.pageX - magnify_offset.left;
					var my = e.pageY - magnify_offset.top;
					
					//Finally the code to fade out the glass if the mouse is outside the container
					if(mx < $(this).width() && my < $(this).height() && mx > 0 && my > 0)
					{
						$(".large").fadeIn(100);
					}
					else
					{
						$(".large").fadeOut(100);
					}
					if($(".large").is(":visible"))
					{
						//The background position of .large will be changed according to the position
						//of the mouse over the .small image. So we will get the ratio of the pixel
						//under the mouse pointer with respect to the image and use that to position the 
						//large image inside the magnifying glass
						var rx = Math.round(mx/$(".small").width()*native_width - $(".large").width()/2)*-1;
						var ry = Math.round(my/$(".small").height()*native_height - $(".large").height()/2)*-1;
						var bgp = rx + "px " + ry + "px";
						
						//Time to move the magnifying glass with the mouse
						var px = mx - $(".large").width()/2;
						var py = my - $(".large").height()/2;
						//Now the glass moves with the mouse
						//The logic is to deduct half of the glass's width and height from the 
						//mouse coordinates to place it with its center at the mouse coordinates
						
						//If you hover on the image now, you should see the magnifying glass in action
						$(".large").css({left: px, top: py, backgroundPosition: bgp});
					}
				}
			})
			break;
		default:
	}
    // set new current element 
    // and add CSS class
    currentPos = imgsall[imgidx];
    currentPos.classList.add('current');
}

// ====== TEST YOURSELF TOGGLE ====================
const toggletest = () => {
	// check if active
	if($(".toggletest").hasClass("toggleactive")){ 
		$(".toggletest").removeClass("toggleactive");
		$("a").removeClass('no-hover');
	} else {
		$(".toggletest").addClass("toggleactive");
		$("a").addClass("no-hover");
	};
}

var main = function() {
	$(".controls").hide();
	
	navigate(0);
	
}

$(document).ready(main);