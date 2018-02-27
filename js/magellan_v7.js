// Read necessary elements from the DOM once
var box = document.querySelector('.simbox');
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
    
    // calculate the new position
	//imgidx = navidx;
    imgidx = (imgidx + navidx); 
    imgidx = imgidx < 0 ? amount - 1 : imgidx;

    // set new current element 
    // and add CSS class
    currentPos = imgsall[imgidx];
    currentPos.classList.add('current');
}

var main = function() {
	navigate(0);
}

$(document).ready(main);