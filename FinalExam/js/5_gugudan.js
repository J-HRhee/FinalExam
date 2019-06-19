function create(){
    document.getElementById("first").innerHTML=Math.floor((Math.random() *9) +1);
    document.getElementById("second").innerHTML=Math.floor((Math.random() *9) +1);
}
function check(){
  if(answer==first*second){
      document.getElementById("check").innerHTML="정답입니다.";
  }
  else {
    document.getElementById("check").innerHTML="오답입니다.";
  }
}
