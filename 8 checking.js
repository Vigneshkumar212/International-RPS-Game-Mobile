function checking() {

    if (option === "paper" && ooption === "scissor"){
      end.html("You Lose :(");

    } 
    
    if (option === "scissor" && ooption === "paper"){
      end.html("You Win :)");

    } 


    if (option === "paper" && ooption === "rock"){
      end.html("You Win :)");

    } 
    
    if (option === "rock" && ooption === "paper"){
      end.html("You Lose :(");

    } 



    if (option === "scissor" && ooption === "rock"){
      end.html("You Lose :(");
    
    } 
        
    if (option === "rock" && ooption === "scissor"){
      end.html("You Win :)");
    
    } 

      if (option ===  ooption){
      end.html("It's a draw :| ");

    } 

    



 
    

}
