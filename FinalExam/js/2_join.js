function check_password(){
  var p1=PW;
  var p2=PWC;
  if (p1==p2){
    document.getElementById("check").innerHTML="비밀번호가 일치합니다.";
    document.getElementById("check").style.color="#000000";
  }
  else {
    document.getElementById("check").innerHTML="비밀번호가 일치하지 않습니다.";
  }
}
