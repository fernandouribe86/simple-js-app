const pokemonRepository=function(){const t=[];let e="https://pokeapi.co/api/v2/pokemon/?limit=150";function n(e){"object"==typeof e&&"name"in e?t.push(e):console.log("This input is now allowed.")}function o(t){let e=t.detailsUrl;return fetch(e).then(function(t){return t.json()}).then(function(e){t.imageUrl=e.sprites.front_default,t.height=e.height;let n="";e.types.forEach(t=>n+=t.type.name+" "),t.types=n,t.weight=e.weight}).catch(function(t){console.error(t)})}function i(t){o(t).then(function(){!function(t){let e=$(".modal-title"),n=$(".modal-body");e.empty(),n.empty();let o=$('<h3 class = "text-capitalize text-center">'+t.name+"</h3>"),i=document.createElement("img");i.classList.add("modal-img"),i.src=t.imageUrl;let a=$("<p>Height: "+t.height+"</p>"),c=$("<p>Weight: "+t.weight+"</p>"),l=$('<p class="text-capitalize">Types: '+t.types+"</p>");e.append(o),n.append(i),n.append(a),n.append(c),n.append(l)}(t)})}return{add:n,search:function(t,e){return t.filter(t=>t.name===e)},getAll:function(){return t},addListItem:function(t){let e=document.querySelector(".pokemon-list"),n=(document.createElement("li"),document.createElement("button"));n.innerHTML=t.name,n.classList.add("btn","btn-light","group-list-item","text-center","text-capitalize"),n.setAttribute("data-toggle","modal"),n.setAttribute("data-target","#pokemonList-modal"),e.appendChild(n),function(t,e){t.addEventListener("click",function(){i(e)})}(n,t)},showDetails:i,loadList:function(){return fetch(e).then(function(t){return t.json()}).then(function(t){t.results.forEach(function(t){n({name:t.name,detailsUrl:t.url})})}).catch(function(t){console.error(t)})},loadDetails:o}}();pokemonRepository.loadList().then(function(){pokemonRepository.getAll().forEach(function(t){pokemonRepository.addListItem(t)})});