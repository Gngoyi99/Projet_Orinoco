//Page d'acceuil//

//Création du produit par la function CreationProduit//
function CreationProduit(
  teddiesImageUrl,
  teddiesName,
  teddies_Id,
  teddiesColors,
  teddiesDescription,
  teddiesPrice
) {
  let div = document.createElement("div");
  div.classList.add("Product");
  document.getElementById("ProduitDispo").appendChild(div);
  //Création du produit par le html avec les valeurs de la function CreationProduit//
  div.innerHTML = `
<a href="page-produit.html?${teddies_Id}">
    <img src="${teddiesImageUrl}" alt="ours en peluche"/>
    <br/><h3 class="Titre-Ours">${teddiesName}</h3>
    <br/><h3 class="Titre-Couleur">Color: ${teddiesColors}</h4>
    <br/><h3 class="Titre-Prix">${teddiesPrice / 100}€</h5> 
</a>   `;
}
//requete fetch pour obtenir les produits de l'API//
fetch("http://localhost:3000/api/teddies")
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    //Creation d'une boucle pour creer chaque produits de l'API //
    for (let i in value) {
      CreationProduit(
        value[i].imageUrl,
        value[i].name,
        value[i]._id,
        value[i].colors,
        value[i].description,
        value[i].price
      );
    }
  })
  .catch(function (err) {
    //une erreur est survenue
  });
