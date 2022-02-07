
	let pokemonRepository = (function() {
	let pokemonList = [
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

	  return {
		add: add,
		getAll: getAll
	 };

})();

console.log(pokemonRepository.getAll());
console.log(pokemonRepository.add({name: 'Pikachu', types: ['electric'], height: '.9'}));

/* THIS IS THE OLD CODE

function printArrayDetails(list){
	for (let i = 0; i < list.length; i++) {
		if(list[i].height > 1){
			document.write('<p>' + list[i].name + ' (height: ' + list[i].height + ') - Wow, that\'s big!' + '</p>');
		} else {document.write('<p>' + list[i].name + ' (height: ' + list[i].height + ')' + '</p>');
		}
	}
};
//BEFORE THE IIFE
console.log(pokemonList);
pokemonList.forEach(function(pokemon){
	if(pokemon.height > 1){
		document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!' + '</p>');
	} else {document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')');
	}
});

*/
//THIS IS THE NEW CODE WITH IIFE
console.log(pokemonRepository.getAll());

pokemonRepository.getAll().forEach(function(pokemon){
	if(pokemon.height > '1'){
		document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!' + '</p>');
	} else {document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')');
	}
});



/* let pokemonSearch = prompt('Search to see if you have caught this pokemon before!');
console.log(pokemonSearch);

let pokemonArray = pokemonRepository.getAll();
console.log(pokemonArray);

Object.keys(pokemonArray).forEach(function(pokemon){
	if(pokemon.height > '1'){
	document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ') - Wow, that\'s big!' + '</p>');
} else {document.write('<p>' + pokemon.name + ' (height: ' + pokemon.height + ')');
}});

document.write('<p>You are searching for ' + pokemonSearch + '. Your result is below.</p>');
let filteredPokemon = [];
pokemonArray.forEach(pokemon => {
	if(pokemon.name.includes(pokemonSearch)) filteredPokemon.push(pokemon);
});
filteredPokemon.forEach(pokemon => {
	document.write('<p>' + pokemon.name + '</p>');
}); */
