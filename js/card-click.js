var cards=document.getElementsByClassName("card");
var isclicked=false;
$(document).ready(function(){
    var descId;
    $(".card").click(function(){
      var cardId=$(this).attr("id");
      switch(cardId)
      {
        case "1":descId="#Holes";break;
        case "2":descId="#UP";break;
      }
      $(descId).css("z-index",1);
      $(descId).animate({
        opacity:'1'
        
      },1000);
    });
    $(".close").click(function(){
      $(descId).css("z-index",-1);
      $(descId).css("opacity",0);
      descId=null
    });
    ;
  });

