var url = 'https://restcountries.eu/rest/v1/name/';
var countriesList = $('.countries');
var capital = $('.capital');
var population = $('.population');

$('#search').click(searchCountries);


function searchCountries() {
 	var countryName = $('#country-name').val();
	if(!countryName.length) countryName = 'Poland';
	$.ajax({
  		url: url + countryName,
  		method: 'GET',
  		success: showCountriesDetails
  	});
}

function showCountriesDetails(resp) {
	resp.forEach(function(element) {
   		$('<li>').text(element.name).appendTo(countriesList);
   		$('<li>').text(element.capital).appendTo(capital);
   		$('<li>').text(element.population).appendTo(population);
   		});
}
