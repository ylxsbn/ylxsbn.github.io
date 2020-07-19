function delEx() {
document.getElementById("Extrude").style.display = "none";	
}


function ExtrudeA(){	
document.getElementById("Extrude").style.opacity = "1";	
	}

function ExtrudeB(){
document.getElementById("Extrude").style.opacity = "0";
document.getElementById("Extrude").style.filter = "blur(4px)";
setTimeout(delEx, 3000);
}

function bckBtn() {
  document.getElementById("Sidebar").style.width = "0px";
  document.getElementById("opBtn").style.marginLeft = "0vh";
  document.getElementById("opBtn").style.filter = "blur(0px)";
  document.getElementById("opBtn").style.filter = "blur";
  document.getElementById("opBtn").style.opacity = "1";
  document.getElementById("clBtn").style.marginLeft = "0vh";
  document.getElementById("clBtn").style.opacity = "0";	  
}

function delBtn() {
document.getElementById("opBtn").style.display = 'none';		
}


function openNav() {
  document.getElementById("Sidebar").style.width = "37vh";
  document.getElementById("opBtn").style.opacity = "0";
  document.getElementById("opBtn").style.filter = "blur(20px)";
  document.getElementById("list").style.opacity = "1";
  document.getElementById("opBtn").style.marginLeft = "30vh";
  document.getElementById("clBtn").style.marginLeft = "37vh";
  document.getElementById("clBtn").style.opacity = "1";      
document.getElementById("clBtn").style.opacity = "1";	 
 setTimeout(delBtn, 1500);
}

  
function closeNav() {
  document.getElementById("opBtn").style.display = "block";
  setTimeout(bckBtn, 20);
  }
  
  
function onBar1() {
	document.getElementById("fbar").style.transform = "translateY(1vh)";
}

function onBar2(){ 
	document.getElementById("sbar").style.transform = "translateY(1vh)";
	}

function onBarA(){
document.getElementById("tbar").style.transform = "translateY(1vh)";		
	}  
 function onBarB(){
	document.getElementById("fobar").style.transform = "translateY(1vh)";	
	}   

function offBar1() {
	document.getElementById("fbar").style.transform = "translateY(-12vh)";
	}

function offBar2(){ 
	document.getElementById("sbar").style.transform = "translateY(-12vh)";
	}

function offBarA(){
	document.getElementById("tbar").style.transform = "translateY(-12vh)";		
	}  
function offBarB(){
	document.getElementById("fobar").style.transform = "translateY(-12vh)";	
	}   

function onCatalog(){
	document.getElementById("Bar").style.transform = "translateX(260px)";
	document.getElementById("Bar").style.filter = "grayscale(100%)";
	}
	
		setTimeout(ExtrudeA, 0);
	setTimeout(ExtrudeB, 1200);
	
window.addEventListener('mousemove', function (e){
	
document.getElementById('coordinates').textContent = `[${ e.x/1000 }, ${ e.y/1000 }]`
});