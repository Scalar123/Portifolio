function resp(){
    var inmmm = document.getElementById("mmm");
    var listNav = document.getElementById("lista_nav");
    var img_header = document.getElementById("img_header")

    var sizeWindow = window.screen.availWidth;

    if(sizeWindow <= 500){
        listNav.className = "oculta"
        img_header.className = "exibe"
    }else{
        listNav.className = "responsive_list_full"
        img_header.className = "oculta"
    }

}
window.addEventListener("resize", resp)




// window.addEventListener("resize", function(){
//     document.getElementById("mmm").innerHTML = this.window.screen.availWidth;
//   });
