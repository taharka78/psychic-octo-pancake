// App js
/**
 * On form submit send request to server for retrieve the roman value of my arabic number.
 */
function submitForm() {
	let number = document.getElementById("arabic-number").value;
	fetch("/arabic/convert",{
		method: "POST",
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json'
		  },
		body : JSON.stringify({
			number 
		})
	})
}

var evtSource = new EventSource('/subscribe');

evtSource.onmessage = (e) => {
  let data = JSON.parse(e.data);
  let number = document.getElementById("arabic-number").value;
  document.getElementById("response-message").textContent = (data.error) ? data.error.message : `The Roman number of ${number} is ${data.result}`;
}

evtSource.onerror = () => {
	console.log("EventSource failed:");
};



