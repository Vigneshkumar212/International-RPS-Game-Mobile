function two(){
    createroom.mousePressed(()=>{
        roomcreate = "createroom";
        checkid.position(2000,-10);
        pos = 2000;
        play.position(pos,510); 
        roomid.hide();
        createroom.hide();

        
      })
    
      if (roomcreate === "createroom"){
        createroom.hide();
        checkid.position(100,-10);
        checkid.size(0,0);
        fill("white");
        textSize(30);
        text ("Hi There, Welcome To ",60,35);
        text("Create New Room Section",30,70)
        textSize(20)
        fill("white");
        text("Just Press The Button Bellow And",50,300);
        text("The New Room ID Will Be Created.",50,330)
        //text("It's That Simple!!!",495,100);
        newroom_button = createButton('create roomID');
        newroom_button.position(150,375);
        
        newroom_button.mousePressed(()=>{
          var roomRef =  database.ref('roomno');
          roomRef.on("value",(data)=>{
          roomno = data.val();
          })
         
          roomno+=1;
          database.ref('/').update({
            roomno : roomno
          });
          id = roomno;
          database.ref('rooms/'+id).update({
            gameState:0,
            playerCount :0,
            check_pressed:0,
            play:"no"
          });
          
          s1 = "New room was created.";
          s2 = "Your room's ID :"+ id;
    
        })
        fill("white");
    
        text(s1,110,480);
        text(s2,110,510);
      }
}