//Récupération de la commande

let contenu = JSON.parse(localStorage.getItem("contenu"));

//Récupération prix
const PrixTotal = localStorage.getItem("PrixTotal");

//html
const AffichageCommande = document.querySelector(".AffichageCommande");

AffichageCommande.innerHTML = `
        <div id="Commande-texte1">
          Commande n°<strong>${contenu.orderId}</strong> </strong>
        </div>
        <div id="Commande-texte2">
          Merci <strong>${contenu.contact.firstName}</strong>, Votre commande a été enregistrée. Nous vous tiendrons
          informé par e-mail lorsque les articles de votre commande auront été
          expédiés.
        </div>
        <div id="Commande-texte3">
          Votre commande sera expédiée à l'adresse suivante:
          <strong>${contenu.contact.address} à ${contenu.contact.city}</strong>
          <br />Montant total de la commande : <strong>${PrixTotal}€</strong><br />Moyen
          de paiement sélectionné : Carte bancaire
        </div>
`;
//Retirer les produits du localStorage après la confirmation de commande

function ViderLocalstorage(key) {
  localStorage.removeItem(key);
}
ViderLocalstorage("PrixTotal");
ViderLocalstorage("contenu");
ViderLocalstorage("contact");
ViderLocalstorage("products");

if (localStorage === null) {
  window.location.href = "index.html";
}
