let player1 = true;
let player2 = false;
let choice_player1;
let choice_player2;

let player1div=document.querySelector(".choice-player-1")
let player2div=document.querySelector(".choice-player-2")
let pos1=document.querySelector(".pos1")
let pos2=document.querySelector(".pos2")
let icon=document.querySelector(".icon")
let txt=document.querySelectorAll(".txt")

document.addEventListener("keydown", function(arg){
	if(player1==true && player2==false){
		if(arg.code=="KeyA"){
            console.log("Выбран камень у игрока 1")
            player1=false;
            player2=true;
            document.querySelector(".info").innerHTML="Синий игрок ходит!"
            choice_player1="Камень";
            player1div.style.backgroundImage="url("+"loading.gif"+")";
        }
        else if(arg.code=="KeyS"){
            console.log("Выбраны ножницы у игрока 1")
            player1=false;
            player2=true;
            document.querySelector(".info").innerHTML="Синий игрок ходит!"
            choice_player1="Ножницы";
            player1div.style.backgroundImage="url("+"loading.gif"+")";
        }
        else if(arg.code=="KeyD"){
        	console.log("Выбрана бумага у игрока 1")
        	player1=false;
            player2=true;
            document.querySelector(".info").innerHTML="Синий игрок ходит!"
            choice_player1="Бумага";
            player1div.style.backgroundImage="url("+"loading.gif"+")";
        }

	}
	if(player2==true && player1==false){
		if(arg.code=="KeyJ"){
            console.log("Выбран камень у игрока 2")
            player2=false;
            choice_player2="Камень";
            player2div.style.backgroundImage="url("+"loading.gif"+")";
            setTimeout(showItems,1500)
            setTimeout(finish,2500)
        }
        else if(arg.code=="KeyK"){
            console.log("Выбраны ножницы у игрока 2")
            player2=false;
            choice_player2="Ножницы";
            player2div.style.backgroundImage="url("+"loading.gif"+")";
            setTimeout(showItems,1500)
            setTimeout(finish,2500)
        }
        else if(arg.code=="KeyL"){
        	console.log("Выбрана бумага у игрока 2")
        	player2=false;
        	choice_player2="Бумага";
        	player2div.style.backgroundImage="url("+"loading.gif"+")";
        	setTimeout(showItems,1500)
        	setTimeout(finish,2500)
        }
	}
})
function showItems(){
	//игрок1
	if (choice_player1=="Камень"){
		player1div.style.backgroundImage="url("+"rock1.png"+")";
	}
	else if(choice_player1=="Ножницы"){
		player1div.style.backgroundImage="url("+"scissors1.png"+")";
	}
	else if(choice_player1=="Бумага"){
		player1div.style.backgroundImage="url("+"paper1.png"+")";
	}
	//игрок2
	if(choice_player2=="Камень"){
		player2div.style.backgroundImage="url("+"rock2.png"+")";
	}
	else if(choice_player2=="Ножницы"){
		player2div.style.backgroundImage="url("+"scissors2.png"+")";
	}
	else if(choice_player2=="Бумага"){
		player2div.style.backgroundImage="url("+"paper2.png"+")";
	}
}
function finish() {
	if(choice_player1=="Камень" && choice_player2=="Ножницы"){
		pos1.style.backgroundImage="url("+"win.gif"+")";
		alert("Победа красных!");
		txt[0].style.display="none";
		txt[1].style.display="none";
		txt[2].style.display="none";
		txt[3].style.display="none";
		txt[4].style.display="none";
		txt[5].style.display="none";
	}
	else if(choice_player1=="Ножницы" && choice_player2=="Бумага"){
		pos1.style.backgroundImage="url("+"win.gif"+")";
		alert("Победа красных!");
		txt[0].style.display="none";
		txt[1].style.display="none";
		txt[2].style.display="none";
		txt[3].style.display="none";
		txt[4].style.display="none";
		txt[5].style.display="none";
	}
	else if(choice_player1=="Бумага" && choice_player2=="Камень"){
		pos1.style.backgroundImage="url("+"win.gif"+")";
		alert("Победа красных!");
		txt[0].style.display="none";
		txt[1].style.display="none";
		txt[2].style.display="none";
		txt[3].style.display="none";
		txt[4].style.display="none";
		txt[5].style.display="none";
	}
	else if(choice_player1==choice_player2){
		pos1.style.backgroundImage="url("+"win.gif"+")";
		pos2.style.backgroundImage="url("+"win.gif"+")";
		alert("Ничья");
		txt[0].style.display="none";
		txt[1].style.display="none";
		txt[2].style.display="none";
		txt[3].style.display="none";
		txt[4].style.display="none";
		txt[5].style.display="none";
	}
	else{
		alert("Победа синих!")
		pos2.style.backgroundImage="url("+"win.gif"+")";
		txt[0].style.display="none";
		txt[1].style.display="none";
		txt[2].style.display="none";
		txt[3].style.display="none";
		txt[4].style.display="none";
		txt[5].style.display="none";
	}

}