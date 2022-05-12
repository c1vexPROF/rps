let player1 = true;
let player2 = false;
let choice_player1;
let choice_player2;

let player1div=document.querySelector(".choice-player-1")
let player2div=document.querySelector(".choice-player-2")

document.addEventListener("keydown", function(arg){
	if(player1==true && player2==false){
		if(arg.code=="KeyA"){
            console.log("Выбран камень у игрока 1")
            player1=false;
            player2=true;
            document.querySelector(".info").innerHTML="Игрок 2 ходит!"
            choice_player1="Камень";
        }
        else if(arg.code=="KeyS"){
            console.log("Выбраны ножницы у игрока 1")
            player1=false;
            player2=true;
            document.querySelector(".info").innerHTML="Игрок 2 ходит!"
            choice_player1="Ножницы";
        }
        else if(arg.code=="KeyD"){
        	console.log("Выбрана бумага у игрока 1")
        	player1=false;
            player2=true;
            document.querySelector(".info").innerHTML="Игрок 2 ходит!"
            choice_player1="Бумага";
        }

	}
	if(player2==true && player1==false){
		if(arg.code=="KeyJ"){
            console.log("Выбран камень у игрока 2")
            player2=false;
            choice_player2="Камень";
            setTimeout(showItems,500)
            setTimeout(finish,1500)
        }
        else if(arg.code=="KeyK"){
            console.log("Выбраны ножницы у игрока 2")
            player2=false;
            choice_player2="Ножницы";
            setTimeout(showItems,500)
            setTimeout(finish,1500)
        }
        else if(arg.code=="KeyL"){
        	console.log("Выбрана бумага у игрока 2")
        	player2=false;
        	choice_player2="Бумага";
        	setTimeout(showItems,500)
        	setTimeout(finish,1500)
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
		alert("Игрок 1 победил!")
	}
	else if(choice_player1=="Ножницы" && choice_player2=="Бумага"){
		alert("Игрок 1 победил!")
	}
	else if(choice_player1=="Бумага" && choice_player2=="Камень"){
		alert("Игрок 1 победил!")
	}
	else if(choice_player1==choice_player2){
		alert("Ничья")
	}
	else{
		alert("Игрок 2 победил!")
	}

}