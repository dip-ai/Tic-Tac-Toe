let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGame=document.querySelector(".new");
let msg=document.querySelector("#msg");
let msgContainer=document.querySelector(".msg-container")

let turn0 = true;

const winPatterns=[
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,5,7],
    [2,4,6],
    [2,5,8],
    [3,4,5],
    [6,7,8],
];

const resetGame=()=>{
    enabledButtons();
    msgContainer.classList.add("hide");
};

boxes.forEach((e)=>{
    e.addEventListener("click", ()=>{
        console.log("Box Clicked");
        if (turn0) {
            e.innerText="O"; 
            turn0=false;
        } else {
            e.innerText="X";
            turn0=true;
        }
        e.disabled=true;
        checkWinner();
    });
});

const enabledButtons=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
};

const disabledButtons=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
};

const showWinner=(winner)=>{
    msg.innerText=`Winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledButtons();
}

const isDraw = () => {
    for (let box of boxes) {
        if (box.innerText === "") return false;
    }
    return true;
};


const checkWinner = () => {
    for(let i of winPatterns){
        let pos0Val=boxes[i[0]].innerText;
        let pos1Val=boxes[i[1]].innerText;
        let pos2Val=boxes[i[2]].innerText;

        if(pos0Val != "" && pos1Val != "" && pos2Val != ""){
            if(pos0Val===pos1Val && pos1Val===pos2Val){
            showWinner(pos1Val); 
        }}
    }
    if (isDraw()) {
        msg.innerText="The match is Drawn";
        msgContainer.classList.remove("hide");
    }
}

newGame.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);