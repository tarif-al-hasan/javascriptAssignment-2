var i = 0; 			
var images = [];
var time = 6000;	

// Image List
images[0] = "closed.gif";
images[1] = "open.gif";


// Change Image
function changeImg(){
	document.slide.src = images[i];


	if(i < images.length - 1){

	  i++; 
	} else { 

		i = 0;
	}

	setTimeout("changeImg()", time);
}

window.onload=changeImg;