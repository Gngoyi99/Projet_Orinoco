/** let elt = document.getElementById('ProduitDispo');
 
elt.innerHTML = "<div><h3>Nobert</h3><h3>Tan, Chocolate, Black, White</h3><h3>2900</h3></div>";
elt.style.width = "400px"; 
elt.style.border = "2px black solid"; 
elt.style.textAlign = "center"; 

/** 
let div = document.createElement("div");

document.getElementById("ProduitDispo").appendChild(div);**/

let teddy = {
    image:'teddy_1.jpg',
    name: 'Nobert',
    color: 'Tan, Chocolate, Black, White',
    price: 2900,
  };
  let teddy1 = {
    image:'teddy_2.jpg',
    name: 'Arnold',
    color: 'Pale brown,Dark brown,White',
    price: 3900,
  };
  let teddy2 = {
    image:'teddy_3.jpg',
    name: 'Lenny and Carl',
    color: 'Brown',
    price: 5900,
  };
  let teddy3 = {
    image:'teddy_4.jpg',
    name: 'Gustav',
    color: 'Brown, Blue, Pink',
    price: 4500,
  };
  let teddy4 = {
    image:'teddy_5.jpg',   
    name: 'Garfunkel',
    color: 'Beige, Tan, Chocolate',
    price: 5500,
  };  
 
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
CreationProduit(teddy.image,teddy.name,teddy.color,teddy.price);
CreationProduit(teddy1.image,teddy1.name,teddy1.color,teddy1.price);
CreationProduit(teddy2.image,teddy2.name,teddy2.color,teddy2.price);
CreationProduit(teddy3.image,teddy3.name,teddy3.color,teddy3.price);
CreationProduit(teddy4.image,teddy4.name,teddy4.color,teddy4.price);

fetch("https://raw.githubusercontent.com/OpenClassrooms-Student-Center/JWDP5/master/models/Teddy.js")
.then(function(res) {
    if(res.ok) {
        return res.json();
    }
  })
  .then(function(value) {
      console.log(value);
  })
  .catch(function(err) {
      //une erreur est survenue
  });





