document.addEventListener('DOMContentLoaded', () => {




var score=0;

mainControl();

function mainControl() {
    
    setInterval(() => {
        setTimeout(createBoard,1000)
        setTimeout(randomMolePop,2000)
        
    },2000);
    
}


// function mainControl() {
//     for(let i=0;i<14;i++) {
//         setTimeout(function timer() {
//             console.log("hello world");
//           }, 3000);
//         createBoard();
//         randomMolePop();
//     }
// }

function createBoard() {
    document.getElementsByClassName("grid")[0].innerHTML=""
for(let i=0;i<9;i++) {
    const card=document.createElement('img')

    card.setAttribute('src', 'white.png')
    card.setAttribute('id',i)
    card.setAttribute('border','2px solid black')
    
    document.getElementsByClassName("grid")[0].appendChild(card)
    
}

}





function randomMolePop() {

    var randomId = Math.floor(Math.random() * 9); 
    console.log(randomId)
    const molecard=document.getElementById(randomId)
    molecard.setAttribute('src','mole.jpg') 
    molecard.setAttribute('cursor','pointer') 

    molecard.addEventListener('click', () => {
        score++;
        document.getElementById("scorevalue").innerHTML=   `${score}`
        createBoard()

    })


    

    
    
}





})