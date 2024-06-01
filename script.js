		let mybtn = document.getElementById("start")
		let menu = document.getElementById("menu")
		let body = document.body
		let music = document.getElementById("sound")
		let start = document.querySelector(".start")
		let textscore = document.querySelector(".text")


		let rnd = function(arg) {
			let rand = Math.random() * arg;
			let round = Math.round(rand)
			return round
		}

	

		mybtn.classList.add("btn", "btn-success", "col-8", "pt-2", "pb-2", "fs-4");

		for(let i=0; i<7; i++){
			let mybox = document.createElement("div")
			body.appendChild(mybox)
			mybox.style.position = "absolute"
			mybox.classList.add("soln")
		}	
	
	
		let allsun = document.querySelectorAll(".soln")
			allsun[0].style.left = "30%"
			allsun[0].style.top = "-20%"
			allsun[1].style.left = "40%"
			allsun[1].style.top = "-40%"	
			allsun[2].style.left = "5%"
			allsun[2].style.top = "-35%"	
			allsun[3].style.left = "60%"
			allsun[3].style.top = "-50%"
			allsun[4].style.left = "70%"
			allsun[4].style.top = "-24%"
			allsun[5].style.left = "90%"
			allsun[5].style.top = "-14%"
			allsun[6].style.left = "15%"
			allsun[6].style.top = "-45%"

		let score = 0
		for(let i=0; i<7; i++){
			allsun[i].onclick = function() {
				allsun[i].remove();
				let mybox = document.createElement("div")
				body.appendChild(mybox)
				mybox.style.position = "absolute"
				mybox.classList.add("soln")
				score = score + 100;
				textscore.innerHTML = score;
				console.log(score)
				if(score==700){
					alert("Nice Game! You win!")
					clearInterval(timer)
					music.pause();	
				}
			}

		}




		let mytop1 = -20;
		let mytop2 = -40;
		let mytop3 = -35;
		let mytop4 = -50;
		let mytop5 = -24;
		let mytop6 = -14;
		let mytop7 = -45;

		let timer
		let id = 0;



		let losesc = 0;

		let fall = function() {
			
			mytop1 = mytop1 + 5;
			mytop2 = mytop2 + 4;
			mytop3 = mytop3 + 8;
			mytop4 = mytop4 + 6;
			mytop5 = mytop5 + 5;
			mytop6 = mytop6 + 5;
			mytop7 = mytop7 + 10;

			
			
				allsun[0].style.top = mytop1 + "%"
				allsun[1].style.top = mytop2 + "%"
				allsun[2].style.top = mytop3 + "%"
				allsun[3].style.top = mytop4 + "%"
				allsun[4].style.top = mytop5 + "%"
				allsun[5].style.top = mytop6 + "%"
				allsun[6].style.top = mytop7 + "%"

			
		

			if(mytop1==90){				
				allsun[0].remove();
				losesc = losesc + 1
				console.log(losesc)
			} else if (mytop2>=90){
				allsun[1].remove();
				losesc = losesc + 1
				console.log(losesc)	
			} else if (mytop3>=90){
				allsun[2].remove();
				losesc = losesc + 1
				console.log(losesc)		
			} 

			if (mytop4>=90){
				allsun[3].remove();
				losesc = losesc + 1
				console.log(losesc)
			} else if (mytop5>=90) {
				allsun[4].remove();
				losesc = losesc + 1
				console.log(losesc)
			} else if (mytop6>=90) {
				allsun[5].remove();
				losesc = losesc + 1
				console.log(losesc)
			} if (mytop7>=90) {
				allsun[6].remove();
				losesc = losesc + 1
				console.log(losesc)
			}

			if(losesc>=51){
				alert("gameover")
				clearInterval(timer)
				music.pause();		
			} 

		}


		
		start.onclick = function() {
			alert("Игра началась!")
			menu.style.display = "none"
			music.play();	
			textscore.style.display = "block"

			if (window.matchMedia("(max-width: 900px)").matches) {
				//мелкие экраны
			  body.style.backgroundImage = 'url(mbg.png)'
			} else {
				//большие экраны
			  body.style.backgroundImage = 'url(bg.png)'
			}

			timer = setInterval(fall,500)

		}