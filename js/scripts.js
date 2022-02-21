const pokemonRepository = (function() {
		const pokemonList = [];
		let apiUrl = 'https://pokeapi.co/api/v2/pokemon/?limit=150';

		function add(pokemon) {
			if(typeof pokemon === 'object' &&
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
		let listItemButton = document.createElement('button');
	  listItemButton.innerHTML = pokemon.name;
		listItemButton.classList.add('btn', 'btn-light', 'group-list-item', 'text-center', 'text-capitalize');

    listItemButton.setAttribute('data-toggle', 'modal');
    listItemButton.setAttribute('data-target', '#pokemonList-modal');

    container1.appendChild(listItemButton);

    buttonEventListener(listItemButton, pokemon);

    function buttonEventListener(button, pokemon){
      button.addEventListener('click', function(){
        showDetails(pokemon);
      })
    }
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
			let s = "";
        details.types.forEach(x=>s+=x.type.name+" ");
			  item.types = s;
      item.weight = details.weight;
      // item.types = [];

		}).catch(function (e) {
			console.error(e);
		});
	};

  function showDetails(pokemon){
    loadDetails(pokemon).then(function(){
      showModal(pokemon)
    });
  };

	function showModal(pokemon) {
    let modalTitle = $('.modal-title');
    let modalBody = $('.modal-body')

    //Ensuring the modals are empty to start
    modalTitle.empty();
    modalBody.empty();

    let titleElement = $('<h3 class = "text-capitalize text-center">' + pokemon.name + '</h3>');

		let imgElement = document.createElement('img');
    imgElement.classList.add('modal-img');
		imgElement.src = pokemon.imageUrl;

    let heightElement = $('<p>' + 'Height: ' + pokemon.height + '</p>');

    let weightElement = $('<p>' + 'Weight: ' + pokemon.weight + '</p>');

    let typesElement = $('<p class="text-capitalize">' + 'Types: ' + pokemon.types + '</p>')

    modalTitle.append(titleElement);
		modalBody.append(imgElement);
		modalBody.append(heightElement);
    modalBody.append(weightElement);
    modalBody.append(typesElement);
	}

	return {
		add: add,
		search: search,
		getAll: getAll,
		addListItem: addListItem,
		showDetails: showDetails,
		loadList: loadList,
		loadDetails: loadDetails,
	 };

})();
//END IIFE

pokemonRepository.loadList().then(function(){
	pokemonRepository.getAll().forEach(function(pokemon){
		pokemonRepository.addListItem(pokemon);
	});
});

// function hideModal(){
//   let modalContainer = document.querySelector('#modal-container');
//   modalContainer.classList.remove('is-visible');
// };

// window.addEventListener('keydown', (e) => {
//   let modalContainer = document.querySelector('#modal-container');
//   if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
//     hideModal();
//   }
// });
