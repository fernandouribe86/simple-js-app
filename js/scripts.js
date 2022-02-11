const pokemonRepository = (function() {
		const pokemonList = [];
		let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

		function add(pokemon) {
			if(
				typeof pokemon === 'object' &&
			"name" in pokemon
			// && "detailsUrl" in pokemon &&
		) {
			pokemonList.push(pokemon);
		} else{
			console.log('This input is now allowed.')
		}
	}; //added typeof parameter

	function getAll() {
		return pokemonList;
	};

	function search(pokemonList, pokemon){
		let result = pokemonList.filter(p => p.name === pokemon);
		return result;
	};

	function addListItem(pokemon){
		let container1 = document.querySelector('.pokemon-list');
		let listItem = document.createElement('li');
		let button = document.createElement('button');
		button.innerHTML = pokemon.name;
		button.classList.add('pokedex-button');
		listItem.appendChild(button);
		container1.appendChild(listItem);
		button.addEventListener('click', () => {
			showDetails(pokemon);
		});
	};

	function showDetails(pokemon){
		console.log(pokemon.name)
	}

	function showLoadingMessage(){
		let loadingContainer = document.querySelector('#loading-container');

		loadingContainer.innerHTML = 'Loading Pokedéx...';
			// loadingContainer.removeAttribute('hidden');
	};

	function hideLoadingMessage(){
		let loadingContainer = document.querySelector('#loading-container');
		loadingContainer.setAttribute('hidden', true);
	};

	function loadList(){
		return fetch(apiUrl).then(function(response){
			return response.json();
		}).then (function (json) {
			json.results.forEach(function(item){
				let pokemon = {
					name: item.name,
					detailsUrl: item.url
				};
				add(pokemon);
			});
		}).catch(function (e){
			console.error(e);
		});
	};

	function loadDetails(item) {
		let url = item.detailsUrl;
		return fetch(url).then(function (response) {
			return response.json();
		}).then(function (details) {
			item.imageUrl = details.sprites.front_default;
			item.height = details.height;
			item.types = details.types;
		}).catch(function (e) {
			console.error(e);
		});
	};

	function showDetails(item) {
		loadDetails(item).then(function () {
			console.log(item);
		});
	}

	return {
		add: add,
		search: search,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
		loadList: loadList,
		loadDetails: loadDetails,
		showLoadingMessage: showLoadingMessage,
		hideLoadingMessage: hideLoadingMessage,
	 };

})();

pokemonRepository.showLoadingMessage();

setTimeout( function(){

pokemonRepository.loadList().then(function(){
	pokemonRepository.getAll().forEach(function(pokemon){
		pokemonRepository.addListItem(pokemon);
	});
	pokemonRepository.hideLoadingMessage();
});}, 5000);







// HIDING OLD/EXPERIMENTAL CODE FOR REFERENCE

// const pokemonArray = pokemonRepository.getAll();
// console.log(pokemonArray);
// console.log(pokemonRepository.add({name: 'Pikachu', types: ['electric'], height: '.9'}));
//
// console.log(pokemonRepository.getAll());
//
// pokemonArray.forEach(function(pokemon){
// 	pokemonRepository.addListItem(pokemon);
// });

// const pokemonSearchTool = document.querySelector('.search-icon');
// pokemonSearchTool.addEventListener('click', () => {
// 	searchTextArea();
// });
//
// function searchTextArea(pokemon){
// 	document.write('<label class="standard-label" for="contact-message">' + 'Search:' + '</label>' + '<textarea id="contact-message" maxlength="240">'+'</textarea>');
// }

// pokemonArray.forEach(function(pokemon){
// 	if(pokemon.height > '1'){
// 		document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!' + '</p>');
// 	} else {document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')');
// 	}
// });



//HIDING SEARCH CODE FOR NOW WHILE I LEARN MORE

// let pokemonSearch = prompt('Search to see if you have caught this pokemon before!');
// console.log(pokemonSearch);
//
// let pokemonResult = pokemonRepository.search(pokemonArray, pokemonSearch);
// console.log(pokemonResult);

// if (pokemonResult.length > 0){
// 	document.write('<p> Search Result: You have already found this pokemon. </p>')
// }else{document.write('<p> Search Result: You have not found this pokemon yet. </p>')
// };
