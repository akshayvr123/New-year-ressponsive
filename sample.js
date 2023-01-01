var a=document.getElementById("input")
var b=document.getElementById("name")



function message(){
    if(a.value===""){
        alert("Please Enter your name")
    }else{

 document.getElementById("welcome").style.display = "block";
     
    b.innerHTML="Happy New Year "+a.value
    a.hidden
}
}