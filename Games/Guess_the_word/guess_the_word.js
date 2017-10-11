		var words = ["картина", "макака", "спорт", "автопоезд", "книга", "коропка", "воздух"
		];
		var word = words[Math.floor(Math.random()*words.length)];



		var answerArray = [];
		for (var i = 0; i<word.length; i++) {
			answerArray[i] = "_";
		}
		var remainingLetters = word.length;
		var attempt = word.length + 2;


		while (remainingLetters > 0 && attempt>0) {
			alert (answerArray.join (" "));
			var guess = prompt ("Угадайте букву, или нажмите Отмена для выхода из игры.");
			attempt--;
			
			if (guess === null) {
				alert ("Ваше право!");
				break;
			}
			else if (guess.length !== 1) {
				alert("Пожалуйста введите одиночную букву.");
			}
			else {
				for (var j = 0; j < word.length; j++) {
					guess = guess.toLowerCase();
					if (word[j] === guess){
						if (answerArray[j] != "_") {
							alert ("Вы уже вводили эту букву!");
						}
						else {answerArray[j] = guess;
							remainingLetters--;
						} 
					}
				}
			}
		}


		if (attempt === 0) {
			alert ("Вы исчерпали количество попыток ввода!");
		}

		if (remainingLetters === 0) {
			alert (answerArray.join(" "));
			alert ("Отлично! Было загадано слово" + " - " + word);
		}

