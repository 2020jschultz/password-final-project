//returns true or false if the length is at least 8 character long
function lengthCheck(password){

  if(password.length >= 8){
    return true;
  }
  else{
    return false;
  }

}






//returns true or false if there is an uppercase character in the password
function upperCaseCheck(password){
  
  for(let i = 0; i < password.length; i++){

  if(password.fromCharCode(i) >= String.fromCharCode(65-90)){
      return true;
    }

  }
  return false;
}






//returns true or false if there is an lowercase character in the password
function lowerCaseCheck(password){


}








//returns true or false if there is a numerical character
function numberCheck(password){


}







//returns true or false if there is a special character in the password
function specialCheck(check){


}










function passedAllChecks(){

}









//returns a string which represents the grade for your password
function grade(password){


}
