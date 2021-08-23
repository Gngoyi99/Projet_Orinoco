/** let elt = document.getElementById('ProduitDispo');
 
elt.innerHTML = "<div><h3>Nobert</h3><h3>Tan, Chocolate, Black, White</h3><h3>2900</h3></div>";
elt.style.width = "400px"; 
elt.style.border = "2px black solid"; 
elt.style.textAlign = "center"; 

/** 
let div = document.createElement("div");

document.getElementById("ProduitDispo").appendChild(div);**/

let teddy = {
    name: 'Nobert',
    color: 'Tan, Chocolate, Black, White',
    price: 2900,
  };
 
  
ProduitDispo.style.border = "2px black solid";
ProduitDispo.style.textAlign = "center";  

 
let teddyName = teddy['name'];
let teddyColor = teddy['color'];
let teddyPrice = teddy.price;


function CreationProduit(){

let div = document.createElement('div');
div.classList.add('Product');
document.getElementById('ProduitDispo').appendChild(div)  

div.innerHTML = `<img src="/Images/teddy_1.jpg" alt="ours en peluche"/>
<br/>Teddy: ${teddyName}
<br/>Color: ${teddyColor} 
<br/>${teddyPrice}
<br/><button>Voir le produit</button>`;


}

CreationProduit()
CreationProduit()
CreationProduit()

