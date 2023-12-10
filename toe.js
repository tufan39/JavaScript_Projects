let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset_btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let dra = document.querySelector(".draw");
let checkdraw=document.querySelector(".check-draw");

let turnO = true; //playerO playerX


const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = () =>{
    turnO = true;
    enableboxes();
    msgContainer.classList.add("hide");
    checkdraw.classList.add("hide");
 
}
 let count=0;
boxes.forEach((value)=>{
   value.addEventListener("click",()=> {
     count=count+1;
     console.log("box was clicked",count);
     if(turnO===true){ //playerO
        value.innerText ="O";
        value.style.color="green";
        turnO=false
     }
     else{//playerX
        value.innerText ="X";
        value.style.color="blue";
        turnO=true;
     }
     value.disabled = true;
     checkWinner();
     
   });
});



const disableboxes = () => {
    for(let box of boxes){
        box.disabled = true;
    }
}
const enableboxes = () => {
    for(let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}
const showWinner = (winner) =>{
    msg.innerText=`Congratuletions, Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disableboxes();
}
const checkWinner= ()=>{
    for ( let pattern of winPatterns) {
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(
        //     boxes[pattern[0]].innerText,
        //     boxes[pattern[1]].innerText,
        //     boxes[pattern[2]].innerText
        //     );
            let pos1val = boxes[pattern[0]].innerText;
            let pos2val = boxes[pattern[1]].innerText;
            let pos3val = boxes[pattern[2]].innerText;
            if(pos1val !="" && pos2val !="" && pos3val!=""){
                if(pos1val===pos2val && pos2val===pos3val){
                    console.log("winner",pos1val);
                    count=0;
                    showWinner(pos1val);
                }
                else if(count===9){
                    dra.innerText ="DRAW!";
                    checkdraw.classList.remove("hide");
                    count=0;
                    console.log(count);
                    console.log(dra);
                
                }
                
            }
        }
}

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);
