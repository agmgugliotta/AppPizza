# Pizza App V0

1 Liste des pizza :white_check_mark:
* Photo
* Nom
* Prix
* Bouton ajout dans le panier
* Au clique sur la pizza (tout champs confondu) la page détail s'affiche

2 Détail d'une pizza :white_check_mark:
* Photo
* Nom
* Ingrédient(s)
* Prix
* Bouton ajout dans le panier

3 Panier :
* Un bouton est disponible dans le header avec une icône panier :white_check_mark:
* Ce bouton affiche le nombre de pizza dans le panier s'il y en a :white_check_mark:
* Au clic sur le bouton du header, une liste apparait avec les pizza présentes dans le panier :white_check_mark:
* Un bouton de suppression est disponible sur chaque pizza de la liste :white_check_mark:
* Il est possible de choisir la quantité de pizza

4 Administration :
* Liste des pizza :white_check_mark:
* Un bouton de suppression (message d'avertissement avant la réelle suppression) pour chaque pizza :white_check_mark:
* Un bouton de modification pour chaque pizza qui redirige vers un formulaire :white_check_mark:
* Un bouton est présent dans le header pour ajouter: une pizza ou un ingredient qui redirige vers le même formulaire que la modification :white_check_mark:
* Liste des ingrédients :white_check_mark:
* CRUD des ingrédients similaire aux pizza
    CREATE : :white_check_mark:
    READ : :white_check_mark:
    UPDATE : Ingredient : Se met à jour mais les données de l'ingrédient à update ne s'affiche pas dans le HTML
             Pizza : Se met à jour mais les données de la pizza à update ne s'affiche pas dans le HTML
                     Pas de MAJ des ingrédients
    
5 Formulaire : *TO DO*
* Ingredients :white_check_mark:
    *  Nom 
* Pizza : :white_check_mark:
    * Photo
    * Nom
    * Prix 
    * Ingrédients

API :

liste des ressources https://api.ynov.jcatania.io/db
* Pizza : https://api.ynov.jcatania.io/pizza
* Ingrédient : https://api.ynov.jcatania.io/ingredient
