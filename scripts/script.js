function openNav() {
  document.getElementById("Sidebar").style.width = "37vh";
  document.getElementById("video_bg").style.marginLeft = "37vh";
  document.getElementById("Logo").style.opacity = "1";
  document.getElementById("list").style.opacity = "1";
  document.getElementById("opBtn").style.transform = "translateX(-30vh)";
  document.getElementById("clBtn").style.transform = "translateX(37vh)";
}

function closeNav() {
  document.getElementById("Sidebar").style.width = "0px";
  document.getElementById("video_bg").style.marginLeft = "0px";
	document.getElementById("opBtn").style.transform = "translateX(0vh)";

document.getElementById("clBtn").style.transform = "translateX(0vh)";
  }