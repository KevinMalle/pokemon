function getPokemonIdFromName(name) {
  let sum = 0;
  for (let i = 0; i < name.length; i++) {
    sum += name.charCodeAt(i);
  }
  return (sum % 1025) + 1;
}

document
  .getElementById("pokemonForm")
  .addEventListener("submit", function (event) {
    event.preventDefault(); // Empêche la soumission du formulaire

    const prenom = document
      .getElementById("message")
      .value.trim()
      .toLowerCase();
    const pokemonId = getPokemonIdFromName(prenom);
    const apiUrl = `https://tyradex.vercel.app/api/v1/pokemon/${pokemonId}`;

    fetch(apiUrl)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Pokémon non trouvé");
        }
        return response.json();
      })
      .then((data) => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `
          <h2>Voici votre Pokémon :</h2>
          <img src="${data.sprites.regular}" alt="${data.name.fr}">
          <p>Nom : ${data.name.fr}</p>
          <p>ID : ${data.pokedex_id}</p>
        `;
      })
      .catch((error) => {
        const resultDiv = document.getElementById("result");
        resultDiv.innerHTML = `<p>${error.message}</p>`;
        console.error("Erreur:", error);
      });
  });
