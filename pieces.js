// Récupération des pièces depuis le fichier JSON
const reponse = await fetch("pieces-autos.json");
const pieces = await reponse.json();

const article = pieces[0];
/* const imageElement = document.createElement("img");
imageElement.src = article.image;

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} € (${article.prix < 35 ? "€" : "€€€"})`;

const categorieElement = document.createElement("p");
categorieElement.innerText = article.categorie ?? "(aucune catégorie)";

const descriptionElement = document.createElement("p");
descriptionElement.innerText = article.description ?? "Pas de description pour le moment.";

const disponibiliteElement = document.createElement("p");
disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock";

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categorieElement);
sectionFiches.appendChild(descriptionElement);
sectionFiches.appendChild(disponibiliteElement); */

for (let i = 0; i < pieces.length; i++){
    //Récupération de l'élément du DOM qui accueillera les fiches
    const sectionFiches = document.querySelector(".fiches");
    //Création d'une balise dédiée à une pièce automobile
    const pieceElement = document.createElement("article");
    //On crée l'élément img
    const imageElement = document.createElement("img");
    //on accede a l'indice i de la liste pieces pour configurer la source de l'image ainsi que toutes les autres informations
    imageElement.src = pieces[i].image;
    nomElement.innerText = pieces[i].nom;
    prixELement.innerText = pieces[i].prix;
    categorieELement.innerText = pieces[i].categorie;
    disponibiliteElement.innerText = pieces[i].disponibilite;
    descriptionElement.innerText = pieces[i].description;
    //On rattache la balise article a la section fiches
    sectionFiches.appendChild(pieceElement);
    //On rattache l'image a pieceElement (la valise article) ainsi que toutes les autres informations
    pieceElement.appendChild(imageElement);
    pieceElement.appendChild(nomElement);
    pieceElement.appendChild(prixElement);
    pieceElement.appendChild(categorieElement);
    pieceElement.appendChild(descriptionElement);
    pieceElement.appendChild(disponibiliteElement);
    
}
