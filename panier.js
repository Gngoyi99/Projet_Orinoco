let products = JSON.parse(localStorage.getItem("products"));
        console.log(products);

        ////Ajout de produit dans le Localstorage
        const AjoutProduitLocalStorage = () => {products.push(optionsProduit);
            localStorage.setItem('products', JSON.stringify(products));
            console.log(products);} 

//----------------------------------------------AFFICHAGE panier-----------------------

const Panier = document.querySelector('.ArticleChoix');

/// 1ere hypothese le panier est vide
if (products === null || products == 0 ){
    const PanierVide = `
    <div class="PanierVide">
        <img src="/orinoco-frontend/Images/giphy.gif"/>
        <div>Le panier est vide...</div>
    </div>    `;

    Panier.innerHTML = PanierVide;
}else{
    //  2eme hypothese le panier n'est pas vide(Produit dans le localStorage)
    let structureProduitPanier = [];

    for(j = 0; j < products.length; j++){
    /// console.log("ici" + products.length);
    structureProduitPanier = structureProduitPanier + `
   
    <div>Ours:<strong>${products[j].name}</strong> Couleur:<strong> ${products[j].color}</strong> Quantité:<strong> ${products[j].quantite}</strong> </div>
    <div>Prix: <strong>${products[j].prix}€</strong> <button class="btnSupprimer">supprimer l'article</button></div>
    <br>
   
    `
    }
    if(j == products.length){
    //html dans le panier
    Panier.innerHTML = structureProduitPanier;
    }

}
////Supprimer un article
let btnSupprimer = document.getElementsByClassName("btnSupprimer");

    for(let k = 0; k < btnSupprimer.length; k++){
    btnSupprimer[k].addEventListener("click", (event)=>{
        event.preventDefault();
        console.log(event)

    let id_supprimer = products[k].color;
    console.log(id_supprimer);

    products = products.filter( el => el.color !== id_supprimer);
    console.log(products);
    
    localStorage.setItem('products', JSON.stringify(products));

    alert("Produit supprimé");
    window.location.href = "panier.html"

    }) ;    
}

           
///Montant total
let MontantTotalPanier = [];

if (products === null || products == 0){

console.log("c'est vide")

}else{
    for (let l = 0; l < products.length; l++){
        let MontantPanier =  products[l].prix;
        console.log(MontantPanier);
    
        MontantTotalPanier.push(MontantPanier);
        console.log(MontantTotalPanier); 
    }
    

    //Voir la methode reduce
    const reducer = (previousValue, currentValue) => previousValue + currentValue;
    const PrixTotal = MontantTotalPanier.reduce(reducer, 0);
    console.log(PrixTotal);

    //Prix dans le html
    DivPanier = document.getElementsByClassName("MontantPanier");
    
    const AffichageMontantTotal =`
    <button class="ViderPanier">Vider le panier</button>
    <div class="MontantPanier">Montant Total <strong>${PrixTotal}€ </strong></div>
    `
    Panier.insertAdjacentHTML("beforeend", AffichageMontantTotal); 
    Formulaire();
    ////vider le panier
    const BtnViderPanier = document.querySelector(".ViderPanier");

    BtnViderPanier.addEventListener("click", (event)=>{
    event.preventDefault;
    localStorage.removeItem("products");

    ////alert("Le panier a été vidé");

    window.location.href = "panier.html";
    
    
});
}
/////////////////////////////Formulaire///////////////////////////

   
/////Création du formulaire
    function Formulaire(){

        const AffichageFormulaire = document.querySelector(".AffichageFormulaire");
        console.log(AffichageFormulaire);
    
        AffichageFormulaire.innerHTML = `
        <h2 class="Presentation2-PagePanier">Remplir le formulaire:</h2>
                <label for="firstName">Prénom:</label><span id="firstnameManquant"></span>
                <input type="text" id="firstName" name="firstName" required>

                <label for="lastName">Nom:</label><span id="lastNameManquant"></span>
                <input type="text" id="lastName" name="lastName" required>

                <label for="address">Adresse:</label><span id="addressManquant"></span>
                <input type="text" id="address" name="address" required>

                <label for="city">Ville:</label><span id="cityManquant"></span>
                <input type="text" id="city" name="city" required>

                <label for="email">Email:</label><span id="emailManquant"></span>
                <input type="text" id="email" name="email" required>

        <div>
        <img src="/orinoco-frontend/Images/mode de paiement.PNG"/>
            <button class="BtnEnvoyerFormulaire">Commander</button>
        </div>
        `;
    }
///Bouton EnvoyerFormulaire + Ecoute

const BtnEnvoyerFormulaire = document.querySelector(".BtnEnvoyerFormulaire");
console.log(BtnEnvoyerFormulaire);   

