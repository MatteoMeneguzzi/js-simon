// 	Un alert() espone 5 numeri generati casualmente.
//  Da li parte un timer di 30 secondi.
//         Dopo 30 secondi l'utente deve inserire, uno alla volta,
//     i numeri che ha visto precedentemente, tramite il prompt().
//     Dopo che sono stati inseriti i 5 numeri,
//         il software dice quanti e quali dei numeri da indovinare sono stati individuati.

$(document).ready(function () {
	// Alert espone 5 numeri generati casualmente

	var numbers = [];

	for (var i = 0; i < 5; i++) {
		var number = Math.floor(Math.random() * 100 + 1);

		if (!numbers.includes(number)) {
			numbers.push(number);
		} else {
		}

		console.log(numbers);
	}
	alert(numbers);

	// Timer di 30 secondi

	// REFS

	var display = $(".display");

	var secondi = 2;

	var countDown = setInterval(function () {
		if (secondi === 0) {
			clearInterval(countDown);
			// Utente inserisce i numeri che ha visto

			var userNumbers = [];

			for (var i = 0; i < 5; i++) {
				var userNumber = parseInt(
					prompt("Inserisci i numeri che hai visualizzato").trim()
				);

				if (!userNumbers.includes(userNumber) && !isNaN(userNumber)) {
					userNumbers.push(userNumber);
				} else {
				}

				console.log(userNumbers);

				// il software dice quanti e quali dei numeri da indovinare sono stati individuati.

				var correctNumbers = [];

				for (var i = 0; i < numbers.length; i++) {
					if (numbers.includes(userNumber)) {
						correctNumbers.push(userNumber);
						console.log(correctNumbers);
					} else {
						console.log("numero sbagliato");
					}
				}
				console.log("Hai indovinato questi numeri: " + correctNumbers);
			}
		} else {
			display.text(secondi);
			secondi--;
		}
	}, 1000);
});

// Funzioni
