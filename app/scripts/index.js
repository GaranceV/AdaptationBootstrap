/**
 * Created by Garance on 11/10/2015.
 */
var recipeData = {
    recette:{
        nom:"muffin",
        etapes:[
            {
                ordre:"1",
                contenu:"faire fondre beurre et chocolat",
                ingredients:[
                    {
                        index:"1"
                    },
                    {
                        index:"2"
                    }
                ]
            },
            {
                ordre:"2",
                contenu:"mélanger avec le sucre",
                ingredients:[
                    {
                        index:"1"
                    },
                    {
                        index:"2"
                    },
                    {
                        index:"3"
                    }
                ]
            }
        ],
        ingredients:[
            {
                index:"1",
                nom:"beurre",
                quantite:"120g"
            },
            {
                index:"2",
                nom:"chocolat",
                quantite:"200g"
            },
            {
                index:"3",
                nom:"sucre",
                quantite:"100g"
            }
        ]
    }
};
console.log("hors de tout");


var ingredientsCounter = 0;
var tbody = document.getElementById('ingredientsList');

var printIngredients = function(myRecipe) {
    for (var i = 0; i < myRecipe.ingredients.length; i++) {
        console.log('un ingredient !');
        var tr = "<tr>";

        /* Must not forget the $ sign */
        tr += "<td>" + myRecipe.ingredients[i].nom + "</td>" + "<td>" + myRecipe.ingredients[i].quantite + "</td></tr>";

        /* We add the table row to the table body */
        tbody.innerHTML += tr;
    }
    };

function load() {
    console.log("coucou");
 //   var myRecipe = JSON.parse(recipeData);
    var myRecipe = recipeData.recette;
    console.log(myRecipe.ingredients);
    document.getElementById('nomRecette').innerHTML = myRecipe.nom;
    printIngredients(myRecipe);
}
load();


//On ajoute une fonction "fillCarousel"

