export class Command{
    nom_complet:String;
    telephone:Number;
    adresse:String;
    ville:String;
    code_postal:String;
    email:String;
    nom_produit:String;
    prix_produit:Number;
    quantite_produit:Number;
    pointure_produit:Number;
    couleur_produit:String;
    prix_total:Number;




    constructor(nom_complet:String,telephone:Number,adresse:String,ville:String,code_postal:String,email:String,nom_produit:String,prix_produit:Number,quantite_produit:Number,pointure_produit:Number,couleur_produit:String,prix_total:Number){
        
        this.nom_complet = nom_complet;
        this.telephone = telephone;
        this.adresse = adresse;
        this.ville = ville;
        this.code_postal = code_postal;
        this.email = email;
        this.nom_produit = nom_produit;
        this.prix_produit = prix_produit;
        this.quantite_produit = quantite_produit;
        this.pointure_produit = pointure_produit;
        this.couleur_produit = couleur_produit;
        this.prix_total = prix_total;
    }
}