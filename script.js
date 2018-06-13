var searchBtn = document.querySelector("#searchBtn");
var search_input = document.querySelector("#search_input");
var searchValue = "";
searchBtn.setAttribute("href", "https://www.google.com");
search_input.onchange = function () {
	searchValue = search_input.value;
	searchBtn.setAttribute("href","https://www.google.com/search?q=" + searchValue)
}


