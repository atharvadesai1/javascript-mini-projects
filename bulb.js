let buttn = document.getElementById('btn');
let bulbs = document.getElementById('bulb');
buttn.addEventListener('click',brightIt);

function brightIt(){
    if(buttn.textContent.includes('On')){
        buttn.textContent= 'Switch Off';
        buttn.style.backgroundColor = "red";
        buttn.style.color = "white";
        bulbs.src = "images/bulb-on.png"
    }
    else{
        buttn.textContent= 'Switch On';
        buttn.style.backgroundColor = "chartreuse";
        buttn.style.color = "black";
        bulbs.src = "images/bulb-off.png"
    }
}