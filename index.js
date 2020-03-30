//Text changes by clicking it and sale code appears
    function textChanged() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    else {
        x.style.display = "none";
    }
    }
    function changeText(id) {
    id.innerHTML = "Use code 1234 to get 20% off your first purchase!";
    }


//input boy fpr registration 
//need to still add some more input elements like password

    function nameInput(x) {
    x.style.background = "pink";
    }
    function emailInput(y) {
    y.style.background = "pink";
    // var x = document.getElementById("e-mail");
    }
    function passwordInput(z) {
        z.style.background = "pink";
    }



//register button changes Text by click
    function mDown(obj) {
        obj.style.backgroundColor = "rgba(0,0,0,0.6)";
    }
    
    function mUp(obj) {
        obj.style.backgroundColor="#261300";
        obj.innerHTML="Thank You!";
    }



	//Get the button
	var mybutton = document.getElementById("myBtn");

	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		mybutton.style.display = "block";
	} else {
		mybutton.style.display = "none";
	}
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	}


    
    