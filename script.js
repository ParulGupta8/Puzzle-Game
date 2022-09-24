let move=0;

function onkeyupFunc(event) {  
    let keypressed=event.key;  //which key is pressed
    let id=event.target.getAttribute("id");   //id of the element on which the event(onkeyup event) has occured
    let value=event.target.value;   //value of that element
    // return if delected box empty
    if(value==""){
        return;
    }
    if(keypressed=="ArrowRight"){
        if(Number(id)%3 ==0){
            return;
        }
        let nextId=Number(id) +1;
        let nextElem=document.getElementById(nextId);
        let nextValue=nextElem.value;
        if (nextValue=="") {
            nextElem.value=value;
            event.target.value="";

            event.target.classList.add('empty-box')
            nextElem.classList.remove('empty-box')
            moves()
        }else{
            return;
        }

    }else if(keypressed=="ArrowDown"){
        if(Number(id)>6){
            return;
        }
        let nextId=Number(id) +3;
        let nextElem=document.getElementById(nextId);
        let nextValue=nextElem.value;
        if (nextValue=="") {
            nextElem.value=value;
            event.target.value="";

            event.target.classList.add('empty-box');
            nextElem.classList.remove('empty-box');
            moves();
        }else{
            return;
        }
    }else if (keypressed=="ArrowLeft") {
        if(Number(id)%3==1){
            return;
        }
        let nextId=Number(id) -1;
        let nextElem=document.getElementById(nextId);
        let nextValue=nextElem.value;
        if (nextValue=="") {
            nextElem.value=value;
            event.target.value="";

            event.target.classList.add('empty-box');
            nextElem.classList.remove('empty-box');
            moves();
        }else{
            return;
        }
    }else if (keypressed=="ArrowUp") {
        if(Number(id)<4){
            return;
        }
        let nextId=Number(id) -3;
        let nextElem=document.getElementById(nextId);
        let nextValue=nextElem.value;
        if (nextValue=="") {
            nextElem.value=value;
            event.target.value="";

            event.target.classList.add('empty-box');
            nextElem.classList.remove('empty-box');
            moves();
        }else{
            return;
        } 
    }
    checkCorrect();
}

function random() {
    let arr =[];
    let elem;
    let id=1;
    let temp;
    document.getElementById(`9`).classList.add('empty-box');
    document.getElementById(`9`).value="";
    for (let index = id; index < 9; index++) {
        elem=document.getElementById(`${index}`);
        elem.classList.remove('empty-box');
        temp= genRan(elem,arr);
        arr.push(temp)
        
    }

}
function genRan(elem,arr) {
    let temp=Math.floor(Math.random() * (8 ) + 1);
    if(arr.includes(temp) ){
        temp=  genRan(elem,arr);
    }else{
        elem.value=`${temp}`;
    }
    return temp;
}

document.onreadystatechange = function(){//window.addEventListener('readystatechange',function(){...}); (for Netscape) and window.attachEvent('onreadystatechange',function(){...}); (for IE and Opera) also work
    if(document.readyState=='loaded' || document.readyState=='complete')
        alert('fsdfsdf');
}
function checkCorrect() {    
    let id=1;
    let bool=true;
    let elem;
    for (let index = id; index < 9; index++) {
        elem=document.getElementById(`${index}`);
        if (elem.value != `${index}`) {
            bool=false;
            break;
        }        
    }
    if (bool) {
        console.log(document.readyState);
        if(document.readyState=='loaded' || document.readyState=='complete'){

            alert("You Did It!! Congratulations!!!");
        }
        let high_score=localStorage.getItem('high_score');
    if(!high_score){
    high_score=0; 
    }

    if(score>high_score)
    alert("New High Score");
    localStorage.setItem('high_score',`${score}`);
    }
}

//random();

//TIMER...
setInterval(myTimer,1000);
let timer=document.getElementById("timer");
    let h=00; 
    let m=00;
    let s=00;
    let ms=00;
function myTimer(){
    if (move>=1) {           
        s++;
    }

            if(s==60){
            s=00;
            m++;

            if(m==60){
                m=00;
                h++; }
            }
    

    let hr= h<10 ? "0"+h : h;
    let min= m<10 ? "0"+m : m;
    let sec= s<10 ? "0"+s : s;
        
    timer.innerHTML=`${hr}:${min}:${sec}`;
}

//RESTART....
function restart(){
    random();
    h=00; 
    m=00;
    s=00;
    move=0;
    document.getElementById("movements").innerHTML= `<span style="color: green; ">Moves : </span> 0`;
    document.getElementById("score").innerHTML= `<span style="color: green; ">Score : </span>  0`;
}

//MOVES...
function moves(){
    scores();
    move++;
    document.getElementById("movements").innerHTML=`<span style="color: green; ">Moves : </span>${move}`;
}
let score=0;
 //RESET...
function reset(){
    random();
    score=0;
    move=0;
}

//SCORE...

// moves > & time > --score
// in right position block player got 100 point //point
// total time /move *
function scores(){
// let point=0;   
//     for (let index = 1; index < 9; index++) {
//         elem=document.getElementById(`${index}`);
//         if (elem.value == `${index}`) {
//             point++;
//         }        
//     }
    let divisor= (((h*60)+m) + move);
    if(divisor==0){
        divisor=1;
    }
    //score=((point+100000)/divisor).toFixed(0);
    score=(100000/divisor).toFixed(0);
document.getElementById("score").innerHTML=`<span style="color: green; ">Score : </span>${score}`;

}