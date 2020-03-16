let vert = document.querySelector(".vertical");
let verty = document.querySelector(".button-vertical");
verty.addEventListener('click',function(){
	if (vert.style.filter == "brightness(1)") {
     	vert.style.filter = "brightness(0)";
	} else {
		vert.style.filter = "brightness(1)";
	}
});

let hori = document.querySelector(".horizontal");
let horiy = document.querySelector(".button-horizontal");
horiy.addEventListener('click',function(){
	if (hori.style.filter == "brightness(1)") {
     	hori.style.filter = "brightness(0)";
	} else {
		hori.style.filter = "brightness(1)";
	}
});

let arrowleft = document.querySelector(".arrow-left");
let arrowright = document.querySelector(".arrow-right");
let h1 = document.querySelector(".shadow-vertical");
let h2 = document.querySelector(".shadow-horizontal");
let h3 = document.querySelector(".mainn");
arrowleft.addEventListener('click',function(){
	if (h3.style.backgroundColor == "rgb(240, 108, 100)") {
		h1.style.left = "400px";
		h2.style.opacity = "0";
     	h3.style.backgroundColor = "rgb(100, 174, 240)";
	} else {
		h3.style.backgroundColor = "rgb(240, 108, 100)";
		h2.style.opacity = "1";
		h1.style.left = "112px";
	}
});
arrowright.addEventListener('click',function(){
	if (h3.style.backgroundColor == "rgb(240, 108, 100)") {
		h1.style.left = "400px";
		h2.style.opacity = "0";
     	h3.style.backgroundColor = "rgb(100, 174, 240)";
	} else {
		h3.style.backgroundColor = "rgb(240, 108, 100)";
		h2.style.opacity = "1";
		h1.style.left = "112px";
	}
});

let arr = document.querySelector(".picture2");
for (var i = 0; i < arr.length; i++) {
	arr[i].addEventListener('click', current);
}
function current(){
	if (document.querySelector(".picture23") == null) {
		this.className = "picture2 picture23";
	} else {
		let current = document.querySelector(".picture23");
		current.className = "picture2";
		this.className = "picture2 picture23";
	}
}
