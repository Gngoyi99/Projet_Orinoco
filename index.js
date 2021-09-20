/** let elt = document.getElementById('ProduitDispo');
 
elt.innerHTML = "<div><h3>Nobert</h3><h3>Tan, Chocolate, Black, White</h3><h3>2900</h3></div>";
elt.style.width = "400px"; 
elt.style.border = "2px black solid"; 
elt.style.textAlign = "center"; 

/** 
let div = document.createElement("div");

document.getElementById("ProduitDispo").appendChild(div);**/

const teddies = 
[ 
    {
    imageUrl:'teddy_1.jpg',
    name: 'Nobert',
    _id: '5be9c8541c9d440000665243',
    colors: ['Tan, Chocolate, Black, White'],
    price: 2900,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
    imageUrl:'teddy_2.jpg',
    name: 'Arnold',
    _id: '5beaa8bf1c9d440000a57d94',
    colors: ['Pale brown,Dark brown,White'],
    price: 3900,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
    imageUrl:'teddy_3.jpg',
    name: 'Lenny and Carl',
    _id: '5beaaa8f1c9d440000a57d95',
    colors: ['Brown'],
    price: 5900,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
    imageUrl:'teddy_4.jpg',
    name: 'Gustav',
    _id: '5beaabe91c9d440000a57d96',
    colors: ['Brown, Blue, Pink'],
    price: 4500,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   },
   {
    imageUrl:'teddy_5.jpg',   
    name: 'Garfunkel',
    _id: '5beaacd41c9d440000a57d97',
    colors: ['Beige, Tan, Chocolate'],
    price: 5500,
    description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
   }
]
for (let i in teddies){
    console.log("article" + [i])
}
;  
 


function CreationProduit(teddiesImageUrl,teddiesName,teddies_Id,teddiesColors,teddiesDescription,teddiesPrice){

let div = document.createElement('div');
div.classList.add('Product');
document.getElementById('ProduitDispo').appendChild(div)  

div.innerHTML = `<img src="Images/${teddiesImageUrl}" alt="ours en peluche"/>
<br/>Teddy: ${teddiesName}
<br/>${teddies_Id}
<br/>Color: ${teddiesColors}
<br/>${teddiesDescription}
<br/>${teddiesPrice}
<br/><button>Voir le produit</button>`;



}
CreationProduit(teddies[0].imageUrl,teddies[0].name,teddies[0]._id,teddies[0].colors,teddies[0].description,teddies[0].price);
CreationProduit(teddies[1].imageUrl,teddies[1].name,teddies[1]._id,teddies[1].colors,teddies[1].description,teddies[1].price);
CreationProduit(teddies[2].imageUrl,teddies[2].name,teddies[2]._id,teddies[2].colors,teddies[2].description,teddies[2].price);



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

  





