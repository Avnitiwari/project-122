x = 0;
y = 0;
draw_apple = "";
apple = "";
number=0;

function preload()
{
    apple = loadImage("apple.jpeg")
}

var SpeechRecognition = window.webkitSpeechRecognition;

var recognition = new SpeechRecognition();

function start()
{
    document.getElementById("status").innerHTML = "System is listening please speak";
    recognition.start();
}
recognition.onresult = function(event){

    console.log(event);

    var content = event.results[0][0].transcript;
        document.getElementById("status").innerHtml = "The speech has been recognized as :" + content;
        number = Number(content )
        if(Number.isInteger("number"))
        
        {
            draw_apple = "set"
            document.getElementById("status").innerHtml = "Started drawing apple";
            
        }
        
        else
        {
            document.getElementById("status").innerHtml = "Speech has not recognized number";
           
        }
    }
        function setup(){
            canvas = createCanvas(900, 600);
        }

        function draw(){
            if(draw_apple == "set")
            {
                for(var i=1; i <=number;i++ ){
                    x=Math.floor(math.random()*700)
                    y=Math.floor(math.random()*700)
                    image(apple,x,y,50,50);
                }

                document.getElementById("status").innerHTML = "Apples are drawn ";
                draw_apple=""
              
            }

           
              


        }



    