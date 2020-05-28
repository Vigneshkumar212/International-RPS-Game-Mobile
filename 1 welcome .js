function one(){
    if(roomcreate === "true"){
    play.position(pos,510);
    pos = 10
    textSize(45);
    fill("white");
    textStyle(BOLD);
    text("Welcome To",70,50);
    text ("The International",15,90)
    text ("RPS Game",80,130)

    //textStyle(NORMAL);
    textSize(20);
    fill("white")
    text("To Play RPS With Your Friend Pls Enter ",10,290);
    text ("The Room ID And Click Continue ",10,310)
    roomid.position (210,320);
    
    createroom.position(240,560);
    fill("white")
    textSize(20);
    text("If you don't have a room ",10,550);
    text("then create one here",30,570 )
  } }