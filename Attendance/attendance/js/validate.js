function validate(){
    var name = document.forms["myForm"]["password"].value
    if(name == ""){
        alert("please fill all the details")
        return false
    }

}