//Text changes by clicking it and sale code appears
    function textChanged() {
    var x = document.getElementById("whiteDIV");
    if (x.style.display === "none") {
        x.style.display = "block";
    } 
    // else {
    //     x.style.display = "none";
    // }
    }
    function changeText(id) {
    id.innerHTML = "Use code 1234 to get 20% off your first purchase!";
    }


//inputs for registration NEEDS TO BE LOGICAL
    function nameInput(x) {
    x.style.background = "pink";
    }
    function emailInput(y) {
    y.style.background = "pink";
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


// pop-up form for registration
    

    function openForm() {
    document.getElementById("myForm").style.display = "block";
    }
    function closeForm() {
    document.getElementById("myForm").style.display = "none";
    }
    

// Learn more and learn less butttons to get more information
    function learnMore() {
        var dots = document.getElementById("dots");
        var moreText = document.getElementById("more");
        var btnText = document.getElementById("myButton");
      
        if (dots.style.display === "none") {
          dots.style.display = "inline";
          btnText.innerHTML = "Learn more"; 
          moreText.style.display = "none";
        } else {
          dots.style.display = "none";
          btnText.innerHTML = "Learn less"; 
          moreText.style.display = "inline";
        }
      }

