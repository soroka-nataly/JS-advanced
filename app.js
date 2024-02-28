'use strict';


async function getCity() {
	try {
		const coord = await getCoord();

		const cityResponse = await fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=' + coord[0] + '&longitude=' +coord[1]);
		const city = await cityResponse.json();
		console.log(city.city);
	}
	catch(e) {
		console.log(e);
	}

	
}


async function getCoord() {	
	return new Promise((resolve, reject) => {
		navigator.geolocation.getCurrentPosition(
		(pos) => {
			resolve([pos.coords.latitude, pos.coords.longitude])
		},

		(err) => {
			reject();
		})
	}); 
}


getCity();
console.log('End');