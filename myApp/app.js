 function login(){
     var mail = document.getElementById("email");
     var pass = document.getElementById("pw");
     var conpass=pass.value;
     for (var j=1 ; j<mail.length ; j++){
         console.log(mail[j]);
     }
 


    for (var i=1 ; i<conpass.length ; i++){
        console.log(pass[i])

        if(conpass >= 8){
            alert("password must be 8 in length,,,");
    
        }
        else{
            alert("loged");
        } 
    }  
    
 }