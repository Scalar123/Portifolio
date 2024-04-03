function resp(){
    var inmmm = document.getElementById("mmm");
    var listNav = document.getElementById("lista_nav");

    var sizeWindow = window.screen.availWidth;

    if(sizeWindow <= 500){
        listNav.className = "responsive_list_half"
    }else{
        listNav.className = "responsive_list_full"
    }

}
window.addEventListener("resize", resp)




// window.addEventListener("resize", function(){
//     document.getElementById("mmm").innerHTML = this.window.screen.availWidth;
//   });
