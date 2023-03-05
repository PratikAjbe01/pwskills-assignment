
let counter=document.querySelector("#counter");
let count=0;
function changecounter(button) {
    if(button==inc){
count+=1;
    }
    else if(button==dec){
        count-=1;
    }
    else if(button==reset){
        count=0;
    }
    counter.innerHTML=count;
}