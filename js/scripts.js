let pokemonList = [
	{
		name: 'Bulbasaur',
		types: ['grass' , 'poison'],
		height: .7,
	},

	{
		name: 'Ivysaur',
		types: ['grass' , 'poison'],
		height: 1.7,
	},

	{
		name: 'Venusaur',
		types: ['grass' , 'poison'],
		height: 1,
	}
];

console.log(pokemonList);



for (let i = 0; i < pokemonList.length; i++) {
	if(pokemonList[i].height > 1){
		document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ') - Wow, that\'s big!', '<br>');
	} else {document.write(pokemonList[i].name + ' (height: ' + pokemonList[i].height + ')', '<br>');
}
};
