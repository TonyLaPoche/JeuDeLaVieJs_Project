const createGame = {
    areaGame: [],// on commence avec un tableau vide
    btnRandom: document.getElementById('btnRandom'), 
    btnEmpty: document.getElementById('btnEmpty'),
    input: document.getElementById('input'), // valeur de la génération de $areagame = []
    plateau: document.getElementById('gameboard'),  // affichage du gameboard sur l'index.html
    cellToColor : [],
    etat : ["mort", "vivant"], // tableau indexé de mort ou vivant 

    init: function () {
        createGame.checkStatus(createGame.areaGame); // ça initialisera le checkstatus
        // console.log(createGame.areaGame)
        console.log("init lancée")
        
    },

    SubmitFormEmpty: function (event){
        event.preventDefault();
        const displayGame = createGame.plateau; 
        let creatTab = createGame.areaGame;
        let inputNumber = createGame.input.value;

        displayGame.innerHTML="";

        for (let row = 0; row < inputNumber; row++) {
            creatTab.push([]);
            let newRow = document.createElement("div");
            newRow.classList.add('ligne', row)
            displayGame.append(newRow);
            for (let cell = 0; cell < inputNumber; cell++) {
                creatTab[row].push(0);
                let newCell = document.createElement("div");
                newCell.classList.add('cellule',createGame.etat[0]);
                newRow.append(newCell);
                createGame.cellToColor.push(newCell.addEventListener('click', createGame.toColor));
            }
        }

        
        createGame.areaGame = creatTab;       
    },

    SubmitFormRandom: function (event){
        event.preventDefault();
        const displayGame = createGame.plateau; 
        let creatTab = createGame.areaGame;
        let inputNumber = createGame.input.value;

        displayGame.innerHTML="";

        for (let row = 0; row < inputNumber; row++) {
            creatTab.push([]);
            let newRow = document.createElement("div");
            newRow.classList.add('ligne', row)
            displayGame.append(newRow);
            for (let cell = 0; cell < inputNumber; cell++) {
                let rdm = Math.round(Math.random(0,2));
                creatTab[row].push(rdm);
                let newCell = document.createElement("div");
                newCell.classList.add('cellule',createGame.etat[rdm]);
                newRow.append(newCell);
                createGame.cellToColor.push(newCell.addEventListener('click', createGame.toColor));
            }
        }

        
        createGame.areaGame = creatTab;       
    },

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


createGame.btnEmpty.addEventListener('click', createGame.SubmitFormEmpty);
createGame.btnRandom.addEventListener('click', createGame.SubmitFormRandom);


//*console.table(createGame.areaGame);
// permet d'afficher son tableau
