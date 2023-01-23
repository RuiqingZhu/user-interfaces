/* TEST - YOUR NAME AND ID HERE */

//----- DO NO TOUCH BELOW ----//
function output(){
	alert(str);
}
//----- DO NOT TOUCH ABOVE ----//

function tipCalculator() {
	//declare variables
	let billAmount = document.getElementById("totalBill").value;
	let service = document.getElementById("service").value;
	let numPeople = document.getElementById("peopleCount").value;

	//validate input
	if (billAmount === "" || service == 0) {
		alert("Please fill out all the fields");
		return;
	}

	//validate number of people is empty, or 0 or 1
	if (numPeople === "" || numPeople <= 1) {
		numPeople = 1;
	}

	//calculate
	let billTip = (billAmount * service).toFixed(2);
	let billTotal = billAmount/100 + billTip;
	let tipPerPerson = (billTip / numPeople).toFixed(2);
	let billPerPerson = (billTotal / numPeople).toFixed(2);

	//display the tip
	document.getElementById("tipAndTotal").style.display = "block";
	document.getElementById("tip").innerHTML = `Tip/Person: ${tipPerPerson}$`;
	document.getElementById("total").innerHTML = `Total/Person: ${billPerPerson}$`;
}

document.getElementById("calculate").onclick = function () {
	tipCalculator();
}

function tooManyWords( slogan ){

}
 