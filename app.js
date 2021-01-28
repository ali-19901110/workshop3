//alert("hello");
//document.write("hello in my website");
//console.log("hello world");

 //var studentInput =prompt("enter you'r grad");
//if(studentInput>=50){
  //  alert("succeed")
//}else{
  //  alert("faild");
//}
//confirm("change color");

//var person = prompt("Please enter your name", "Ali");

//if (person != null) {
  //alert("you are welcome "+ person);
//}
var userorder = prompt("what would you like to order pants or t-shirt","please enter here");
while(userorder !=="pants" && userorder!=="t-shirt"){
  userorder = prompt("please enter Pants or t-shirt");
}
var userInput = prompt("how many Pants or t-shirt do you wont?");
var image ="";

for(var i= 1 ;i <= userInput ;i++){
  if(userorder == "pants"){
    image = '<img src ="https://tierra.com/wp-content/uploads/2018/02/T1079210-dark-grey-1-800x973.jpg">';
    document.write(image);
    document.write(i);
  }
  else if(userorder == "t-shirt"){
    image = '<img src ="https://imgprd19.hobbylobby.com/9/5f/26/95f264323ae49e65b2a53a909fcd7d9ee659f3c7/350Wx350H-422519-0320.jpg">';
    document.write(image);
    document.write(i);
  }
}