BtnEnvoyerFormulaire.addEventListener("click",(event)=>{
    event.preventDefault();
    ////objet Formulaire
    const contact = {
        firstName: document.querySelector("#firstName").value,
        lastName: document.querySelector("#lastName").value,
        address: document.querySelector("#address").value,
        city: document.querySelector("#city").value,
        email: document.querySelector("#email").value,
    
    };
    console.log(contact);
////je récupère l'id que j'envois au serveur////
    const productId = products.map((products)=>products.id);
    console.log(productId);

    /////////////////////////////////Validation formulaire////////////

    ///création de fontion 
                /////regex: firstname,lastname, city et adress
    const regexFirstnameLastnameCity = (value) => {
        return /^([A-Za-z]{2,20})?([-]{0,1})?([A-Za-z]{2,20})$/.test(value);
    }
                ///regex Email
    const regexEmail = (value) => {
        return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(value);
    }
                ///regex Email
    const regexAdress = (value) => {
        return /^[A-Za-z0-9\s]{5,50}$/.test(value);
    }

                /////textAlert
    const textAlert = (value) => {
        return `${value}: Les chiffres et symboles ne sont pas autorisés`;
    }   
                /////textAlert2
    const textAlert2 = (value) => {
        return `${value}: Mauvaise synthaxe pour l'adresse mail(...@mail.fr)`;
    } 
             
    ///

    function FirstnameControle(){
        ///fistname
        const TheFistname = contact.firstName;
        if (regexFirstnameLastnameCity(TheFistname)){
            document.querySelector("#firstnameManquant").textContent = "";
            return true
        }else{
            document.querySelector("#firstnameManquant").textContent = "Veuillez bien remplir ce champs (Prénom)";
            (textAlert("firstname"))
            return false
        };
    }    

    function LastnameControle(){
        ///lastname
        const TheLastname = contact.lastName;
        if (regexFirstnameLastnameCity(TheLastname)){
            document.querySelector("#lastNameManquant").textContent = "";
            return true
        }else{
            document.querySelector("#lastNameManquant").textContent = "Veuillez bien remplir ce champs (Nom)";
            (textAlert("lastName"))
            return false
        };
    }   
    
    function CityControle(){
        ///city
        const TheCity = contact.city;
        if (regexFirstnameLastnameCity(TheCity)){
            document.querySelector("#cityManquant").textContent = "";
            return true
        }else{
            document.querySelector("#cityManquant").textContent = "Veuillez bien remplir ce champs (Ville)";
            (textAlert("city"))
            return false
        };
    }    

    function AdressControle(){
        ///adress
        const TheAdress = contact.address;
        if (regexAdress(TheAdress)){ 
            document.querySelector("#addressManquant").textContent = ""; 
            return true
        }else{
            document.querySelector("#addressManquant").textContent = "Veuillez bien remplir ce champs (Adresse)";
            (textAlert("address"))
            return false
        };
    } 
    
    function EmailControle(){
        ///adress
        const TheEmail = contact.email;
        if (regexEmail(TheEmail)){ 
            document.querySelector("#emailManquant").textContent = ""; 
            return true
        }else{
            document.querySelector("#emailManquant").textContent = "Veuillez bien remplir ce champs (...@mail.fr)";
            (textAlert2("Email"));
            return false
        };

    }

    if (FirstnameControle() && LastnameControle() && CityControle() && AdressControle() && EmailControle()){

        localStorage.setItem('contact', JSON.stringify(contact));
        
        
        }else{
            //alert("Les champs doivent être correctement remplis")
        }
        
        ////objet à envoyer au serveur
            const EnvoisVersServeur = {
                productId,
                contact,
                
            }
            console.table(EnvoisVersServeur);
            //console.log(EnvoisVersServeur);
        ////Envoi des objets au serveur

        const promise = fetch('http://localhost:3000/api/teddies/order', {
            method: "POST",
            body: JSON.stringify(EnvoisVersServeur),
            headers:{
                "Content-type": "application/json",
            },
        });
        /////résultat du serveur dans la console
        promise.then(async(response)=>{
            try{
                console.log("response");
                console.log(response)

                const contenu = await response.json();
                console.log("contenu");
                console.log(contenu);
            }catch(e){
                console.log(e);
            }
        });
       

        
        ///Mettre les informations du client dans le formulaire à partir du localStorage
        
        const dataLocalStorage = localStorage.getItem("contact");
        
        ///Objet Javascript
        
        const dataLocalStorageObjet = JSON.parse(dataLocalStorage);
        
        ///Valeur enregistré dans le formulaire
        const ContactEnregistrer = {

            firstName:document.querySelector("#firstName").setAttribute('value' , dataLocalStorageObjet.firstName),
            lastName:document.querySelector("#lastName").setAttribute('value' , dataLocalStorageObjet.lastName),
            address:document.querySelector("#address").setAttribute('value' , dataLocalStorageObjet.address),
            city:document.querySelector("#city").setAttribute('value' , dataLocalStorageObjet.city),
            email:document.querySelector("#email").setAttribute('value' , dataLocalStorageObjet.email),
        
        };
        console.log(dataLocalStorageObjet);


})


