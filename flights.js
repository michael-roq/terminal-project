fetch("https://skyscanner-skyscanner-flight-search-v1.p.rapidapi.com/apiservices/autosuggest/v1.0/UK/GBP/en-GB/?query=Stockholm", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "skyscanner-skyscanner-flight-search-v1.p.rapidapi.com",
		"x-rapidapi-key": "0e3e98ee90msh7a59b49cde36917p1d2ddfjsn9aa825c1415e"
	}
})
.then(response => {
	console.log(response);
    console.log(response.json());
})
.catch(err => {
	console.error(err);
});