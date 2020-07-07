function openNav() {
  document.getElementById("Sidebar").style.width = "250px";
  document.getElementById("video_bg").style.marginLeft = "250px";
  document.getElementById("Link").style.opacity = "1";
  document.getElementById("Logo").style.opacity = "1";
  document.getElementById("opBtn").style.display = "none";
  document.getElementById("clBtn").style.display = "block";
}

function closeNav() {
  document.getElementById("Sidebar").style.width = "0px";
  document.getElementById("video_bg").style.marginLeft = "0px";
  document.getElementById("Link").style.opacity = "0";
  document.getElementById("Logo").style.opacity = "0";
  document.getElementById("clBtn").style.display = "none";
  document.getElementById("opBtn").style.display = "block";    
}