//// Variables globales ////


let joueurActuel = "X";
let scoreX = 0;
let scoreO = 0;





//// On attend que le HTML soit chargé ////


document.addEventListener('DOMContentLoaded', function (){
    let boutons = document.querySelectorAll('.btn_jeux');
    
    boutons.forEach(function(bouton) {
        bouton.addEventListener('click', function() {
            joueurCoup(bouton);
        });
    });
    

    // on ajoute X ou O en fonction du joueur qui joue
   
    function joueurCoup(bouton) {
        console.log("on a cliqué sur un bouton !");
        bouton.querySelector('span').textContent = joueurActuel;
    }


    // Changer de joueur après chaque clic :

    function joueurCoup(bouton){
        console.log("on a cliqué sur un bouton !");
        bouton.querySelector('span').textContent = joueurActuel;

        if (joueurActuel === "X"){
            joueurActuel = "O";
        } else {
            joueurActuel = "X";
        }
    }
});