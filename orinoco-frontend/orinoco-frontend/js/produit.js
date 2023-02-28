//Page produit//

////Création du produit par la function Produit////
function Produit(imageUrl, name, description, colors, _id, price) {
  let AffichageProduct = document.getElementById("SelectionProduct");

  AffichageProduct.innerHTML = `
    <img class="img-PageProduit" src="${imageUrl}" alt="ours en peluche"/>
    <div>
        <br> <h3 class="Ours-PageProduit">${name}</h3>
        <br> <h4 class="Description-PageProduit">${description}</h4>
        <br> <h5 class="Id-PageProduit">${_id}</h5>
        <form>
            <label for="colors_choice">Choix de la couleur</label>
                <select name="colors_choice" id="colors_choice">
                </select>
            <label for="quantite_produit">Choix de la quantité </label>    
                <select name="quantite" id="quantite">
                </select>
        </form>
        <h3 class="Prix-PageProduit"><br> ${price}€</h3>
        <br> <button id="btn_AjouterPanier" type="submit" name="btn_Ajouter">Ajouter au panier</button>
    </div>    
        `;
}

///recuperation url///
const queryString_url_id = window.location.search;
console.log(queryString_url_id);

//methode slice pour garder que l'ID//
const _Id = queryString_url_id.slice(1);
//requete feth(get) pour recuperer uniquement un objet//
fetch(`http://localhost:3000/api/teddies/${_Id}`)
  .then(function (res) {
    if (res.ok) {
      return res.json();
    }
  })
  .then(function (value) {
    //Le produit avec son image,son nom ect...//
    {
      Produit(
        value.imageUrl,
        value.name,
        value.description,
        value.colors,
        value._id,
        value.price / 100
      );
    }
    //OPTION: Couleur
    const OptionQuantite = value.colors;

    let structureOptions = [];
    //BOUCLE POUR LES COULEURS
    for (let i = 0; i < OptionQuantite.length; i++) {
      structureOptions =
        structureOptions +
        `<option value="${OptionQuantite[i]}">${OptionQuantite[i]}</option>`;
    }
    //QUANTITE
    const StructureQuantite = `
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        `;
    const AffichageQuantite = document.querySelector("#quantite");
    AffichageQuantite.innerHTML = StructureQuantite;

    //injection des couelurs dans le select
    const ColorInSelect = document.getElementById("colors_choice");
    ColorInSelect.innerHTML = structureOptions;

    const Form = document.querySelector("#colors_choice");

    const Btn_panier = document.querySelector("#btn_AjouterPanier");

    Btn_panier.addEventListener("click", function (event) {
      event.preventDefault();

      const ChoixForm = Form.value;
      ///console.log(ChoixForm);

      //Mettre la Quantité dans une variable
      const ChoixQuantite = AffichageQuantite.value;

      let optionsProduit = {
        name: value.name,
        color: ChoixForm,
        quantite: ChoixQuantite,
        id: value._id,
        prix: (value.price * ChoixQuantite) / 100,
      };

      //LocalStorage//
      ////L'endroit où les key et value vont s'afficher
      let products = JSON.parse(localStorage.getItem("products"));

      ////Ajout de produit dans le Localstorage
      const AjoutProduitLocalStorage = () => {
        products.push(optionsProduit);
        localStorage.setItem("products", JSON.stringify(products));
      };

      ///Produit déja présent dans le LocalStorage...
      if (products) {
        AjoutProduitLocalStorage();
      }
      ///Produit absent présent dans le LocalStorage...
      else {
        products = [];
        AjoutProduitLocalStorage();
      }
    });
  })
  .catch(function (err) {
    //une erreur est survenue///
  });
