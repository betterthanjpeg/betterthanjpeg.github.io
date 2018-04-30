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
		case 2: 
			$(".nav").find(".active").removeClass("active");
			$(".n2").addClass("active"); 
			break;
		case 4: 
			$(".nav").find(".active").removeClass("active");
			$(".n3").addClass("active"); 
			break;
		case 5: 
			$(".nav").find(".active").removeClass("active");
			$(".n4").addClass("active"); 
			break;
		case 11: 
			$(".nav").find(".active").removeClass("active");
			$(".n7").addClass("active"); 
			break;
		case 13: 
			$(".nav").find(".active").removeClass("active");
			$(".n9").addClass("active"); 
			break;
		case 15:
			$(".controls").show();
			$(".controls a").show();
			$(".nav").find(".active").removeClass("active");
			$(".n10").addClass("active"); 
			break;
		case 19: 
			$(".nav").find(".active").removeClass("active");
			$(".n11").addClass("active"); 
			break;
		case 21:
			$(".controls").show();
			$(".controls a").show();
		case 25: 
			$(".nav").find(".active").removeClass("active");
			$(".n12").addClass("active"); 
			break;
		case 26: 
			$(".nav").find(".active").removeClass("active");
			$(".n13").addClass("active"); 
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
=======
// Balloon //
/*

var Balloon = function() {
    this.mass = 1;
    this.height = 100;
    this.width = 70;
    this.position = new PVector(width/2, height-this.height/2-10);
    this.velocity = new PVector(0, 0);
    this.acceleration = new PVector(0, 0);
};
  
Balloon.prototype.applyForce = function(force) {
    var f = PVector.div(force, this.mass);
    this.acceleration.add(f);
};
  
Balloon.prototype.update = function() {
    this.velocity.add(this.acceleration);
    this.position.add(this.velocity);
    this.acceleration.mult(0);
};

Balloon.prototype.display = function() {
    stroke(0);
    strokeWeight(2);
    fill(255, 0, 0);
    line(this.position.x, this.position.y, this.position.x, this.position.y + this.height*2);
    ellipse(this.position.x, this.position.y, this.width, this.height);
};

Balloon.prototype.checkEdges = function() {
    if (this.position.y < this.height/2)
    {
        this.velocity.y *= -1;
    }
};


var m = new Balloon(); 

var draw = function() {
    background(224, 224, 224);
    
    var balloon = new PVector(0, -0.01);
    m.applyForce(balloon);

    m.update();
    m.display();
    m.checkEdges();
};

*/


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
		case 4: 
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
			$(".n7").addClass("active"); 
			break;
		case 15: 
			$(".nav").find(".active").removeClass("active");
			$(".n9").addClass("active"); 
			break;
		case 17:
			$(".controls").show();
			$(".controls a").show();
			$(".nav").find(".active").removeClass("active");
			$(".n10").addClass("active"); 
			break;
		case 21: 
			$(".nav").find(".active").removeClass("active");
			$(".n11").addClass("active"); 
			break;
		case 25:
			$(".controls").show();
			$(".controls a").show();
		case 27: 
			$(".nav").find(".active").removeClass("active");
			$(".n12").addClass("active"); 
			break;
		case 31: 
			$(".nav").find(".active").removeClass("active");
			$(".n13").addClass("active"); 
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