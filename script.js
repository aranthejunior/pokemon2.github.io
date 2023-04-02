function fetchAllPokemon() {
    fetch('https://pokeapi.co/api/v2/pokemon?limit=36')
      .then((response) => response.json())
      .then((data) => {
        const results = data.results;
        for (let i = 0; i < results.length; i++) {
          const address = results[i].url;
          fetch(address)
            .then((response) => response.json())
            .then((data) => {
              const name = data.name;
              const image = data.sprites.front_default;
              const type = data.types[0].type.name;
  
              const pokemonWrapper = document.getElementById("PokemonWrapper");
              const pokemonDiv = document.createElement("div");

              pokemonDiv.setAttribute("id","pokeCard");
              pokemonDiv.classList.add("card",`${type}`)
  
              const pokeTitle = document.createElement("h2");
              const pokeIMG = document.createElement("img");
              const pokeType = document.createElement("h3");

              pokeTitle.innerText = `Name: ${name}`;
              pokeIMG.src = `${image}`;
              pokeType.innerText = `Type: ${type}`;

              pokemonWrapper.appendChild(pokemonDiv);
              pokemonDiv.appendChild(pokeTitle);
              pokemonDiv.appendChild(pokeIMG);
              pokemonDiv.appendChild(pokeType);
            });
        }
      });
  }