// Read necessary elements from the DOM once
var box = document.querySelector('.simbox');
var navbox = document.querySelector('#navbar');
var next = box.querySelector('.next');
var prev = box.querySelector('.prev');

// Define the global imgidx, the items and the 
// current item 
var imgidx = 0;
var imgsall = box.querySelectorAll('.content li');
var imgslength = imgsall.length;
var currentPos = imgsall[0];

box.classList.add('active');

const navigate = (navidx) => {
	// hide the old current list items: removes the 'current' class 
    currentPos.classList.remove('current');
    $(".controls").hide();
	
    // calculate the new position
	//imgidx = navidx;
	if (navidx == -1) {
		/*
		imgidx = (imgidx - navidx); 
		imgidx = imgidx < 0 ? imgslength - 1 : imgidx;
		*/
		imgidx = (imgidx >= imgslength-1) ? 0: imgidx - navidx;
	} else {
		imgidx = navidx;
	}

	
	switch (imgidx) {
		case 0:
			$(".nav").find(".active").removeClass("active");
			$(".n1").addClass("active"); 
			break;
		case 5: 
			$(".nav").find(".active").removeClass("active");
			$(".n2").addClass("active"); 
			break;
		case 10: 
			$(".nav").find(".active").removeClass("active");
			$(".n3").addClass("active"); 
			break;
		case 14: 
			$(".nav").find(".active").removeClass("active");
			$(".n4").addClass("active"); 
			break;
		case 15: 
			$(".controls").show();
		case 17: 
			$(".nav").find(".active").removeClass("active");
			$(".n5").addClass("active"); 
			break;
		default:
	}
    // set new current element 
    // and add CSS class
    currentPos = imgsall[imgidx];
    currentPos.classList.add('current');
}

var main = function() {
	$(".controls").hide();
	navigate(0);
	
}

$(document).ready(main);
