// var arr=document.querySelectorAll(".drum");
// var len=arr.length;
// for(var i=0; i<len;i++){
//     arr[i].addEventListener("click",function (){
//         var a=this.innerHTML;
//         makeSound(a);
//         this.classList.add("pressed");
//         setTimeout(() => {
//           this.classList.remove("pressed");
//         }, 500);
//     });
// }

// document.addEventListener("keydown", function(e){
//     var a=e.key;
//     makeSound(a);
//     a="."+a;
//     var x=document.querySelector(a);
//     x.classList.add("pressed");
//         setTimeout(() => {
//           x.classList.remove("pressed");
//         }, 500);
    
// })
$("body").on( "keydown",function(e){
    var a=e.key;
    makeSound(a);
    a="."+a;
    $(a).addClass("pressed");
    setTimeout(() => {
      $(a).removeClass("pressed");
  }, 500);
})
$(".drum").on("click",function(){
  var x=$(this).html();
  makeSound(x);
  
  $(this).addClass("pressed");
  setTimeout(() => {
          $(this).removeClass("pressed");
      }, 500);
})

function makeSound(a){
  switch(a){
    case "w":
      var audio=new Audio("./sounds/crash.mp3");
      audio.play();
      break;
    case "a":
      var audio=new Audio("./sounds/kick-bass.mp3");
      audio.play();
      break;
     case "s":

      var audio=new Audio("./sounds/snare.mp3");
          audio.play();
      break;
    case "d":
      var audio=new Audio("./sounds/tom-1.mp3");
      audio.play();
      break;
    case "j":
      var audio=new Audio("./sounds/tom-2.mp3");
      audio.play();
      break;
    case "k":
      var audio=new Audio("./sounds/tom-3.mp3");
       audio.play();
          break;
    case "l":
      var audio=new Audio("./sounds/tom-4.mp3");
       audio.play();
        break;
     default: alert("press right key to get volumn");
  }
}

