/**
 * Created by Garance on 11/10/2015.
 */
var recipeData = {
    recette: {
        nom: "muffin",
        etapes: [
            {
                ordre: "1",
                contenu: "faire fondre beurre et chocolat",
                ingredients: [
                    {
                        index: "1"
                    },
                    {
                        index: "2"
                    }
                ]
            },
            {
                ordre: "2",
                contenu: "mélanger avec le sucre",
                ingredients: [
                    {
                        index: "1"
                    },
                    {
                        index: "2"
                    },
                    {
                        index: "3"
                    }
                ]
            }
        ],
        ingredients: [
            {
                index: "1",
                nom: "beurre",
                quantite: "120g"
            },
            {
                index: "2",
                nom: "chocolat",
                quantite: "200g"
            },
            {
                index: "3",
                nom: "sucre",
                quantite: "100g"
            }
        ]
    }
};
console.log("hors de tout");


var ingredientsCounter = 0;
var tbody = document.getElementById('ingredientsList');

var ingredientsTable = recipeData.recette.ingredients;
var ingredientLookup = {};

var printIngredients = function () {
    for (var i = 0; i < ingredientsTable.length; i++) {
        //We create a look up table at the same time, for future use
        console.log(ingredientLookup);
        ingredientLookup[ingredientsTable[i].index] = ingredientsTable[i].nom;
        console.log('coucou', i);
        console.log('un ingredient !');
        var tr = "<tr>";

        /* Must not forget the $ sign */
        tr += "<td>" + ingredientsTable[i].nom + "</td>" + "<td>" + ingredientsTable[i].quantite + "</td></tr>";

        /* We add the table row to the table body */
        tbody.innerHTML += tr;
    }
};


function load() {
    console.log("coucou");
    //   var myRecipe = JSON.parse(recipeData);
    document.getElementById('nomRecette').innerHTML = recipeData.recette.nom;
    printIngredients();

}
load();


//On ajoute une fonction "fillCarousel"

//Pour ajouter la liste d'ingrédients de l'étape dans le cas de la tablette
var makeUL = function(array) {
    // Create the list element:
    var list = document.createElement('ul');

    for (var i = 0; i < array.length; i++) {
        // Create the list item:
        var item = document.createElement('li');
        var ingredient = ingredientLookup[array[i].index];
        // Set its contents:
        item.appendChild(document.createTextNode(ingredient));

        // Add it to the list:
        list.appendChild(item);
    }

    // Finally, return the constructed list:
    return list;
};

// Add the contents of options[0] to #foo:
//can this function be used to fill every part of the carousel through a loop ?
//document.getElementsByClassName()
document.getElementById('ingredientList1').appendChild(makeUL(recipeData.recette.etapes[0].ingredients));
document.getElementById('stepContent1').innerHTML  = recipeData.recette.etapes[0].contenu;
document.getElementById('ingredientList2').appendChild(makeUL(recipeData.recette.etapes[1].ingredients));
document.getElementById('stepContent2').innerHTML  = recipeData.recette.etapes[1].contenu;