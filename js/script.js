// // 	Un alert() espone 5 numeri generati casualmente.
// //  Da li parte un timer di 30 secondi.
// //         Dopo 30 secondi l'utente deve inserire, uno alla volta,
// //     i numeri che ha visto precedentemente, tramite il prompt().
// //     Dopo che sono stati inseriti i 5 numeri,
// //         il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// $(document).ready(function () {
// // Alert espone 5 numeri generati casualmente

// var numbers = [];

// for (var i = 0; i < 5; i++) {
// 	var number = Math.floor(Math.random() * 100 + 1);

// 	if (!numbers.includes(number)) {
// 		numbers.push(number);
// 	} else {
// 	}

// 	console.log(numbers);
// }
// alert(numbers);

// // Timer di 30 secondi

// // REFS

// var display = $(".display");

// var secondi = 2;

// var countDown = setInterval(function () {
// 	if (secondi === 0) {
// 		clearInterval(countDown);

// 		// Utente inserisce i numeri che ha visto

// 		var userNumbers = [];

// 		for (var i = 0; i < 5; i++) {
// 			var userNumber = parseInt(
// 				prompt("Inserisci i numeri che hai visualizzato").trim()
// 			);

// 			if (!userNumbers.includes(userNumber) && !isNaN(userNumber)) {
// 				userNumbers.push(userNumber);
// 			} else {
// 			}

// 			console.log(userNumbers);

// 			console.log(numbers);

// 			// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// 			// var correctNumbers = [];

// 			// if (numbers.includes(userNumbers[i])) {
// 			// 	correctNumbers.push(userNumber[i]);
// 			// 	console.log(correctNumbers[i]);
// 			// } else {
// 			// 	console.log("numero sbagliato");
// 			// }

// 			// console.log("Hai indovinato questi numeri: " + correctNumbers);
// 		}
// 	} else {
// 		display.text(secondi);
// 		secondi--;
// 	}
// }, 1000);

// var arr1 = [1, 3, 7, 54];

// var arr2 = [1, 8, 2, 34];

// for (var i = 0; i < arr1.length; i++) {
// 	console.log(arr2[i]);
// 	if (arr1.includes(arr2[i])) {
// 		console.log("il numero è contenuto");
// 	} else {
// 		console.log("il num non è contenuto");
// 	}
// }

// $(document).ready(function () {
// 	var numMax = 100; //numeri totali
// 	// var numBombe = 16; //numero bombe
// 	// var listaBombe = [];

// 	console.log(numMax);

// while (listaBombe.length < numBombe) {
// 	var bomba = genNum(numMax);

// 	if (!listaBombe.includes(bomba)) {
// 		listaBombe.push(bomba);
// 	}
// }
// console.log(listaBombe);
// });

// Funzioni //
// function genNum(max) {
// 	return Math.floor(Math.random() * max) + 1;
// }

// // 	Un alert() espone 5 numeri generati casualmente.
// //  Da li parte un timer di 30 secondi.
// //         Dopo 30 secondi l'utente deve inserire, uno alla volta,
// //     i numeri che ha visto precedentemente, tramite il prompt().
// //     Dopo che sono stati inseriti i 5 numeri,
// //         il software dice quanti e quali dei numeri da indovinare sono stati individuati.

$(document).ready(function () {
	// var numMax = 100; //numeri totali
	// var numbers = 5; //numero bombe
	// var listNum = [];

	// console.log(numMax);

	// while (listNum.length < numbers) {
	// 	var number = genNum(numMax);

	// 	if (!listNum.includes(number)) {
	// 		listNum.push(number);
	// 	}
	// }
	// console.log(listNum);

	// GENERARE 5 NUMERI CASUALI

	var numMax = 100;
	var numbers = 5;
	var listNum = [];

	while (listNum.length < numbers) {
		var number = genNumber(numMax);

		if (!listNum.includes(number)) {
			listNum.push(number);
		}
	}
	console.log(listNum);

	// TIMER

	var display = $(".display");

	var secondi = 3;

	var countDown = setInterval(function () {
		if (secondi === 0) {
			clearInterval(countDown);

			// display.text("Scopri quanti numeri hai indovinato!");
			// Inserisci i numeri visualizzati

			var numbersUser = 5;
			var listNumUser = [];

			while (listNumUser.length < numbersUser) {
				var numberUser = parseInt(
					prompt("Inserisci i numeri visualizzati").trim()
				);

				if (!listNumUser.includes(numberUser)) {
					listNumUser.push(numberUser);
				}
			}
			console.log(listNumUser);

			//   il software dice quanti e quali dei numeri da indovinare sono stati individuati.

			var correctNumbers = [];

			for (var i = 0; i < listNum.length; i++) {
				if (listNumUser.includes(listNum[i])) {
					correctNumbers.push(listNum[i]);
				} else {
					// console.log("il numero non è contenuto");
				}
			}

			if (correctNumbers.length > 0) {
				if (correctNumbers.length > 1) {
					display.text(
						"Hai indovinato i numeri: " +
							correctNumbers +
							"!!! \nHai indovinato " +
							correctNumbers.length +
							" numeri!!! "
					);
				} else {
					display.text(
						"Hai indovinato il numero: " +
							correctNumbers +
							"!!! \nHai indovinato " +
							correctNumbers.length +
							" numero!!! "
					);
				}
			} else {
				display.text("Non hai indovinato nessun numero :(");
			}
		} else {
			display.text(secondi);
			secondi--;
		}
	}, 1000);
});

// Funzioni //
// function genNum(max) {
// 	return Math.floor(Math.random() * max) + 1;
// }
function genNumber(max) {
	return Math.floor(Math.random() * max) + 1;
}
