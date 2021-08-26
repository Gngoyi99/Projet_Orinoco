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


let teddyImage = teddy.image;
let teddyName = teddy['name'];
let teddyColor = teddy['color'];
let teddyPrice = teddy.price;


function CreationProduit(teddyImage,teddyName,teddyColor,teddyPrice){
 


let div = document.createElement('div');
div.classList.add('Product');
document.getElementById('ProduitDispo').appendChild(div)  

div.innerHTML = `<img src="Images/${teddyImage}" alt="ours en peluche"/>
<br/>Teddy: ${teddyName}
<br/>Color: ${teddyColor} 
<br/>${teddyPrice}
<br/><button>Voir le produit</button>`;


}
CreationProduit('teddy_1.jpg','Nobert','Tan, Chocolate, Black, White',2900);
CreationProduit('teddy_2.jpg','Arnold','Pale brown,Dark brown,White',3900);
CreationProduit('teddy_3.jpg','Lenny and Carl','Brown',5900);
CreationProduit('teddy_4.jpg','Gustav','Brown, Blue, Pink',4500)
CreationProduit('teddy_5.jpg','Garfunkel','Beige, Tan, Chocolate',5500)


