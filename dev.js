let val;
first(); 
function first()
{
    val=prompt("Choose any one among 'X' or 'O'");
}
let xal;
test();
function test()
{
if(val=="X")
{
    xal="O";
}
else
{
    xal="X";
}
}


let box=document.querySelectorAll(".box");

let win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [0,4,8]
];

let turn=true;

for(let i=0; i<=8; i++)
{
    box[i].addEventListener("click",myFunction);
    function myFunction()
    {
        if(turn)
            {
                {
                    box[i].innerText=val;
                }
                turn=false;
            }
        else
            {
                {
                    box[i].innerText=xal;
                }
                turn=true;
            }
        box[i].disabled=true;
        checkWin();
    }
}

let btnrst=document.querySelector("#rst");
btnrst.addEventListener("click",reSet);
function reSet()
{
for(let i=0; i<=8; i++)
{
    box[i].disabled=false;
    box[i].innerText="";
}
first();
test();
turn=true;
}

function checkWin()
{
    for(let x=0; x<=7; x++)
    {
        let pos1=win[x][0];
        let pos2=win[x][1];
        let pos3=win[x][2];
        let a=(box[pos1].innerText);
        let b=(box[pos2].innerText);
        let c=(box[pos3].innerText);
        if(a==b)
        {
            if(b==c)
            {
                if(c==val)
                {
                    let winCase=document.getElementsByClassName("win");
                    winCase[0].innerText="Player 1 wins";
                    for(let i=0; i<=8; i++)
                    {
                        box[i].disabled=true;
                    }
                }
                else if(c==xal)
                {
                    let winCase=document.getElementsByClassName("win");
                    winCase[0].innerText="Player 2 wins";
                    for(let i=0; i<=8; i++)
                    {
                        box[i].disabled=true;
                    }
                }
                
            }
        }
    }
}