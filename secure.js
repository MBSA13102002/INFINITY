
function match(){
    var user=document.getElementById("username").value
    var pass=document.getElementById("password").value
    admin = "infinity"
    access = "developer"
    if(user==admin && pass==access){
        document.getElementById("granted").play()
        if(!alert("access")) {window.location.replace("direct.html")}
      
    }
    else{
        document.getElementById("username").value=null
        document.getElementById("password").value=null
        document.getElementById("denied").play()  
        alert("failed")
        // document.getElementById("myForm").reset();
    }


}

