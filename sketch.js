var scissor_b, paper_b, rock_b, play,checkid, playerid, checkpressed = 0
var title1, title, intro, option = "", ooption = "", no_no = "undefined"
var output, loading  = "Loading..." ,fr = 0,end,pos = (600);
var introtxt = "";
var loadingtxt, blah = "yes", roomno , id, s1 ="",s2 = "";
var roomcreate = "true", roomid , backgroundimg, newroom_button;
var playerroomid = 0 , playid, height = 1;
var scissor, paper, rock,blank;
var thischose,thatchose,so ="huh";
var hi = "no", waittxt,waittxt2,waittxt3,waittxt4,waittxt5, playagain;
var blank_img,pl,playh;


function preload(){
  backgroundimg = loadImage("back_ground.png") 
  bg2 = loadImage("back_ground2.png") 
  scissor_img = loadImage("scissor.png");
  paper_img = loadImage("paper.png");
  rock_img = loadImage("rock.png");
  scissor2_img = loadImage("scissor2.png");
  paper2_img = loadImage("paper2.png");
  rock2_img = loadImage("rock2.png");
  blank = loadImage("blank.png")
  blank_img = loadImage("blank.png")
}

function setup(){
  //creating canvas
    canvas = createCanvas(412, 732);

  // reffering the database  
    database = firebase.database();

  //creating text
    title = createElement('h3');
    title1 = createElement('h3');
    intro = createElement('h3');
    output = createElement('h3');
    end = createElement('h2');
    loadingtxt = createElement('h2');
    loadingtxt.position(150,190)
    waittxt = createElement('h2');
    waittxt2 = createElement('h2');
    waittxt3 = createElement('h2');
    waittxt4 = createElement('h2');
    waittxt5 = createElement('h2');

    waittxt.position(150,50);
    waittxt2.position(10,100);
    waittxt3.position(10,150)
   
    

  //creating button
    play = createButton('play');
    playagain = createButton('playAgain');


    checkid = createButton('Continue');
    createroom = createButton('RoomID');
    checkid.position(330,350);


    // creating sprites
    
  
  //creating inputs  
    roomid = createInput('');
    
  //to hide things at the start  
    hide();
    intro.hide();
    end.hide();
    play.hide();
    waittxt3.hide();
    waittxt2.hide();
    waittxt.hide();
    waittxt4.hide();
    waittxt5.hide();

}


function draw(){
  playagain.hide();
  console.log(option)
  var nos = playerroomid+"/playerCount"
    var playerCountRef =  database.ref(nos);
    playerCountRef.on("value",(data)=>{
    no_no = data.val();
    })

    waittxt3.hide();
    waittxt2.hide();
    waittxt.hide();
    waittxt4.hide();
    waittxt5.hide();

    if(hi === "yes"){
      textSize(40);
      waittxt.show();
      waittxt2.show();
      waittxt3.show();
      waittxt5.show();
      waittxt4.show();

      waittxt.position(150,0);
      waittxt2.position(110,30);
      waittxt3.position(90,60);
      waittxt4.position(70,90);
      waittxt5.position(25,120);

      waittxt.html("How To Play:");
      waittxt2.html("Just Click Once On");
      textSize(30);
      waittxt3.html("The Option To Select It.");
      waittxt4.html("You Can Only Choose Once");
      waittxt5.html("And It Will Be Taken Automatically");
      playagain.hide();
    }

    
   

  var nos = playerroomid+"/playerCount"
    var playerCountRef =  database.ref(nos);
    playerCountRef.on("value",(data)=>{
    no_no = data.val();
    })

    if (playerid === 0){
      playid = 1
    } 
    if (playerid === 1){
      playid = 0
    } 

 
    var plz = playerroomid+"/players/player"+playid+"/option"
    var tRef =  database.ref(plz);
    tRef.on("value",(data)=>{
    ooption = data.val();
    })

  background(backgroundimg); 
  //background("white");
  four();
  one();
  two();
  three();
  threepoint();
      

  hide();

  title.show();
  title1.show();
  
  if (no_no === 2){
    position();
    texts_buttons();

    if (blah === "yes"){
      show();  
    }
    

    opts();

    five();
    six();
    drawSprites();
    
    if (so === "no" ||so === "what"){
      playagain.show();
     


      playagain.show();

      var playRef =  database.ref(playerroomid);
      playRef.on("value",(data)=>{
      playag = data.val();
      })

    }



    playagain.position(325,675)

     
    if (b = "yes"){
      thischose.addImage("blank",blank_img);
      thatchose.addImage("blank",blank_img);
      
    }

    var z = playerroomid + "/play"
    var playhRef =  database.ref(z);
    playhRef.on("value",(data)=>{
    playh = data.val();
    })

    if (playh === "yes"){
      playagain.hide();
      b = "yes"
      so = "select"
      option = "";

      end .html("")
      introtxt = ""
      output.html("")

      

     
  

      var playerno1 = playerroomid+"/players/player"+ playerid
      database.ref(playerno1).update({
        option:option
      });

      database.ref(playerroomid).update({
        play : "no"
      });


    }
     b = "no"
    playagain.mousePressed(()=>{

      database.ref(playerroomid).update({
        check_pressed:0,
        play : "yes"
      });

      
      
    })
    
   
  }
  
}

function mouseClicked(){
  if(mouseX>10&&mouseX<110&&mouseY>150&&mouseY<250&&so === "select"){
    option = "scissor"
    so = "no";

  }

  if(mouseX>10&&mouseX<110&&mouseY>280&&mouseY<380&&so === "select"){
    option = "paper"
    so = "no";
  }

  if(mouseX>10&&mouseX<110&&mouseY>410&&mouseY<510&&so === "select"){
    option = "rock"
    so = "no";
  }

  

}