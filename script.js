//let api_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin";
//let coin_name = "";
//let coin_abbr = "";
//let curr_value = "";
//let image_url = "";

//function openHelp() {
//	console.log("CONTACTING API...");
//	fetch(api_url).then((response) => {
//		console.log("GOT RESPONSE");
//		return response.json();
//	}).then(async (json) => {
//		console.log("PARSING JSON...");
//		coin_name = json["name"];
//		coin_abbr = json["symbol"];
//		curr_value = json["current_price"];
//		image_url = json["image"];
		
//		let crypto_info = document.getElementById("crypto_info")
		
//		console.log("ASSIGNING VALUES...");

//		crypto_info.innerHTML = "<hr><p>" + await coin_name + "</p>";
//		crypto_info.innerHTML += "<p>" + await coin_abbr + "</p>"
//		crypto_info.innerHTML += "<p>" + await curr_value + "</p>"
//		crypto_info.innerHTML += '<img src="' + await image_url + '"></img>'
//
//	});
//};



//document.getElementById("crypto").addEventListener("click", openHelp);

var count = 0;

document.getElementById("crypto").addEventListener("click", function(event) {
	event.preventDefault();

	count += 1;
	const api_url = "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin";
	fetch(api_url)
		.then(function(response) {
			return response.json();
		})
		.then(function(json) {
			console.log(json);
			var info_string = "<hr>";
			
			info_string += "<h2>" + json[0]["symbol"] + " - " + json[0]["name"] + "</h2>";
			info_string += '<img src="' + json[0]["image"] + '"></img>';
			info_string += "<p>Current value: " + json[0]["current_price"] + "</p>";

			document.getElementById("crypto_info").innerHTML = info_string;

		});
	
	if (count % 2 == 0) {
		document.getElementById("crypto_info").classList.add("hide");
	}
	else {
		document.getElementById("crypto_info").classList.remove("hide");
	}

});

