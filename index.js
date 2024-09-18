let speaker = document.getElementById("speaker");

let _1 = document.getElementById("#1");
let _2 = document.getElementById("#2");
let _3 = document.getElementById("#3");
let _4 = document.getElementById("#4");
let _5 = document.getElementById("#5");
let _6 = document.getElementById("#6");
let _7 = document.getElementById("#7");
let _8 = document.getElementById("#8");
let _9 = document.getElementById("#9");

let turn = 0;
let win = 0;

function XO(id)
{

    if (turn == 0)
    {
        document.getElementById(id).innerText = "X";
        turn = 1;
        speaker.innerHTML = "O's Turn!";
    }

    else 
    {
        document.getElementById(id).innerText = "O";
        turn = 0;
        speaker.innerHTML = "X's Turn!";
    }

    document.getElementById(id).onclick = null;

    if (((_1.innerText == _2.innerText) && (_2.innerText == _3.innerText)) || ((_1.innerText == _4.innerText) && 
         (_4.innerText == _7.innerText)) || ((_1.innerText == _5.innerText) && (_5.innerText == _9.innerText)))
    {
        if (_1.innerText == "X")
        {
            speaker.innerHTML = "X Wins!";
            win = 1;
        }

        else if (_1.innerText == "O")
        {
            speaker.innerHTML = "O Wins!";
            win = 1;
        }
    }

    else if ((_2.innerText == _5.innerText) && (_5.innerText == _8.innerText))
    {
        if (_2.innerText == "X")
        {
            speaker.innerHTML = "X Wins!";
            win = 1;
        }

        else if (_2.innerText == "O")
        {
            speaker.innerHTML = "O Wins!";
            win = 1;
        }
    }

    else if (((_3.innerText == _6.innerText) && (_6.innerText == _9.innerText)) || ((_3.innerText == _5.innerText) && 
              (_5.innerText == _7.innerText)))
    {
        if (_3.innerText == "X")
        {
            speaker.innerHTML = "X Wins!";
            win = 1;
        }

        else if (_3.innerText == "O")
        {
            speaker.innerHTML = "O Wins!";
            win = 1;
        }
    }

    else if ((_4.innerText == _5.innerText) && (_5.innerText == _6.innerText))
    {
        if (_4.innerText == "X")
        {
            speaker.innerHTML = "X Wins!";
            win = 1;
        }

        else if (_4.innerText == "O")
        {
            speaker.innerHTML = "O Wins!";
            win = 1;
        }
    }

    else if ((_7.innerText == _8.innerText) && (_8.innerText == _9.innerText))
    {
        if (_7.innerText == "X")
        {
            speaker.innerHTML = "X Wins!";
            win = 1;
        }

        else if (_7.innerText == "O")
        {
            speaker.innerHTML = "O Wins!";
            win = 1;
        }
    }

    if (win == 1)
    {
        let cells = document.querySelectorAll("[id*='#']");

        for (let i = 0; i < cells.length; i++)
        {cells[i].onclick = null;}
    }
}

function reset()
{
    location.reload();
}