/*var btn=document.getElementById('btn');
btn.addEventListener('click',startCounter);
var curr= document.querySelector('.current');
var next= document.querySelector('.next');
function startCounter(){
    console.log("counting started");
    var interval=setInterval(animate,2000);
}

function animate(){
   
    next.classList.add('animate');
     setTimeout(function(){
        next.classList.remove('animate');
    },1000);
    console.log("animation started");
}*/

var btn=document.getElementById('btn');
btn.addEventListener('click',calculate);
function calculate(){
    var num=document.getElementById("number").value;
    //console.log(num);
    var curr= document.querySelector('.current');
    var next= document.querySelector('.next');
    if(num<=0){
         window.alert("please enter number greater than 0");
    }
    else{
        curr.innerText=num;
        next.innerText=num-1;
         var interval=setInterval(animate,1000);
        function animate(){
            if(num<=0){
                window.alert("timer finished");
                clearInterval(interval);
                return;
            }

            next.classList.add('animate');
            setTimeout(function(){
                num--;
                curr.innerText=num;
            next.classList.remove('animate');
            //console.log("removed");
            },900);
            //console.log(num);
       
           
           
            next.innerText=num-1;

    }

}
};