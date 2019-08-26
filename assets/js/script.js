window.onload = function() {
    var autotype = new TypeWriter("heading1",120);
    autotype.beginTyping();
}

document.getElementById("animateBtn").onclick = function() {clicked('heading2')};

document.getElementById("animateBtn2").onclick = function() {new TypeWriter('heading3',120).beginTyping();};

function clicked(id){
    var autotype = new TypeWriter(id,120);
    autotype.beginTyping();
    
}
var type;
$("#heading4").hover(function(){
  type = new TypeWriter('heading4',120);
    type.beginTyping();
  }, function(){
  type.stopTyping();
});