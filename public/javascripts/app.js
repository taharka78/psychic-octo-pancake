// App js
/**
 * On form submit send request to server for retrieve the roman value of my arabic number.
 */
function submitForm() {
	let number = document.getElementById("arabic-number").value;
	fetch("http://localhost:3000/arabic/convert",{
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		body : JSON.stringify({
			number 
		})
	}).then(async (responseData) => {
		let data = await responseData.json();
		document.getElementById("response-message").textContent = `The Roman number of ${number} is ${data.result}`
	}).catch((err) => {
		document.getElementById("response-message").textContent = `Please send a valid number`;
	})
}


