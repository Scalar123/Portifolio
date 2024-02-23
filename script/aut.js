var count = 0 

function menubar(){
    var div_appear = document.getElementById("div_appear")
    count = count + 1

    if(count % 2 == 0){
        div_appear.style.display = "inline"
    }else{
        div_appear.style.display = "none"
    }

}
var btn = document.getElementById("btn");
btn.addEventListener("click",menubar)