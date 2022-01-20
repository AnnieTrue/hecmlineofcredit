var menu_bars = document.getElementById("menu_bars")
var mobile_menu = document.getElementById("mobile_menu")

menu_bars.addEventListener('click', function(event){openCloseMenu()})

function openCloseMenu(){
	console.log(menu_bars.src)
	if(menu_bars.src.indexOf("menu.svg")>-1){
		menu_bars.src = "assets/x.svg"
		mobile_menu.style.display = "flex"
	}else{
		menu_bars.src = "assets/menu.svg"
		mobile_menu.style.display = "none"
	}
}