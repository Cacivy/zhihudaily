export default btnId => {
	var btn = document.getElementById(btnId);
	var d = document.documentElement;
	var b = document.body;
	window.addEventListener('scroll',btnDisplay)
	btn.onclick = function (){
		btn.style.display = "none";
		//window.onscroll = null;
		this.timer = setInterval(function(){
			d.scrollTop -= Math.ceil((d.scrollTop+b.scrollTop)*0.2);
			b.scrollTop -= Math.ceil((d.scrollTop+b.scrollTop)*0.2);
			if((d.scrollTop + b.scrollTop) == 0)
				clearInterval(btn.timer);//window.onscroll = btnDisplay
		},10);
	};
	function btnDisplay(){
		btn.style.display=(d.scrollTop+b.scrollTop>200)?'block':"none";
	}
};