$(function(){
  $("#choose").on("click",function(){
    let userChoice;
        userChoice = prompt('Do You chose Rock, Paper or Scissors');
        if(!userChoice||(userChoice.toLowerCase()!="rock"&&userChoice.toLowerCase()!="scissors"&&userChoice.toLowerCase()!="paper")){
          alert("you didn't enter a valid input");
        }
        else{
          var computerChoice = Math.random();
          if (computerChoice < 0.34) {
            computerChoice = "rock";
          } else if(computerChoice <= 0.67) {
            computerChoice = "paper";
          } else {
            computerChoice = "scissors";
          }
          document.getElementById("cc").style.display="block";
          document.getElementById("pc").style.display="block"; 
          document.getElementById("piccc").src=computerChoice+".jpg";
          document.getElementById("picpc").src=userChoice+".jpg";
          a=document.getElementById("win").innerHTML=compare(userChoice,computerChoice);

        

            function compare(choice1, choice2){
             if(choice1 == choice2){
                  return "The result is a tie!";   
             }
             else if(choice1 == "rock"){
                 if (choice2 == "scissors"){
                     return "Rock win";
                 }
                 else{
                     return "Paper wins";
                 }
             }
             else if(choice1 == "paper"){
                 if (choice2 == "rock"){
                     return "Paper win";
                 }
                 else{
                     return "Scissors wins";
                 }
             }
             else if(choice1 == "scissors"){
                 if (choice2 == "paper"){
                     return "Scissors win";
                 }
                 else{
                     return "Rock wins";
                 }
             }
            }
          }
  });
});