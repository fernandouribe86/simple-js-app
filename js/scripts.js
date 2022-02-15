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
		//NEW CODE HERE//
	}

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
		loadDetails(item).then(function showModal (title, text) {
			let modalContainer = document.querySelector('#modal-container');

			modalContainer.innerHTML = '';

			let modal = document.createElement('div');
			modal.classList.add('modal');

			let closeButtonElement = document.createElement('button');
			closeButtonElement.classList.add('modal-close');
			closeButtonElement.innerText = 'return to pokedex';
			closeButtonElement.addEventListener('click', hideModal);

			let titleElement = document.createElement ('h3');
			titleElement.innerText = item.name;

			let imgElement = document.createElement('img');
			imgElement.src = item.imageUrl;

			let contentElement = document.createElement('p');
			contentElement.innerText = 'height: ' + item.height;

			modal.appendChild(titleElement);
			modal.appendChild(imgElement);
			modal.appendChild(contentElement);
			modal.appendChild(closeButtonElement);
			modalContainer.appendChild(modal);

			modalContainer.classList.add('is-visible');

			modalContainer.addEventListener('click', (e) => {
				let target = e.target;
				if(target === modalContainer){
					hideModal();
				}
			});
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
	 };

})();
//END IIFE

pokemonRepository.loadList().then(function(){
	pokemonRepository.getAll().forEach(function(pokemon){
		pokemonRepository.addListItem(pokemon);
	});
});

function hideModal(){
  let modalContainer = document.querySelector('#modal-container');
  modalContainer.classList.remove('is-visible');
};

window.addEventListener('keydown', (e) => {
  let modalContainer = document.querySelector('#modal-container');
  if (e.key === 'Escape' && modalContainer.classList.contains('is-visible')) {
    hideModal();
  }
});
