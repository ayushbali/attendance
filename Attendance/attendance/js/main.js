// show login

function showLogin(){
  var hide = document.getElementById('form1')
  hide.style.display = "none"
  var log = document.getElementsByTagName("span")[1]
  log.innerHTML = "Log In"
  var hideLog = document.getElementById('form2')
  hideLog.style.display = "block"
}

// show Sign Up

function showSignUp(){
  var hideLog = document.getElementById('form2')
  hideLog.style.display = "none"
  var show = document.getElementById('form1')
  show.style.display = "block"
  var log = document.getElementsByTagName("span")[1]
  log.innerHTML = "Sign Up"
}
