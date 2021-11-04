var arr = document.getElementsByClassName("s-code-block");

for (var i = 0; i < arr.length; i++) {
	//Create button variable for insertion
	var btn = document.createElement("button");
	btn.classList.add("copy_code_button");
	btn.appendChild(document.createTextNode("Copy"));
	arr[i].appendChild(btn);

	//Style button
	btn.style.position = "relative";

}

// console.log("The test extensions is up and running");

// var images = document.getElementsByTagName('img');

// for (elt of images) {
// 	if (typeof browser === "undefined") {
// 		var browser = chrome;
// 	}
// 	elt.src = `${browser.runtime.getURL("pp.jpg")}`
// 	elt.alt = 'an alt text';
// }