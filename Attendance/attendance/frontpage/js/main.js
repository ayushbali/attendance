// login 
function showLogin(){
    var show = document.getElementById('student')
    show.style.display = "block"
    document.getElementById('hide').style.display = "none"
    let h2 = document.getElementsByTagName("h2")[0].innerHTML = "Login"
}
function showSignUp(){
    var x = document.getElementById("hide")
    x.style.display = "block"
    document.getElementById('student').style.display = "none"
    let h2 = document.getElementsByTagName("h2")[0].innerHTML = "Register"
}


// to reverse a string
function string(str){
    var string = ""
    for(i=0; i<str.length; i++){
        string = str[i]+string
    }
return string
}
console.log(string("Ayush"))