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
    x.style.background = "rgba(173, 173, 173)";
    }
    function emailInput(y) {
    y.style.background = "rgb(173, 173, 173)";
    }
    function passwordInput(z) {
        z.style.background = "rgb(173, 173, 173)";
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

// When user scrolls down 20px from the top of the page, the button apears
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
	}

// When the user clicks on the button, scroll to the top of the page
	function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
	}


// pop-up form for sign in
    function openForm() {
    document.getElementById("myForm").style.display = "block";
    }
    function closeForm() {
    document.getElementById("myForm").style.display = "none";
    }
    

//learn more button
function toggle1(x){
    var dot1 = document.getElementById("dot1");
    var more1 = document.getElementById("more1");
    var button1 = document.getElementById("Btn1");

    if(button1.innerHTML == "Learn more"){
        dot1.style.display = "none";
        more1.style.display = "block";
        x.innerHTML = "Learn less";
    }else{
        dot1.style.display = "block";
        more1.style.display = "none";
        x.innerHTML = "Learn more";
    }
}
 
function toggle2(x){
    var dot2 = document.getElementById("dot2");
    var more2 = document.getElementById("more2");
    var button2 = document.getElementById("Btn2");

    if(button2.innerHTML == "Learn more"){
        dot2.style.display = "none";
        more2.style.display = "block";
        x.innerHTML = "Learn less";
    }else{
        dot2.style.display = "block";
        more2.style.display = "none";
        x.innerHTML = "Learn more";
    }
}
 
function toggle3(x){
    var dot3 = document.getElementById("dot3");
    var more3 = document.getElementById("more3");
    var button3 = document.getElementById("Btn3");

    if(button3.innerHTML == "Learn more"){
        dot3.style.display = "none";
        more3.style.display = "block";
        x.innerHTML = "Learn less";
    }else{
        dot3.style.display = "block";
        more3.style.display = "none";
        x.innerHTML = "Learn more";
    }
}
