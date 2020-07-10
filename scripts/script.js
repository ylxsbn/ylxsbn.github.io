function bckBtn() {
  document.getElementById("Sidebar").style.width = "0px";
  document.getElementById("video_bg").style.marginLeft = "0px";
  document.getElementById("opBtn").style.marginLeft = "0vh";
  document.getElementById("opBtn").style.filter = "blur(0px)";
  document.getElementById("opBtn").style.filter = "blur";
  document.getElementById("opBtn").style.opacity = "1";
  document.getElementById("clBtn").style.marginLeft = "0vh";	
}

function delBtn() {
document.getElementById("opBtn").style.display = 'none';		
}


function openNav() {
  document.getElementById("Sidebar").style.width = "37vh";
  document.getElementById("video_bg").style.marginLeft = "37vh";
  document.getElementById("Logo").style.opacity = "1";
  document.getElementById("opBtn").style.opacity = "0";
  document.getElementById("opBtn").style.filter = "blur(20px)";
  document.getElementById("list").style.opacity = "1";
  document.getElementById("opBtn").style.marginLeft = "30vh";
  document.getElementById("clBtn").style.marginLeft = "37vh";
  document.getElementById("clBtn").style.opacity = "1";      
  setTimeout(delBtn, 1500);
}

  


function closeNav() {
  document.getElementById("opBtn").style.display = "block";
  setTimeout(bckBtn, 20);
  }