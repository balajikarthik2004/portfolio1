function navinmobile(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
}
function hidenavbar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

var icon = document.getElementById("icon");
 icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon.src = "light.svg"
    }else{
        icon.src = "dark.svg"
    }
 }
var icon1 = document.getElementById("icon1");
 icon1.onclick = function(){
    document.body.classList.toggle("dark-theme");
    
    if(document.body.classList.contains("dark-theme")){
        icon1.src = "light.svg"
    }else{
        icon1.src = "dark.svg"
    }
 }