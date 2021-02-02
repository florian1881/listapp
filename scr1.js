let reference = [];

 // Show all references into a boostrap array
function showAll() {
  let result="";
  for (let index = 0; index < reference.length; index++) {
   
    result += `
    <tr>
    <th scope="row">${index+1}</th>
    <td class="">${reference[index][0]}</td>
    <td>${reference[index][1]}</td>
    <td><button class="btn btn-light border border-secondary">Modifier la référence</button></td>
    <td><button class="btn btn-light border border-secondary" onclick=deleteReference(${index})>Supprimer la référence</button></td>
    </tr>`
  };
  document.getElementById("tableau").innerHTML = result;
};

/**show a reference >> modif du nom >> searchRef
 * based on idPick given by user */


function newReference() {

  //reset information field
  document.getElementById("information").innerHTML = " ";

  if (document.getElementById("nom").value != "") {

    if (document.getElementById("colisId").value != "") {

      reference.push([document.getElementById("nom").value, document.getElementById("colisId").value]);
      showAll();
    }//endif nom
  }//endif colisID
   else
    document.getElementById("information").innerHTML = "vous avez laisser un champ vide";
}//end function reference



function deleteReference(id){
 reference.splice(id,1);
 showAll();
}

/*
 * Fonction modification d'une reference
 * La recherche affiche le resultats et un bouton permet de se baser sur le contenu des champs info et result
 * pour supprimer le bon element
 * Mettre le tout dans une fenêtre flottante
 */

// creer le système d'incrementation avec les lettres.  