let numberOfButtons = prompt("Acesta este un joc unde alegi un număr finit de butoane, și după va trebui să ghicești care este butonul câștigător. Câte butoane dorești să conțină jocul?");
let buttonValue = 1;
		
function generateButtons() {
	while (buttonValue <= numberOfButtons) {
	const div = document.getElementById('buttons');
	div.innerHTML += '<button type="button" class="btn btn-outline-secondary btn-lg px-4 ' + buttonValue + '" value="' + buttonValue + '" onclick="guessTheButton(' +buttonValue + ');">Buton ' + buttonValue + '</button>';
	++buttonValue;
	}	
}

window.onload = generateButtons;
let randomNumber = Math.floor(Math.random() * numberOfButtons) + 1;
		
function guessTheButton(value) {
	if (randomNumber == value) {
		alert("Felicitări, ai ales butonul câștigător! Jocul se va restarta!");
		location.reload();
	}
}