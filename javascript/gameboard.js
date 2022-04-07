const createGame = {
    areaGame: [],// on commence avec un tableau vide
    inputForm: document.getElementById('formGame'), // propiété du formulaire
    input: document.getElementById('input'), // valeur de la génération de $areagame = []
    plateau: document.getElementById('gameboard'),  // affichage du gameboard sur l'index.html
    cellToColor : [],
    etat : ["mort", "vivant"], // tableau indexé de mort ou vivant 

    init: function () {
        createGame.checkStatus(createGame.areaGame); // ça initialisera le checkstatus
        console.log(createGame.areaGame)
        console.log("init lancé")
        
    },


    SubmitForm: function (event){
        event.preventDefault();
        // console.clear();
        //* affichage du jeu
        const displayGame = createGame.plateau; 
        //* on copie aeragame[] dans creaTab[]
        let creatTab = createGame.areaGame;
        //* gestion de l'int qui génère la taille du displayGame
        let inputNumber = createGame.input.value;

            // à chaque lancement d'un tableau
            // on vide l'air de jeu
            // on nettoie l'affichage html du jeu

        displayGame.innerHTML="" 
        createGame.areaGame = [];  

        // cette première boucle For permet de crée une ligne
        // elle se base sur la value input 

        for (let row = 0; row < inputNumber; row++) {
            creatTab.push([]);
            // rajoute un index au tableau (il accueuillera les cellules)
            let newRow = document.createElement("div");
            // initialise la création de <div>
            newRow.classList.add('ligne', row)
            // précise qu'à chaque création on lui rajoute la classe "ligne (son numéro)"
            displayGame.append(newRow);
            // on crée les div avec classe
            
            
            // après CHAQUE création de div et d'init de tableau
            // on relance une boucle for qui créera dans chaque ligne
            // autant de "cellule" qu'il y aura de ligne
            for (let cell = 0; cell < inputNumber; cell++) {
                let rdm = Math.round(Math.random(0,2))
                creatTab[row].push(rdm);
                // autant de Block "cellule"
                let newCell = document.createElement("div");
                newCell.classList.add('cellule',createGame.etat[rdm]);
                newRow.append(newCell);
                createGame.cellToColor.push(newCell.addEventListener('click', createGame.toColor))
                
            }
        }

        
        return createGame.areaGame = creatTab;       
    }, // on fini avec un tableau généré

    checkStatus: function (areaGame){
        //console.log(divLigne[0].childNodes[0])//!
        //console.log(divLigne[0].childNodes)//!
        for (let row = 0; row < areaGame.length; row++) {
            
            let divLigne = document.getElementsByClassName(`ligne ${row}`)            
            for (let cel = 0; cel < areaGame.length; cel++) {
                if (areaGame[row][cel] === 0 && divLigne[0].childNodes[cel].classList.contains('vivant')) {
                    areaGame[row][cel] = 1;
                    continue;
                } else if (areaGame[row][cel] === 1 && divLigne[0].childNodes[cel].classList.contains('mort')){
                    areaGame[row][cel] = 0;
                    continue;
                }
                
            }
        }
    },

    toColor: function () {

        console.log(this)
        if (this.classList.contains('vivant')) {
            this.classList.remove('vivant');
            this.classList.add('mort');
        }else {
            this.classList.remove('mort');
            this.classList.add('vivant');    
        }
        createGame.init();               
    }
    
}


createGame.inputForm.addEventListener('submit', createGame.SubmitForm);


//*console.table(createGame.areaGame);
// permet d'afficher son tableau
