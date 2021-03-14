function mouseOver (obj) {
    obj.innerHTML = "good job"
}

var counter = null; 

function animateSquare( ){
    var element = document.getElementById("animate");
    var pos = 0;
    counter = setInterval(frame, 5);

}

var id = null;

function moveSquare(){
    var element = document.getElementById("animate");
    var position = 0;

    id = setInterval(frame,10);

    function frame(){
        if(pos == 250){
            clearInterval(id);
        }
    }   else{
        element.style.top = position + "px";
        element.style.left = position + "px"; 
    }
}

var id;
function squarePath() {
    var elem = document.getElementById("animate");
    var pos = 0;

    id = setInterval(frame, 5);
    function drame(){
        function move(){

        }
        function move2(){


        }      
    }   function move3(){


    }
}   