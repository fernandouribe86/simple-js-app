
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

	  return {
		add: add,
		search: search,
		getAll: getAll
	 };



})();
const pokemonArray = pokemonRepository.getAll();
console.log(pokemonArray);
console.log(pokemonRepository.add({name: 'Pikachu', types: ['electric'], height: '.9'}));


console.log(pokemonRepository.getAll());

pokemonArray.forEach(function(pokemon){
	if(pokemon.height > '1'){
		document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!' + '</p>');
	} else {document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')');
	}
});

let pokemonSearch = prompt('Search to see if you have caught this pokemon before!');
console.log(pokemonSearch);

let pokemonResult = pokemonRepository.search(pokemonArray, pokemonSearch);
console.log(pokemonResult);

if (pokemonResult.length > 0){
	document.write('<p> Search Result: You have already found this pokemon. </p>')
}else{document.write('<p> Search Result: You have not found this pokemon yet. </p>')
};
