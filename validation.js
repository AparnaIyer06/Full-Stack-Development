
function validateuname(){
    var uname = document.getElementById("uname").value  //Getting uname from the control
    if(uname==""){
        alert("Username is Mandatory.")
        //document.getElementById("uname").focus()
        //uname=prompt("Enter the Username")
        //document.getElementById("uname").value = uname //Setting uname to the control
        document.getElementById("errmsg").innerHTML="Username is Mandatory"
    } 
    
    if(/\d/.test(uname)){  //regex: /\d/: Digit- No digits should be present
        //alert("Username cannot contain numbers.")
        document.getElementById("uname").value=""
        document.getElementById("errmsg").innerHTML="Username cannot contain numbers"
        
    }
}

function validatepassword(upass){
    //alert(upass)
    if(upass.length<6||upass.length>18){
        document.getElementById("errmsg1").innerHTML="Username must be between 6 and 18 characters"
        return false
    }
    let hasDigit = false;
    let hasLcase = false;
    let hasUcase = false;
    let hasSchars = false;
    const specialChars = "!@#$%&*()-+._"

    for(let i=0;i<upass.length;i++){

        const char = upass[i]
        if(/[0-9]/.test(char)){
            hasDigit=true
        }
        else if(/[a-z]/.test(char)){
            hasLcase=true

        }
        else if(/[A-Z]/.test(char)){
            hasUcase=true
        }
        else if(specialChars.includes(char)){
            hasSchars=true
        }
    
    if(!hasDigit || !hasLcase || !hasUcase || !hasSchars){
        document.getElementById("errmsg1").innerHTML="Password must contain 1 number, 1 lowercase, 1 uppercase and 1 special character."
    }

    }
}

function validatecpass(cpass){
    var upass = document.getElementById("upass").value
    if(!upass.match(cpass)){
        document.getElementById("errmsg1").innerHTML="Password mismatch"
    }
    document.getElementById("errmsg1").innerHTML=""
}