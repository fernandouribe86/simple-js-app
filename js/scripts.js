const pokemonRepository = (function() {
		const pokemonList = [
			{
				name: 'Bulbasaur',
				types: ['grass' , 'poison'],
				height: '.7',
			},

			{
				name: 'Ivysaur',
				types: ['grass' , 'poison'],
				height: '1.7',
			},

			{
				name: 'Venusaur',
				types: ['grass' , 'poison'],
				height: '1',
			},

			{
			name: 'Charmander',
			types: ['fire'],
			height: '.7',

			},

			{
				name: 'Charmeleon',
				types: ['fire'],
				height: '1',
			},

			{
				name: 'Charizard',
				types: ['fire' , 'flying'],
				height: '1.7',
			}
		];

		function add(pokemon) {
			if(typeof(pokemon)==='object'){
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

	  return {
		add: add,
		search: search,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
	 };

})();
const pokemonArray = pokemonRepository.getAll();
console.log(pokemonArray);
console.log(pokemonRepository.add({name: 'Pikachu', types: ['electric'], height: '.9'}));

console.log(pokemonRepository.getAll());

pokemonArray.forEach(function(pokemon){
	pokemonRepository.addListItem(pokemon);
});


// HIDING OLD/EXPERIMENTAL CODE FOR REFERENCE

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
