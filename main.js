//Target all code-blocks on page
var arr = document.getElementsByClassName("s-code-block");

//Add font awesome link via JS
var link = document.createElement('link');
link.rel = "stylesheet";
link.href = "https://use.fontawesome.com/releases/v5.8.1/css/all.css";
link.integrity = "sha384-50oBUHEmvpQ+1lW4y57PTFmhCaXp0ML5d60M1M7uH2+nqUivzIebhndOJK28anvf";
link.crossOrigin = "anonymous"
document.head.appendChild(link);

for (var i = 0; i < arr.length; i++) {
	//Create button variable for insertion
	var btn = document.createElement("button");
	btn.classList.add("copy_code_button");
	btn.appendChild(document.createTextNode("Copy "));

	//Create font awesome icon and insert into button
	var icon = document.createElement("i");
	icon.classList.add("far", "fa-copy");
	btn.appendChild(icon);
	arr[i].appendChild(btn);

	//Style button; position in upper right of code-block
	btn.style.position = "relative";

	if (arr[i].scrollWidth === arr[i].offsetWidth && arr[i].scrollHeight === arr[i].offsetHeight) {
		btn.style.left = `${arr[i].offsetWidth - 70}px`;
	} else if (arr[i].scrollWidth != arr[i].offsetWidth && arr[i].scrollHeight === arr[i].offsetWidth) {
		btn.style.left = `${arr[i].offsetWidth - 200}px`;
	} else {
		btn.style.left = `${arr[i].offsetWidth - 150}px`
	}

	if (arr[i].scrollHeight === arr[i].offsetHeight) {
		btn.style.bottom = `${arr[i].offsetHeight - 50}px`
	} else {
		btn.style.bottom = `${arr[i].scrollHeight - 50}px`
	}
}

//Target all created buttons
var button = document.querySelectorAll(".copy_code_button");
//Copy functionality
button.forEach((elem) => {
	elem.addEventListener('click', (e) => {
		navigator.clipboard.writeText(elem.parentNode.childNodes[0].innerText);
		console.log("Copied to Clipboard");
	})
})
