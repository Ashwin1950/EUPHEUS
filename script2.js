function onlinecourse(){
    change();
    const input = document.getElementById("onlinecourses").value;

    if(input == "ba"){
       baa.style.display="block"
    }
    if(input == "bcom"){
        bcomo.style.display="block"
     }
     if(input == "be"){
        beo.style.display="block"
     }
     if(input == "bsc"){
        bsco.style.display="block"
     }

}

function time(){
    setTimeout(onlinecourse,3000);
  }
function change(){
    baa.style.display = "none";
    bcomo.style.display = "none";
    beo.style.display = "none";
    bsco.style.display = "none";
}
